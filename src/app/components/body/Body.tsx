
import { ReactNode , useState } from 'react';
import './Body.css';
import About from './about/About';
import CV from './cv/CV';
import XP from './xp/XP';
import Contact from './contact/Contact';

type BodyProps = {
    activeComponent: string;
  };
  
  const Body: React.FC<BodyProps> = ({ activeComponent }) => {
    const renderActiveComponent = () => {
      switch (activeComponent) {
        case 'about':
          return <About />;
        case 'cv':
          return <CV />;
        case 'xp':
          return <XP />;
        case 'contact':
          return <Contact/>;
        default:
          return null;
      }
    };
  
    return (
      <div id="body">
        {renderActiveComponent()}
      </div>
    );
  };



export default Body;