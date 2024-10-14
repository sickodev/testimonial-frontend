import H1 from "@/components/ui/h1";
import StartCard from "../components/shared/start-card";
export default function Landing() {
  return (
    <main className="h-full w-full flex flex-col items-center justify-evenly">
      <div className="p-4 bg-clip-text text-transparent bg-gradient-to-b from-primary to-transparent">
        <H1>Easiest Way to get reviews for your products.</H1>
      </div>
      <StartCard />
    </main>
  );
}
