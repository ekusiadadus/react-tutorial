import React from "react";
import Square from "./Square";
import { calculateWinner } from "../helpers/calculateWinner";

const Board = () => {
  const [squares, setSquare] = React.useState(
    [...Array(9)].map((_, i) => i.toString())
  );

  const [xisNext, setXisNext] = React.useState(true);

  const handleClick = (i: number) => {
    const squaresCopy = squares.slice();
    if (calculateWinner(squaresCopy) || squaresCopy[i] !== i.toString()) return;
    squaresCopy[i] = xisNext ? "X" : "O";

    setSquare(squaresCopy);
    setXisNext(!xisNext);
  };

  const winner = calculateWinner(squares);
  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${xisNext ? "X" : "O"}`;

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square
          value={squares[0]}
          onClick={() => {
            handleClick(0);
          }}
        />
        <Square
          value={squares[1]}
          onClick={() => {
            handleClick(1);
          }}
        />
        <Square
          value={squares[2]}
          onClick={() => {
            handleClick(2);
          }}
        />
      </div>
      <div className="board-row">
        <Square
          value={squares[3]}
          onClick={() => {
            handleClick(3);
          }}
        />
        <Square
          value={squares[4]}
          onClick={() => {
            handleClick(4);
          }}
        />
        <Square
          value={squares[5]}
          onClick={() => {
            handleClick(5);
          }}
        />
      </div>
      <div className="board-row">
        <Square
          value={squares[6]}
          onClick={() => {
            handleClick(6);
          }}
        />
        <Square
          value={squares[7]}
          onClick={() => {
            handleClick(7);
          }}
        />
        <Square
          value={squares[8]}
          onClick={() => {
            handleClick(8);
          }}
        />
      </div>
    </div>
  );
};

export default Board;
