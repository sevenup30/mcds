import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "../translations";
import { LanguageTranslations } from "@/translations/types";

export default function Main() {
    const { language } = useLanguage();
    const t: LanguageTranslations = translations[language as keyof typeof translations];
    const words = [
        { text: "e-commerce", color: "primary", shadow: "rgba(21,101,192,1)" },
        { text: t.main.softwares, color: "secondary", shadow: "rgba(156,39,176,1)" },
        { text: t.main.website, color: "primary", shadow: "rgba(21,101,192,1)" },
        { text: "communication", color: "secondary", shadow: "rgba(156,39,176,1)" },
        { text: t.main.yourIdeas, color: "primary", shadow: "rgba(21,101,192,1)" },
        { text: t.main.yourProjects, color: "accent", shadow: "rgba(255,0,123,1)" }
    ];

    const [currentWord, setCurrentWord] = useState(0);
    const [isAnimating, setIsAnimating] = useState(true);
    const [finalWord, setFinalWord] = useState(false);

    useEffect(() => {
        if (!isAnimating) return;

        const timer = setInterval(() => {
            setCurrentWord((prev) => {
                if (prev === words.length - 1) {
                    setIsAnimating(false);
                    setFinalWord(true);
                    clearInterval(timer);
                }
                return prev + 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [isAnimating, words.length]);

    return (
        <div className="flex flex-col-reverse md:flex-row w-full px-4 md:px-1 h-full justify-center">
            <div className="w-full md:w-6/10 mt-8 md:mt-0">
                <div className="flex flex-col h-full place-content-center text-center gap-4">
                    <h1 className="text-sm sm:text-1xl md:text-4xl">{t.main.title}</h1>
                    <h2 className="text-sm sm:text-xl md:text-2xl">
                        {t.main.subtitle}{" "}
                        {finalWord ? (
                            <span
                                className={`text-3xl md:text-6xl mt-2 font-bold text-${words[words.length - 1].color} inline-block`}
                                style={{
                                    filter: `drop-shadow(0px 0px 23px ${words[words.length - 1].shadow})`
                                }}
                            >
                                {words[words.length - 1].text}
                            </span>
                        ) : (
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={currentWord}
                                    className={`text-3xl md:text-6xl mt-2 font-bold text-${words[currentWord].color} inline-block`}
                                    style={{
                                        filter: `drop-shadow(0px 0px 23px ${words[currentWord].shadow})`
                                    }}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -20, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {words[currentWord].text}
                                </motion.span>
                            </AnimatePresence>
                        )}
                    </h2>
                </div>
            </div>
            <div className="w-full md:w-4/10 flex justify-center md:block">
                <div className="flex flex-col items-center justify-center">
                    <img
                        src="/img/logo_1.png"
                        className="h-48 md:h-8/12 w-auto"
                        alt="MCDS Logo"
                    />
                    <h1 className="text-primary text-2xl md:text-4xl md:-ml-22">MCDS</h1>
                </div>
            </div>
        </div>
    );
}