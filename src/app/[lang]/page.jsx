import Home from "@/components/Home";
import { WorkProvider } from "@/contexts/WorkContext";
import { use } from "react";
import { generateMetadata as generateMetadataFn, generateStaticParams as generateStaticParamsFn } from '@/utils/generic';

export const dynamicParams = false;
export const generateStaticParams = generateStaticParamsFn
export const generateMetadata = generateMetadataFn

export const Page = ({ params }) => {
  const { lang } = use(params);

  if (!lang || typeof lang !== "string")
    return null;

  return (
    <WorkProvider defaultLanguage={lang ?? "en"}>
      <Home />
    </WorkProvider>
  );
}

export default Page;