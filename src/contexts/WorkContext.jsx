"use client";
import { createContext, useContext, useEffect, useState } from 'react';
import workInfo from "@/data/work.json";

const WorkContext = createContext();

export const WorkProvider = ({ children, defaultLanguage = "en" }) => {
  const [language, setLanguage] = useState(defaultLanguage);
  const [work, setWork] = useState(workInfo[language]);

  useEffect(() => {
    if (workInfo[language]) {
      setWork(workInfo[language]);
    } else {
      console.warn(`Language "${language}" not found in workInfo. Falling back to English.`);
      setWork(workInfo['en']);
    }
  }, [language]);

  return (
    <WorkContext.Provider value={{ language, setLanguage, work, setWork }}>
      {children}
    </WorkContext.Provider>
  );
};

export const useWorkContext = () => {
  const context = useContext(WorkContext);
  if (context === undefined) {
    throw new Error('useWorkContext must be used within a WorkProvider');
  }
  return context;
};
