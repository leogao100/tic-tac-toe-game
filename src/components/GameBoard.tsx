import React from "react";
import Player from "./Player";

interface GameBoardProps {
  onSelectSquare: (row: number, col: number) => void;
  board: (string | null)[][];
}

const GameBoard: React.FC<GameBoardProps> = ({ onSelectSquare, board }) => {
    return <ol>
        {board.map((row, rowIndex) => (
            <li key={rowIndex}>
                <ol>
                    {row.map(playerSymol, colIndex) => (
                        <li key={colIndex}>
                        <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !== null}>
                                {playerSymbol}
                            </button>
                        </li>
                        
                    )}
                </ol>
            </li>
        ))}
  </ol>
};

export default GameBoard;
