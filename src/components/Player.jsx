import { useState } from "react";

export default function Player({ name, symbol }) {
  const [playerName, setPlayerName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  let btnCaption = "Edit";

  function handleClick() {
    // if (isEditing) {
    //   setIsEditing(false);
    // } else setIsEditing(true);

    // 2nd way
    // setIsEditing(!isEditing);

    setIsEditing((editing) => (editing = !isEditing));
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  if (isEditing) btnCaption = "Save";

  return (
    <li>
      <span className="player">
        {!isEditing ? (
          <span className="player-name">{playerName}</span>
        ) : (
          <input
            type="text"
            required
            value={playerName}
            onChange={handleChange}
          />
        )}

        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{btnCaption}</button>
    </li>
  );
}
