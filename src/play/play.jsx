import React from 'react';
import './play.css';
import { ReactionGame } from './reactionGame';

export function Play({ userName }) {
  const [personalBest, setPersonalBest] = React.useState('00.000');

  async function updatePersonalBest() {
      const response = await fetch('/api/personal-best');
      if (!response.ok) {
        return;
      }

      const result = await response.json();
      if (result?.personalBest != null) {
        setPersonalBest(parseFloat(result.personalBest));
      } else {
        setPersonalBest('00.000');
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