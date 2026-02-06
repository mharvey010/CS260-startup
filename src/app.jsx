import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Play } from './play/play';
import { Scores } from './scores/scores';

export default function App() {
  return (
    <BrowserRouter>
        <div className="app bg-dark text-light">
          <header>
            <h1>Reactions</h1>
            <nav>
              <menu className="nav nav-underline">
                <li className="nav-item"><NavLink className="nav-link active" to="index">Home</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to="play">Play Reactions</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to="scores">Scoreboard</NavLink></li>
              </menu>
            </nav>
            <hr />
          </header>

          <Routes>
            <Route path='/' element={<Login />} exact />
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