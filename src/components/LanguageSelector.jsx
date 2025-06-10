"use client";
import { useWorkContext } from "@/contexts/WorkContext";
import workInfo from "@/data/work.json";
import Translate from "./Translate";
import { OverlayTrigger } from "react-bootstrap";
import { Tooltip } from "react-bootstrap";

const LanguageSelector = () => {
  const { language, setLanguage } = useWorkContext();

  const languages = Object.keys(workInfo).map(lang => (
    { code: lang, name: workInfo[lang].language ?? lang.toUpperCase() }
  ));

  const handleLanguageChange = (lang) => {
    if (lang !== language) {
      setLanguage(lang);
      window.history.pushState(null, '', `/${lang !== "en" ? lang : ""}`);
    }
  };

  return (
    <div className="d-print-none d-flex align-items-center justify-content-space-between gap-5 justify-self-start cursor-pointer flex-now-wrap">
      {languages.filter(lang => language !== lang.code).map(lang => (
        <OverlayTrigger
          key={lang.code}
          placement="auto"
          overlay={
            <Tooltip>
              <div>
                <Translate text="Translate to" language={lang.code} />
                {` ${lang.name}`}
              </div>
            </Tooltip>
          }>
          <div onClick={() => handleLanguageChange(lang.code)}>
            {lang.name}
          </div>
        </OverlayTrigger>
      ))}
    </div>
  );
};

export default LanguageSelector;
