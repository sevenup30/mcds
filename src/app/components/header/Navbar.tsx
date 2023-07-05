import { useTranslation } from '../../provider/TranslationProvider';
type NavbarProps = {
    onNavItemClick: (componentName: string) => void;
  };

const Navbar: React.FC<NavbarProps> = ({ onNavItemClick }) => {
  const { locale, dictionary } = useTranslation();
  
  const handleClick = (componentName: string) => {
    onNavItemClick(componentName);
  };
    return <div id="navbar">
        <nav><ul>
        <li onClick={() => handleClick('about')}>
        <a href="#">{dictionary["about"]}</a>
        </li>
        <li onClick={() => handleClick('xp')}>
        <a href="#">{dictionary["xp"]}</a>
        </li>
        <li onClick={() => handleClick('cv')}>
        <a href="#">{dictionary["cv"]}</a>
        </li>
        {/* <li onClick={() => handleClick('contact')}>
        <a href="#">contact</a>
        </li> */}
        {/* <li><a target="_blank" href="https://linkedin.com/in/martial-carriere">Linkedin</a></li>
        <li><a href="mailto:carriere.martial@gmail.com">carriere.martial@gmail.com</a></li> */}
    </ul></nav>
    </div>
}

export default Navbar;