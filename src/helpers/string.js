import { useLanguage } from "@/contexts/LanguageContext";
import workInfo from "@/data/work.json";

export const convertMDTags = (str) => str.replace(/\[([a-z]+)\]([^\]]+)\[\/([a-z]+)\]/g, "<$1>$2</$3>");

export const t = (str) => {
  const { language } = useLanguage();
  return workInfo[language].translation?.[str] ?? str;
};