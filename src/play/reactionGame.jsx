import React from 'react';
import './reactionGame.css';

export function ReactionGame() {
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

  const startGame = () => {
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

  const handleReactionClick = () => {
    if (buttonState !== 'go') {
      return;
    }

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    const finalTime = (Date.now() - startTimeRef.current) / 1000;
    setDisplayTime(`${finalTime.toFixed(3)} seconds`);
    setButtonState('finished');
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