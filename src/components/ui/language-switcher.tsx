import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from './button';

export const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'vi' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <Button
      onClick={toggleLanguage}
      className="px-4 py-2 rounded-[5px] bg-gray-100 text-gray-900 hover:bg-gray-200"
    >
      {i18n.language === 'en' ? '🇻🇳 Tiếng Việt' : '🇬🇧 English'}
    </Button>
  );
};