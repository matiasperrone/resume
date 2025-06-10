"use client";
import { useWorkContext } from "@/contexts/WorkContext";
import { t } from "@/helpers/string";
import dynamic from "next/dynamic";

const Translate = ({ text, language }) => {
  const { language: lang } = useWorkContext();

  return t(text, language ?? lang);
};

export default dynamic(() => Promise.resolve(Translate), {
  ssr: false,
});
