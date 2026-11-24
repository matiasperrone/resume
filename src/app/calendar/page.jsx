import Availability from "@/components/Availability";
import { WorkProvider } from "@/contexts/WorkContext";

export default function Page() {
  const url = process.env.NEXT_PUBLIC_AVAILABILITY_URL;
  return (
    <WorkProvider defaultLanguage="en">
      <Availability url={url} />
    </WorkProvider>
  );
}