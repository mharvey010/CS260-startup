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
                <li className="nav-item"><a className="nav-link active" href="index.html">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="play.html">Play Reactions</a></li>
                <li className="nav-item"><a className="nav-link" href="scores.html">Scoreboard</a></li>
              </menu>
            </nav>
            <hr />
          </header>

          <main className="container-fluid text-center">
            stuff to be filled in
          </main>

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