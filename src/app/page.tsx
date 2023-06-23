'use client';
import React, { useState } from 'react';
import Header from "@/components/header/Header";
import Body from "@/components/body/Body";

const App: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState('about');

  const handleNavClick = (componentName: string) => {
    setActiveComponent(componentName);
  };

  return (
    <div>
      <Header onNavItemClick={handleNavClick} />
      <Body activeComponent={activeComponent} />
    </div>
  );
};
export default App;