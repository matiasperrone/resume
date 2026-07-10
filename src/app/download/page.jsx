'use client';

import { useEffect, use } from 'react';
import MainPage, {generateMetadata as generateMetadataFn, generateStaticParams as generateStaticParamsFn} from '@/app/[lang]/page';
import work from "@/data/work.json";

export const generateStaticParams = generateStaticParamsFn
export const generateMetadata = generateMetadataFn

const DownloadPage = ({ params }) => {
  const { lang } = use(params);
  const { download } = useMemo(() => work[lang] ?? work.en, [lang]);

  useEffect(() => {
    const link = document.createElement('a');
    link.href = `/assets/${download.file}`;
    link.download = download.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return (
    <MainPage params={params} />
  );
}

export default DownloadPage;
