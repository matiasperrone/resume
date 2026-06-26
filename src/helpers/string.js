import workInfo from "@/data/work.json";

export const convertMDTags = (str) =>
  str.replace(/\[([a-z]+)\]([^\]]+)\[\/([a-z]+)\]/g, "<$1>$2</$3>");
export const stripMDTags = (str) =>
  str.replace(/\[\/?[a-z]+\]/g, "");
export const ucfirst = (str) =>
  str.trim().charAt(0).toUpperCase() + str.trim().slice(1);

export const t = (str, language) => {
  if (language === "en") {
    return str; // Return original string if language is English
  }

  if (!workInfo[language]) {
    console.warn(`Language "${language}" not found in workInfo.`);
    return str; // Fallback to original string if language not found
  }
  if (
    !workInfo[language]?.translation?.[str] &&
    !workInfo[language]?.translation?.[str.toLowerCase()]
  ) {
    console.warn(`Translation for "${str}" not found in workInfo.`);
    return str; // Fallback to original string if translation not found
  }
  return (
    workInfo[language]?.translation?.[str] ??
    workInfo[language]?.translation?.[str.toLowerCase()]
  );
};
