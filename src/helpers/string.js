import workInfo from "@/data/work.json";

export const convertMDTags = (str) =>
  typeof str === "string"
    ? str.replace(/\[([a-z]+)\]([^\]]+)\[\/([a-z]+)\]/g, "<$1>$2</$3>")
    : console.warn(`Expected a string but received ${typeof str}`, str);

export const stripMDTags = (str) =>
  typeof str === "string"
    ? str.replace(/\[\/?[a-z]+\]/g, "")
    : console.warn(`Expected a string but received ${typeof str}`, str);

export const ucfirst = (str) =>
  typeof str === "string"
    ? str.trim().charAt(0).toUpperCase() + str.trim().slice(1)
    : console.warn(`Expected a string but received ${typeof str}`, str);

export const t = (str, language) => {
  if (!workInfo[language]) {
    if (language !== "en")
      console.warn(`Language "${language}" not found in workInfo.`);
    return str; // Fallback to original string if language not found
  }
  if (
    !workInfo[language]?.translation?.[str] &&
    !workInfo[language]?.translation?.[str.toLowerCase()]
  ) {
    if (language !== "en")
      console.warn(`Translation for "${str}" not found in workInfo.`);
    return str; // Fallback to original string if translation not found
  }
  return (
    workInfo[language]?.translation?.[str] ??
    workInfo[language]?.translation?.[str.toLowerCase()]
  );
};
