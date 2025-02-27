import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const Header = () => {
    const { language, toggleLanguage } = useLanguage();

    return (
        <div className="fixed w-full bg-bg/70 backdrop-blur-sm top-0 left-0 z-[1000] h-[75px]">
            <header className="flex items-center justify-between text-primary py-2 text-center h-full">
                <div className="flex flex-col gap-2">
                    <img src="/img/logo_2.png" alt="Logo 2" className="w-8 h-auto" />
                    <img src="/img/mcds.png" alt="Martial Carriere Development Solutions" className="w-8 h-auto" />
                </div>
             
                <div className="flex-1 flex justify-center items-center gap-8">
                    <a href="#development">{translations[language].nav.development}</a>
                    <a href="#ops">{translations[language].nav.ops}</a>
                    <a href="#infrastructure">{translations[language].nav.infrastructure}</a>
                    <a href="#business-it">{translations[language].nav.businessIt}</a>
                    <button
                        onClick={toggleLanguage}
                        className="px-3 py-1 rounded-md bg-accent/10 hover:bg-accent/20 transition-colors"
                    >
                        {language === 'fr' ? 'EN' : 'FR'}
                    </button>
                </div>
            </header>
        </div>
    );
};

export default Header;