import React from 'react';
import './play.css';
import { ReactionGame } from './reactionGame';

export function Play({ userName }) {
  const [personalBest, setPersonalBest] = React.useState('00.000');

  async function updatePersonalBest(newScore) {
    if (newScore != null) {
        const saveResponse = await fetch('/api/personal-best', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ score: newScore }),
        });
        if (!saveResponse.ok) return;
    }

    const response = await fetch('/api/personal-best');
    if (!response.ok) return;

    const result = await response.json();
    if (result?.personalBest != null) {
        setPersonalBest(parseFloat(result.personalBest));
    } else {
        setPersonalBest('00.000');
    }
}

  React.useEffect(() => {
    updatePersonalBest();
  }, [userName]);

  return (
  <main className="play-page">
    <div className="play-content">
      <div className="play-instructions">
        <p className="play-user">Logged in as: <span id="userName">{userName.split('@')[0]}</span></p>
        <p className="play-personal-best">Personal Best: <span>{personalBest}s</span></p>
        <hr />
        <h2>How to Play</h2>
        <ol>
          <li>Click <strong>Start Game</strong> to begin</li>
          <li>Wait for the circle to turn <strong>green</strong></li>
          <li>Click the circle as fast as you can!</li>
        </ol>
        <p><strong>Try to beat your personal best! Your best time will be saved.</strong></p>
      </div>
      <div className="play-game">
        <ReactionGame userName={userName} onScoreSaved={updatePersonalBest} />
      </div>
    </div>
  </main>
  );
}