import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <div className="bg-slate-800 h-screen w-full flex items-center justify-center">
        <Button showLeadingIcon showTailingIcon>
          Button
        </Button>
      </div>
    </>
  );
}
