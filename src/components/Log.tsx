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
  return <></>;
};

export default Log;
