import DownloadPage from '@/components/DownloadPage';
import { WorkProvider } from "@/contexts/WorkContext";

export default function Page() {

  return (
    <WorkProvider defaultLanguage="en">
      <DownloadPage />
    </WorkProvider>
  );
}