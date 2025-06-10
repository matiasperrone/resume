import Home from "@/components/Home";
import { WorkProvider } from "@/contexts/WorkContext";
import { use } from "react";

export default function Page({ params }) {
  const { lang } = use(params);

  if (!lang || typeof lang !== "string")
    return null;

  return (
    <WorkProvider defaultLanguage={lang ?? "en"}>
      <Home />
    </WorkProvider>
  );
}