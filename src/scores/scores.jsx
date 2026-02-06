import React from 'react';
import './scores.css';


export function Scores() {
  return (
    <main>
        <h2>All Time Leaderboard (DB data placeholder)</h2>
        <table className="table">
            <tr>
            <th>Rank</th>
            <th>Player</th>
            <th>Score</th>
            </tr>
            <tr>
            <td>1</td>
            <td>Bob the totally human man</td>
            <td>0.023 seconds</td>
            </tr>
            <tr>
            <td>2</td>
            <td>SuperSpeed</td>
            <td>0.030 seconds</td>
            </tr>
            <tr>
            <td>3</td>
            <td>Max Verstappen</td>
            <td>0.095 seconds</td>
            </tr>
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