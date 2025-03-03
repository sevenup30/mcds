import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "../translations";
import PythonTerminal from "./PythonTerminal";
import AngularTerminal from "./AngularTerminal";
import { DevelopmentTranslations, Translations } from "@/translations/types";

const Development = () => {
    const { language }: { language: keyof Translations } = useLanguage();
    const t: DevelopmentTranslations = translations[language].development;

    return (
        <div className="min-h-screen p-4 md:p-16 box-border text-white mt-16 md:mt-24">
            <div className="flex flex-col md:grid md:grid-cols-3 gap-8 h-full">
                <div className="flex flex-col justify-center order-1 md:order-none">
                    <h2 className="text-2xl md:text-4xl font-bold mb-6 text-secondary">{t.title}</h2>
                    <p className="text-base md:text-lg">
                        {t.description}
                    </p>
                </div>

                <div className="flex items-center justify-center order-2 md:order-none mt-8 md:mt-0">
                    <PythonTerminal />
                </div>

                <div className="flex items-center justify-center order-3 md:order-none mt-8 md:mt-0">
                    <AngularTerminal />
                </div>
            </div>
        </div>
    );
}

export default Development;