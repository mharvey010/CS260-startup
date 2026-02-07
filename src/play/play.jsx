import React from 'react';
import './play.css';

export function Play() {
  return (
    <main>
        <div style={{ textAlign: 'right' }}>
            Logged in as: <span>Username Placeholder</span>
        </div>
        <div style={{ textAlign: 'right' }}>
            Personal Best Time: <span>00.00 seconds</span>
        </div>
        <div style={{ textAlign: 'center', marginTop: '50px', fontSize: '50px' }}>
            0.000 seconds
        </div>
        <div id="reaction-button" style={{ textAlign: 'center' }}>
            <button>
                <img src="../public/reaction_button.png" style={{ width: '300px', height: '300px' }}/>
            </button>
        </div>
        <div id="game-start" style={{ textAlign: 'center', marginTop: '20px' }}>
            <button style={{ fontSize: '30px' }}>Start Game</button>
        </div>
    </main>
  );
}