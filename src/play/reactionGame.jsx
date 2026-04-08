import React from 'react';
import './reactionGame.css';
import { UpdateEvent, liveUpdateNotifier } from '../scores/liveUpdateNotifier.js';

export function ReactionGame({ userName, onScoreSaved}) {
  const [buttonState, setButtonState] = React.useState('ready');
  const [displayTime, setDisplayTime] = React.useState('0.000 seconds');
  const timerRef = React.useRef(null);
  const intervalRef = React.useRef(null);
  const startTimeRef = React.useRef(null);

  React.useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  async function startGame() {
    setButtonState('set');
    setDisplayTime('0.000 seconds');

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    const delay = Math.random() * 3000 + 4000;
    timerRef.current = setTimeout(() => {
      setButtonState('go');
      setDisplayTime('0.000 seconds');
      startTimeRef.current = Date.now();
      intervalRef.current = setInterval(() => {
        const elapsed = (Date.now() - startTimeRef.current) / 1000;
        setDisplayTime(`${elapsed.toFixed(3)} seconds`);
      }, 25);
    }, delay);
  };

  async function saveScore(score) {
    const newScore = {
      name: userName,
      score: parseFloat(score.toFixed(3)),
      date: new Date().toLocaleDateString(),
    };
    
    await fetch('/api/score', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newScore),
    });

    if (onScoreSaved) {
    await onScoreSaved(parseFloat(score.toFixed(3)));
    }

    liveUpdateNotifier.broadcastEvent(userName, UpdateEvent.GameFinished, {
      player: userName.split('@')[0],
      score: parseFloat(score.toFixed(3)),
      date: new Date().toLocaleDateString(),
    });
  };

  async function handleReactionClick() {
    if (buttonState !== 'go') {
      return;
    }

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    const finalTime = (Date.now() - startTimeRef.current) / 1000;
    setDisplayTime(`${finalTime.toFixed(3)} seconds`);
    setButtonState('finished');
    await saveScore(finalTime);
  };


  const buttonLabel = buttonState === 'set' ? 'SET...' : buttonState === 'go' ? 'GO' : 'READY?';
  const buttonClass = buttonState === 'go' ? 'go' : 'waiting';

  return (
    <>
      <div className="reaction-game-timer">
        {displayTime}
      </div>
      <div className="reaction-button-wrapper">
        <button
          className={`reaction-button ${buttonClass}`}
          onClick={handleReactionClick}
          disabled={buttonState !== 'go'}
        >
          {buttonLabel}
        </button>
      </div>
      <div className="reaction-start-wrapper">
        <button className="start-game-button" onClick={startGame}>Start Game</button>
      </div>
    </>
  );
}