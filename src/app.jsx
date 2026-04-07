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
            <Route path='/play' element={<Play />} />
            <Route path='/scores' element={<Scores />} />
            <Route path='*' element={<NotFound />} />
          </Routes>

          <footer>
            <div className="container-fluid">
              <span>Author: Michael Harvey</span>
              <a href="https://github.com/mharvey010/CS260-startup">GitHub</a>
              <p>Discord Presence: (Third-party API integration placeholder)</p>
            </div>
          </footer>
        </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
}