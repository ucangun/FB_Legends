import PlayerCard from "./PlayerCard";
import React, { useState } from "react";

const CardContainer = ({ data }) => {
  const [value, setValue] = useState("");
  const [items, setItems] = useState(data);

  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setValue(e.target.value.toLowerCase());
    const filteredData = data.filter((player) =>
      player.name.toLowerCase().includes(searchValue)
    );

    setItems(filteredData);
  };

  return (
    <div className="container">
      <form>
        <input
          type="text"
          placeholder="Search for a player"
          value={value}
          onChange={handleSearch}
        />
      </form>
      <div className="cardContainer">
        {items.map((player, index) => (
          <PlayerCard player={player} key={index} />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
