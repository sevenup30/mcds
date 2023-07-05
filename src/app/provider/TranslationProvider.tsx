import React, { createContext, useContext, useState, useEffect } from 'react';

interface TranslationContextValue {
  locale: string;
  setLocale: (locale: string) => void;
  dictionary: Record<string, string>;
}

const TranslationContext = createContext<TranslationContextValue | undefined>(undefined);

interface TranslationProviderProps {
  initialLocale: string;
  children: React.ReactNode;
}

const TranslationProvider: React.FC<TranslationProviderProps> = ({ initialLocale, children }) => {
  const [locale, setLocale] = useState(initialLocale);
  const [dictionary, setDictionary] = useState<Record<string, string>>({});

  useEffect(() => {
    const loadDictionary = async () => {
      try {
        const selectedDictionary = await import(`../../../dictionaries/${locale}.json`);
        setDictionary(selectedDictionary.default || {});
      } catch (error) {
        console.error(`Failed to load dictionary for locale "${locale}":`, error);
      }
    };

    loadDictionary();
  }, [locale]);

  const value: TranslationContextValue = {
    locale,
    setLocale,
    dictionary,
  };

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
};

const useTranslation = (): TranslationContextValue => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};

export { TranslationProvider, useTranslation };
  