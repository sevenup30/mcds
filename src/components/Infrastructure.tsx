import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '../translations';
import InfrastructureAnimation from './InfrastructureAnimation';

const Infrastructure = () => {
    const { language } = useLanguage();
    const t = translations[language as keyof typeof translations].infrastructure;

    return (
        <div className="h-screen p-16 box-border text-white">
            <div className="grid grid-cols-5 gap-8 h-full">
                {/* Text content - 2 columns */}
                <div className="col-span-2 flex flex-col justify-center">
                    <h2 className="text-4xl font-bold mb-6 text-secondary">{t.title}</h2>
                    <div className="space-y-4">
                        <p className="text-lg">
                            {t.description}
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-lg">
                            <li>{t.features.cloud}</li>
                            <li>{t.features.network}</li>
                            <li>{t.features.server}</li>
                            <li>{t.features.backup}</li>
                            <li>{t.features.storage}</li>
                        </ul>
                        <p className="text-lg mt-4">
                            {t.expertise}
                        </p>
                    </div>
                </div>
                {/* Animation - 3 columns */}
                <div className="col-span-3 flex items-center justify-center">
                    <InfrastructureAnimation />
                </div>
            </div>
        </div>
    );
}

export default Infrastructure;