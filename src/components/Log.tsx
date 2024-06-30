import React from "react";

interface Square {
  row: number;
  col: number;
}

interface Turn {
  player: string;
  square: Square;
}

interface LogProps {
  turns: Turn[];
}

const Log: React.FC<LogProps> = ({ turns }) => {
  return (
    <ol>
      {turns.map((turn) => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          {turn.player} selected {turn.square.row},{turn.square.col}
        </li>
      ))}
    </ol>
  );
};

export default Log;
