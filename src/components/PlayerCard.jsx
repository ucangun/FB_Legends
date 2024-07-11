import React, { useState } from "react";

const PlayerCard = ({ player }) => {
  const [selectedId, setSelectedId] = useState(null);
  const { id, name, img, statistics } = player;

  const handleClick = (id) => {
    setSelectedId(id !== selectedId ? id : null);
  };

  return (
    <div className="playerCard">
      <div className="playerCard-top">
        {id === selectedId ? (
          <div onClick={() => handleClick(id)} className="playerStats">
            {statistics.map((item, i) => (
              <p key={i}>{item}</p>
            ))}
          </div>
        ) : (
          <img onClick={() => handleClick(id)} src={img} alt="" />
        )}
      </div>
      <h3>{name}</h3>
    </div>
  );
};

export default PlayerCard;
