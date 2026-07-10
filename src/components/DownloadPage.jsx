'use client';

import { useEffect } from 'react';
import { useWorkContext } from '@/contexts/WorkContext';
import Home from "@/components/Home";
import { useRouter } from 'next/navigation';

const DownloadPage = () => {
  const { work: { download } } = useWorkContext();
  const router = useRouter();

  useEffect(() => {
    const link = document.createElement('a');
    link.href = `/assets/${download.file}`;
    link.download = download.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    router.push('/'); // Redirect to the home page after download
  }, []);

  return (
    <Home />
  );
}

export default DownloadPage;
