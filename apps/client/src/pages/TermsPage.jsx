import React, { useState, useEffect } from 'react';
import styles from './TermsPage.module.css';

export function TermsPage() {
    const [terms, setTerms] = useState('');
    const [language, setLanguage] = useState('sv'); // 'sv' or 'en'
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const flagUrl = language === 'sv'
        ? 'https://storage.123fakturere.no/public/flags/SE.png'
        : 'https://storage.123fakturere.no/public/flags/GB.png';

    useEffect(() => {
        fetch(`/terms/${language}`)
            .then(res => res.json())
            .then(data => setTerms(data.content))
            .catch(err => console.error("Failed to fetch terms:", err));
    }, [language]);

    const toggleLanguage = () => {
        setLanguage(lang => lang === 'sv' ? 'en' : 'sv');
    }

    return (
        <div className={styles.termsContainer}>
            <header className={styles.header}>
                <div className={styles.logo}>
                    <img src="https://storage.123fakturera.se/public/icons/diamond.png" alt="Logo" />
                    <span>123fakturera</span>
                </div>
                {/* Hamburger Menu Icon */}
                <button onClick={() => setIsMenuOpen(!isMenuOpen)}>☰</button>
            </header>

            {/* This would be the slide-out menu */}
            {isMenuOpen && (
                <nav>
                    <div onClick={toggleLanguage} className={styles.languageSelector}>
                        <img src={flagUrl} alt="flag" />
                        <span>{language === 'sv' ? 'Svenska' : 'English'}</span>
                    </div>
                    {/* Other menu items can go here */}
                </nav>
            )}

            <main className={styles.mainContent}>
                <div dangerouslySetInnerHTML={{ __html: terms }} />
            </main>
        </div>
    );
}