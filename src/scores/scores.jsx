import React from 'react';
import './scores.css';
import { UpdateEvent, liveUpdateNotifier } from './liveUpdateNotifier';

export function Scores() {
  const [scores, setScores] = React.useState([]);
  const [liveUpdates, setLiveUpdates] = React.useState([]);

  React.useEffect(() => {
    fetch('/api/scores')
      .then((response) => response.json())
      .then((scores) => scores.sort((a, b) => a.score - b.score))
      .then((scores) => {
        setScores(scores);
      })
      .catch((error) => console.error('Failed to load scores:', error));
  }, []);

  React.useEffect(() => {
    async function loadRecentScores() {
      try {
        const response = await fetch('/api/recent-scores');
        if (!response.ok) {
          throw new Error('Failed to load recent scores');
        }

        const recentScores = await response.json();
        const initialEvents = recentScores.map((score, index) => ({
          timestamp: Date.now() - (index * 1000),
          type: 'gameFinished',
          value: {
            player: score.name,
            score: score.score,
            date: score.date,
          },
        }));
        setLiveUpdates(initialEvents);
      } catch (error) {
        console.error('Unable to load recent scores:', error);
      }
    }

    loadRecentScores();
  }, []);

  React.useEffect(() => {
    function handleLiveUpdate(event) {
      setLiveUpdates((prevUpdates) => {
        let newUpdates = [event, ...prevUpdates];
        if (newUpdates.length > 5) {
          newUpdates = newUpdates.slice(0, 5);
        }
        return newUpdates;
      });
    }

    liveUpdateNotifier.addHandler(handleLiveUpdate);

    return () => {
      liveUpdateNotifier.removeHandler(handleLiveUpdate);
    };
  }, []);

  const leaderboardRows = [];
  if (scores.length) {
    for (const [i, score] of scores.entries()) {
      leaderboardRows.push(
        <tr key={i}>
          <td>{i + 1}</td>
          <td>{score.name.split('@')[0]}</td>
          <td>{score.score} seconds</td>
          <td>{score.date}</td>
        </tr>
      );
    }
  } else {
    leaderboardRows.push(
      <tr key='0'>
        <td colSpan='4'>No scores yet. Play the game to add some!</td>
      </tr>
    );
  }

  return (
    <main className="container-fluid text-center">
      <h2>All Time Leaderboard</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Player</th>
            <th>Score</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardRows}
        </tbody>
      </table>
      <br/>
      <h2>Live Update Board</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Player</th>
            <th>Update Message</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {liveUpdates.map((update) => {
            let message = '';
            if (update.type === UpdateEvent.PersonalBest) {
              message = `${update.value.player} achieved a new personal best!`;
            } else if (update.type === UpdateEvent.GameFinished || update.type === 'gameFinished') {
              message = `${update.value.player} finished a game!`;
            }
            return (
              <tr key={update.timestamp}>
                <td>{update.value.player}</td>
                <td>{message}</td>
                <td>{update.value.score} seconds</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
}