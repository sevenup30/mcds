import Navbar from "./Navbar"
import './Header.css'

type HeaderProps = {
    onNavItemClick: (componentName: string) => void;
  };
  
  const Header: React.FC<HeaderProps> = ({ onNavItemClick }) => {
    return (
      <div id="header">
        <h1>MCDS</h1>
        <Navbar onNavItemClick={onNavItemClick} />
      </div>
    );
  };

export default Header;