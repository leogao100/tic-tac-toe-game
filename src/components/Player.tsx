import { useState, ChangeEvent } from "react";

interface PlayerProps {
  initialName: string;
  symbol: string;
  isActive: boolean;
  onChangeName: (symbol: string, newName: string) => void;
}

const Player: React.FC<PlayerProps> = ({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) => {
  return <></>;
};

export default Player;
