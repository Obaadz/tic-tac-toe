import React, { useState } from 'react';
import Square from './Square';

const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const winner = getWinner();

  function getWinner() {
    const winCalculation = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winCalculation.length; i++) {
      const [a, b, c] = winCalculation[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c])
        return board[a];
    }
    return null;
  }

  function handleClick(position) {
    const old_board = board;
    old_board[position] = isXTurn ? 'X' : 'O';

    setIsXTurn(isXTurn => !isXTurn);
  }

  function renderSquare(position) {
    return (
      <Square position={position} handleClick={handleClick}>
        {board[position]}
      </Square>
    );
  }

  return (
    <>
      <div className="status">
        <h1>Tic Tac Toe Game</h1>
        <span>
          {winner
            ? `winner is: ${winner}`
            : `next player is: ${isXTurn ? 'X' : 'O'}`}
        </span>
      </div>

      <div className="board">
        {console.log(board)}
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>

        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>

        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
    </>
  );
};

export default Board;

/*
board with 9 elements done
next player is: x then o
if
[a, any, any, a, any, any, a, any, any] or
[any, a, any, any, a, any, any, a, any] or
[any, any, a, any, any, a, any, any, a] or
[a, any, any, any, a, any, any, any, a] or
[any, any, a, any, a, any a, any, any]
then
there is a winner.
*/
