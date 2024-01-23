// LanguageSwitcher.client.tsx
"use client"

import React from 'react';

const LanguageSwitcher = ({ currentLanguage, onLanguageChange }) => {
    return (
        <div style={{ position: 'absolute', top: 10, right: 10 }}>
            <button
                onClick={() => onLanguageChange('en')}
                disabled={currentLanguage === 'en'}>
                EN
            </button>
            <button
                onClick={() => onLanguageChange('de')}
                disabled={currentLanguage === 'de'}>
                DE
            </button>
        </div>
    );
};

export default LanguageSwitcher;
