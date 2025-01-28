import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' }
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <div className="relative group">
      <button className="flex items-center space-x-2 text-white hover:text-[#8ED204]">
        <span>{languages.find(lang => lang.code === i18n.language)?.name}</span>
      </button>
      
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
      >
        {languages.map(lang => (
          <button
            key={lang.code}
            onClick={() => i18n.changeLanguage(lang.code)}
            className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${
              i18n.language === lang.code ? 'text-[#8ED204]' : 'text-gray-700'
            }`}
          >
            {lang.name}
          </button>
        ))}
      </motion.div>
    </div>
  );
}