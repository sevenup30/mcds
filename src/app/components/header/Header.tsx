import Navbar from "./Navbar"
import './Header.css'
import { useTranslation } from '../../provider/TranslationProvider';

type HeaderProps = {
    onNavItemClick: (componentName: string) => void;
  };
  
  const Header: React.FC<HeaderProps> = ({ onNavItemClick }) => {
    const { setLocale } = useTranslation();

    const handleLocaleSwitch = (newLocale: string) => {
      setLocale(newLocale);
    };
    return (
      <div id="header">
        <h1>MCDS</h1>
        <Navbar onNavItemClick={onNavItemClick} />
        <button className="locale_switcher en" onClick={() => handleLocaleSwitch('en')}></button>
        <button className="locale_switcher fr" onClick={() => handleLocaleSwitch('fr')}></button>
      </div>
    );
  };

export default Header;