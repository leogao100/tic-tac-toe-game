import React from "react";

interface GameBoardProps {
  onSelectSquare: (row: number, col: number) => void;
  board: (string | null)[][];
}

const GameBoard: React.FC<GameBoardProps> = ({ onSelectSquare, board }) => {
  return <></>;
};

export default GameBoard;
