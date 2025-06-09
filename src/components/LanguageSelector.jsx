"use client";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: "en", name: "English" },
    { code: "es", name: "Español" }
  ];

  return (
    <div className="d-print-none">
      <select 
        value={language} 
        onChange={(e) => setLanguage(e.target.value)}
        style={{ 
          padding: "4px 8px", 
          border: "1px solid #ccc", 
          borderRadius: "4px",
          fontSize: "14px"
        }}
      >
        {languages.map(lang => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
