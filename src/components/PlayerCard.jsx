import React, { useState } from "react";

const PlayerCard = ({ player }) => {
  const [selected, setSelected] = useState(null);
  const { name, img, statistics } = player;

  const handleClick = () => {
    setSelected(name !== selected ? name : null);
  };

  return (
    <div className="playerCard">
      <div className="cardTop">
        <img onClick={handleClick} src={img} alt="" />
      </div>
      <h3>{name}</h3>
      <div className="playerStats">{statistics}</div>
    </div>
  );
};

export default PlayerCard;
