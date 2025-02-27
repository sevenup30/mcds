import React, { useRef } from 'react';
import { useInView } from './hooks/useInView';
import Header from './components/Header';
import Footer from './components/Footer';
import Development from './components/Development';
import Ops from './components/Ops';
import Infrastructure from './components/Infrastructure';
import './index.css';
import BusinessIT from './components/BusinessIT';
import Main from './components/Main';
import { LanguageProvider } from './contexts/LanguageContext';

const Section = ({ id, children }) => {
    const ref = useRef(null);
    const isInView = useInView(ref);
    return (
        <section
            id={id}
            ref={ref}
            className="min-h-screen w-screen"
        >
            {isInView && children}
        </section>
    );
};

const App = () => {
    return (
        <LanguageProvider>
            <div className="min-h-screen w-full overflow-x-hidden">
                <Header />
                <main className="w-full">
                    <section id="main" className="min-h-screen w-screen flex items-center justify-center pt-[130px]">
                        <Main />
                    </section>
                    <Section id="development">
                        <Development key={Math.random()} />
                    </Section>
                    <Section id="ops">
                        <Ops key={Math.random()} />
                    </Section>
                    <Section id="infrastructure">
                        <Infrastructure key={Math.random()} />
                    </Section>
                    <Section id="business-it">
                        <BusinessIT key={Math.random()} />
                    </Section>
                </main>
                <Footer />
            </div>
        </LanguageProvider>
    );
};

export default App;