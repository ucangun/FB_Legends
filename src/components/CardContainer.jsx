import PlayerCard from "./PlayerCard";
import React, { useState } from "react";
const CardContainer = ({ data }) => {
  const [value, setValue] = useState("");
  const newArr = data
    .map((player) => player.name.toLowerCase())
    .filter((name) => name.includes(value));
  console.log(newArr);
  return (
    <div className="container">
      <form>
        <input
          type="text"
          placeholder="Search for a player"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
      <div className="cardContainer">
        {data.map((player, index) => (
          <PlayerCard player={player} key={index} />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
