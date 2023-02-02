import { useState } from "react";
import Board from "./Board";
import { calculateWinner } from "../helpers/calculateWinner";

const Game = () => {
  const [history, setHistory] = useState([
    {
      squares: [...Array(9)].map((_, i) => i.toString()),
    },
  ]);
  const current = history[history.length - 1];
  const winner = calculateWinner(current.squares);
  const status = winner ? `Winner: ${winner}` : `Next player: X`;
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (i: number) => {
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i] !== i.toString()) return;
    squares[i] = xIsNext ? "X" : "O";
    setHistory(history.concat([{ squares: squares }]));
    setXIsNext(!xIsNext);
  };

  return (
    <div>
      <div className="game">
        <div className="game-board">
          <Board squares={current.squares} onClick={handleClick} />
        </div>
      </div>
      <div className="game-info">
        <div className="status">{status}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
};

export default Game;
