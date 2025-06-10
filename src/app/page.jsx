import Home from "@/components/Home";
import { WorkProvider } from "@/contexts/WorkContext";

export default function Page() {

  return (
    <WorkProvider defaultLanguage="en">
      <Home />
    </WorkProvider>
  );
}