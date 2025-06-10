import Home from "@/components/Home";

export default function Page() {

  return (
    <WorkProvider defaultLanguage="en">
      <Home />
    </WorkProvider>
  );
}