import { use } from 'react';
import DownloadPage from '@/components/DownloadPage';
import { WorkProvider } from '@/contexts/WorkContext';
import { generateMetadata as generateMetadataFn, generateStaticParams as generateStaticParamsFn } from '@/utils/generic';

export const generateStaticParams = generateStaticParamsFn
export const generateMetadata = generateMetadataFn

const Page = ({ params }) => {
  const { lang } = use(params);

  if (!lang || typeof lang !== "string")
    return null;

  return (
    <WorkProvider defaultLanguage={lang ?? "en"}>
      <DownloadPage />
    </WorkProvider>
  );
}

export default Page;
