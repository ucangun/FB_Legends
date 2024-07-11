import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="logo of club" />
      <h1>Legends of Fenerbahce</h1>
      <input type="text" placeholder="Search for a player" />
    </div>
  );
};

export default Header;
