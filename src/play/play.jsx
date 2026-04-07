import React from 'react';
import './play.css';
import { ReactionGame } from './reactionGame';

export function Play({ userName }) {
  return (
    <main className="play-page">
        <div className="play-header" style={{ textAlign: 'right' }}>
            Logged in as: <span>{userName.split('@')[0]}</span>
        </div>
        <div className="player-info" style={{ textAlign: 'right' }}>
            Personal Best Time: <span>00.00 seconds</span>
        </div>
        <ReactionGame userName={userName} />
    </main>
  );
}