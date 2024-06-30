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
  const [playerName, setPlayerName] = useState(initialName);

  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }

  if (isEditing) {
    onChangeName(symbol, playerName);
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span>{playerName}</span>;

  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span>
        {editablePlayerName}
        <span>{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
