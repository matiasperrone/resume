'use client';

import { useEffect } from 'react';
import { useWorkContext } from '@/contexts/WorkContext';
import Home from "@/components/Home";

const DownloadPage = () => {
  const { work: { download } } = useWorkContext();

  useEffect(() => {
    const link = document.createElement('a');
    link.href = `/assets/${download.file}`;
    link.download = download.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return (
    <Home />
  );
}

export default DownloadPage;
