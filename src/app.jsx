import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Play } from './play/play';
import { Scores } from './scores/scores';
import { AuthState } from './login/authState';

export default function App() {
  const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
  const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
  const [authState, setAuthState] = React.useState(currentAuthState);
  const [presenceText, setPresenceText] = React.useState('Loading...');
  const [presenceError, setPresenceError] = React.useState(null);

  React.useEffect(() => {
    const presenceApiUrl = 'https://api.lanyard.rest/v1/users/419560236140068865';

    async function loadPresence() {
      try {
        const response = await fetch(presenceApiUrl);
        if (!response.ok) {
          throw new Error(`Presence API returned ${response.status}`);
        }

        const data = await response.json();
        const selectedValue = data?.discord_status ?? data?.data?.discord_status ?? 'Unknown';

        setPresenceText(selectedValue);
        setPresenceError(null);
      } catch (error) {
        console.error('Unable to load presence data:', error);
        setPresenceText('Unavailable');
        setPresenceError(error.message);
      }
    }

    loadPresence();
  }, []);

  return (
    <BrowserRouter>
        <div className="app">
          <header>
            <h1>Reactions</h1>
            <nav>
              <menu className="nav nav-underline">
                <li className="nav-item"><NavLink className="nav-link" to="">Home</NavLink></li>
                {authState === AuthState.Authenticated && (
                  <li className="nav-item"><NavLink className="nav-link" to="play">Play Reactions</NavLink></li>
                )}
                {authState === AuthState.Authenticated && (
                  <li className="nav-item"><NavLink className="nav-link" to="scores">Scoreboard</NavLink></li>
                )}
              </menu>
            </nav>
            <hr />
          </header>

          <Routes>
            <Route
              path='/'
              element={
                <Login
                  userName={userName}
                  authState={authState}
                  onAuthChange={(userName, authState) => {
                    setAuthState(authState);
                    setUserName(userName);
                  }}
                />
              }
            />
            <Route path='/play' element={<Play userName={userName} />} />
            <Route path='/scores' element={<Scores />} />
            <Route path='*' element={<NotFound />} />
          </Routes>

          <footer>
            <div className="container-fluid">
              <span>Author: Michael Harvey</span>
              <a href="https://github.com/mharvey010/CS260-startup">GitHub</a>
              <p>Michael Harvey's Discord Presence: {presenceText}</p>
            </div>
          </footer>
        </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
}