import React from 'react';
import CICDFlow from './CICDFlow';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const Ops = () => {
    const { language } = useLanguage();
    const t = translations[language as keyof typeof translations].ops;

    return (
        <div className="min-h-screen p-4 md:p-16 box-border text-white">
            <div className="flex flex-col md:grid md:grid-cols-2 gap-8 h-full">
                <div className="flex items-center justify-center order-2 md:order-none mt-8 md:mt-0">
                    <CICDFlow />
                </div>
                <div className="flex flex-col justify-center order-1 md:order-none">
                    <h2 className="text-2xl md:text-4xl font-bold mb-6 text-primary">{t.title}</h2>
                    <div className="space-y-4">
                        <p className="text-base md:text-lg">
                            {t.description}
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-base md:text-lg">
                            <li>{t.features.build}</li>
                            <li>{t.features.ci}</li>
                            <li>{t.features.cd}</li>
                            <li>{t.features.iac}</li>
                            <li>{t.features.containers}</li>
                        </ul>
                        <p className="text-base md:text-lg mt-4">
                            {t.expertise}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Ops;