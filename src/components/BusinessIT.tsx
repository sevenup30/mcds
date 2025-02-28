import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "../translations";
import BusinessITAnimation from "./BusinessITAnimation";

const BusinessIT = () => {
    const { language } = useLanguage();
    const t = translations[language].businessIT;

    return (
        <div className="h-screen p-16 box-border text-white">
            <div className="grid grid-cols-2 gap-8 h-full">
                <div className="flex items-center justify-center">
                    <BusinessITAnimation />
                </div>
                <div className="flex flex-col justify-center">
                    <h2 className="text-4xl font-bold mb-6 text-primary">{t.title}</h2>
                    <div className="space-y-4">
                        <p className="text-lg">
                            {t.description}
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-lg">
                            <li>{t.features.workstation}</li>
                            <li>{t.features.server}</li>
                            <li>{t.features.email}</li>
                            <li>{t.features.backup}</li>
                            <li>{t.features.security}</li>
                            <li>{t.features.support}</li>
                        </ul>
                        <p className="text-lg mt-4">
                            {t.expertise}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BusinessIT;