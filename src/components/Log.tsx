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
    <ol id="log">
      {turns.map((turn) => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          {turn.player} selected Row {turn.square.row + 1}, Column {turn.square.col + 1}
        </li>
      ))}
    </ol>
  );
};

export default Log;
