import React from "react";

interface GameBoardProps {
  onSelectSquare: (row: number, col: number) => void;
  board: (string | null)[][];
}

const GameBoard: React.FC<GameBoardProps> = ({ onSelectSquare, board }) => {
    return <ol>
        {board.map((row, rowIndex) => (
            <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => (
                        <li key={colIndex}>
                        <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !== null}>
                                {playerSymbol}
                            </button>
                        </li>
                        
                    ))}
                </ol>
            </li>
        ))}
  </ol>
};

export default GameBoard;
