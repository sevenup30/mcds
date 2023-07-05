'use client';
import React, { useState } from 'react';
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import { TranslationProvider } from './provider/TranslationProvider'


const App: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState('about');

  const handleNavClick = (componentName: string) => {
    setActiveComponent(componentName);
  };

  return (
    <TranslationProvider initialLocale="en">
      <div>
        <Header onNavItemClick={handleNavClick} />
        <Body activeComponent={activeComponent} />
      </div>
    </TranslationProvider>
  );
};
export default App;