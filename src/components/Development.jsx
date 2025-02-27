import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";
import PythonTerminal from "./PythonTerminal";
import AngularTerminal from "./AngularTerminal";

const Development = () => {
    const { language } = useLanguage();
    const t = translations[language].development;

    return (
        <div className="h-screen p-16 box-border text-white mt-24">
            <div className="grid grid-cols-3 gap-8 h-full">
                <div className="flex flex-col justify-center">
                    <h2 className="font-bold mb-6 text-secondary">{t.title}</h2>
                    <p className="text-lg">
                        {t.description}
                    </p>
                </div>

                <div className="flex items-center justify-center">
                    <PythonTerminal />
                </div>

                <div className="flex items-center justify-center">
                    <AngularTerminal />
                </div>
            </div>
        </div>
    );
}

export default Development;