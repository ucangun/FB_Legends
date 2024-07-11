const PlayerCard = ({ player }) => {
  const { name, img, statistics } = player;

  return (
    <div className="playerCard">
      <img src={img} alt="" />
      <h3>{name}</h3>
    </div>
  );
};

export default PlayerCard;
