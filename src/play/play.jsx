import React from 'react';
import './play.css';
import { ReactionGame } from './reactionGame';

export function Play({ userName }) {
  const [personalBest, setPersonalBest] = React.useState('00.00');

  async function updatePersonalBest() {
    const scoresText = localStorage.getItem('scores');
    if (scoresText) {
      const scores = JSON.parse(scoresText);
      const userScores = scores.filter(score => score.name === userName);
      if (userScores.length > 0) {
        const bestScore = Math.min(...userScores.map(s => s.score));
        setPersonalBest(bestScore);
      }
    }
  };

  React.useEffect(() => {
    updatePersonalBest();
  }, [userName]);

  return (
    <main className="play-page">
        <div className="play-header" style={{ textAlign: 'right' }}>
            Logged in as: <span>{userName.split('@')[0]}</span>
        </div>
        <div className="player-info" style={{ textAlign: 'right' }}>
            Personal Best Time: <span>{personalBest} seconds</span>
        </div>
        <ReactionGame userName={userName} onScoreSaved={updatePersonalBest} />
    </main>
  );
}