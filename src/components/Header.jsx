import logo from "../assets/logo.png";

const Header = ({ data }) => {
  return (
    <div className="header">
      <img src={logo} alt="logo of club" />
      <h1>Legends of Fenerbahce</h1>
    </div>
  );
};

export default Header;
