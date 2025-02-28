import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "../translations";

export default function Main() {
    const { language } = useLanguage();
    const t = translations[language]
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
    }, [isAnimating]);

    return (
        <div className="flex w-full pl-1 pr-1 h-full justify-center">
            <div className="w-6/10">
                <div className="flex flex-col h-full place-content-center text-center gap-4">
                    <h1>{t.main.title}</h1>
                    <h2>
                        {t.main.subtitle}{" "}
                        {finalWord ? (
                            <span
                                className={`text-6xl mt-2 font-bold text-${words[words.length - 1].color} inline-block`}
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
                                    className={`text-6xl mt-2 font-bold text-${words[currentWord].color} inline-block`}
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
            <div className="w-4/10">
                <div className="flex flex-col items-center justify-center">
                    <img src="/img/logo_1.png" className="h-8/12" alt="MCDS Logo" />
                    <h1 className="text-primary -ml-22">MCDS</h1>
                </div>
            </div>
        </div>
    );
}