import { useState } from "react";
import Board from "./Board";
import { calculateWinner } from "../helpers/calculateWinner";

const Game = () => {
  const [history, setHistory] = useState([
    {
      squares: [...Array(9)].map((_, i) => i.toString()),
    },
  ]);
  const [xIsNext, setXIsNext] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);
  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);
  const status = winner
    ? "Winner: " + winner
    : "Next player: " + (xIsNext ? "X" : "O");

  const jumpTo = (step: number) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };

  const moves = history.map((step, move) => {
    const desc = move ? "Go to move #" + move : "Go to game start";
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  const handleClick = (i: number) => {
    const stepHistory = history.slice(0, stepNumber + 1);
    const current = stepHistory[stepHistory.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i] !== i.toString()) return;
    squares[i] = xIsNext ? "X" : "O";
    setHistory(stepHistory.concat([{ squares }]));
    setStepNumber(stepHistory.length);
    setXIsNext(!xIsNext);
  };

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} onClick={handleClick} />
      </div>
      <div className="game-info">
        <div className="status">{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
};

export default Game;
