import React, { useState } from 'react';
import styled from 'styled-components';
import Square from './Square';

const StartBtn = styled.div`
  text-align: center;
  color: #fff;
  margin-top: 20px;
  cursor: pointer;

  transition: color 0.3s;
  &:hover {
    color: #9d9d9d;
  }
`;

const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [steps, setSteps] = useState(0);
  const winner = getWinner(board);

  function handleNewGame() {
    setBoard(Array(9).fill(null));
    setIsXTurn(true);
    setSteps(0);
  }

  function handleClick(position) {
    // if there is a winner or this position is not empty, then return.
    if (board[position] || winner) return;

    const new_board = board;
    new_board[position] = isXTurn ? 'X' : 'O';

    setBoard(new_board);
    setIsXTurn(isXTurn => !isXTurn);
    setSteps(steps + 1);
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
            : steps === 9
            ? `there is no winner`
            : `next player is: ${isXTurn ? 'X' : 'O'}`}
        </span>
      </div>

      <div className="board">
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
        <StartBtn onClick={handleNewGame}>Start New Game</StartBtn>
      </div>
    </>
  );
};

function getWinner(board) {
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

export default Board;
