'use client'
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';
import { translations } from '../translations';

const Header = () => {
    const { language, toggleLanguage } = useLanguage() as { language: keyof typeof translations, toggleLanguage: () => void };
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="fixed w-full bg-bg/70 backdrop-blur-sm top-0 left-0 z-[1000] h-[75px]">
            <header className="flex items-center justify-between text-primary py-2 text-center h-full px-4 md:px-8">
                {/* Logo */}
                <div className="flex flex-col gap-2">
                    <Image
                        src="/img/logo_2.png"
                        alt="Logo 2"
                        width={32}
                        height={32}
                    />
                    <Image
                        src="/img/mcds.png"
                        alt="mcds"
                        width={32}
                        height={32}
                    />
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden p-2"
                >
                    <div className="space-y-2">
                        <span className={`block w-8 h-0.5 bg-primary transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                        <span className={`block w-8 h-0.5 bg-primary transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`block w-8 h-0.5 bg-primary transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
                    </div>
                </button>

                {/* Navigation Links */}
                <nav className={`
                    absolute md:relative top-[75px] md:top-0 left-0 w-full md:w-auto
                    bg-bg/95 md:bg-transparent
                    ${isMenuOpen ? 'flex' : 'hidden'} md:flex
                    flex-col md:flex-row
                    items-center gap-4 md:gap-8
                    py-4 md:py-0
                    shadow-lg md:shadow-none
                `}>
                    <a href="#development" className="w-full md:w-auto text-center py-2 md:py-0" onClick={() => setIsMenuOpen(false)}>
                        {translations[language].nav.development}
                    </a>
                    <a href="#ops" className="w-full md:w-auto text-center py-2 md:py-0" onClick={() => setIsMenuOpen(false)}>
                        {translations[language].nav.ops}
                    </a>
                    <a href="#infrastructure" className="w-full md:w-auto text-center py-2 md:py-0" onClick={() => setIsMenuOpen(false)}>
                        {translations[language].nav.infrastructure}
                    </a>
                    <a href="#business-it" className="w-full md:w-auto text-center py-2 md:py-0" onClick={() => setIsMenuOpen(false)}>
                        {translations[language].nav.businessIt}
                    </a>
                    <button
                        onClick={toggleLanguage}
                        className="px-3 py-1 rounded-md bg-accent/10 hover:bg-accent/20 transition-colors"
                    >
                        {language === 'fr' ? 'EN' : 'FR'}
                    </button>
                </nav>
            </header>
        </div>
    );
};

export default Header;