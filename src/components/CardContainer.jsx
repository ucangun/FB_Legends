import PlayerCard from "./PlayerCard";
const CardContainer = ({ data }) => {
  return (
    <div className="cardContainer">
      {data.map((player, index) => (
        <PlayerCard player={player} key={index} />
      ))}
    </div>
  );
};

export default CardContainer;
