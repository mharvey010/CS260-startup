import React from 'react';
import './scores.css';

export function Scores() {
  const [scores, setScores] = React.useState([]);

  React.useEffect(() => {
    const scoresText = localStorage.getItem('scores');
    if (scoresText) {
      const parsedScores = JSON.parse(scoresText);
      parsedScores.sort((a, b) => a.score - b.score);
      setScores(parsedScores);
    }
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
      <h2>Live High Score Updates (Websocket placeholder)</h2>
      <table className="table">
        <tr>
          <th>Player</th>
          <th>Update Message</th>
          <th>Score</th>
        </tr>
        <tr>
          <td>Peter</td>
          <td>Peter got a new personal best!</td>
          <td>0.321 seconds</td>
        </tr>
        <tr>
          <td>James</td>
          <td>James rose from 5th place to 4th place!</td>
          <td>0.215 seconds</td>
        </tr>
        <tr>
          <td>John</td>
          <td>John beat his previous score!</td>
          <td>0.503 seconds</td>
        </tr>
      </table>
    </main>
  );
}