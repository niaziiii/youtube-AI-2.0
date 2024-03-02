import HomePage from "@/components/home";
import { Toaster } from "react-hot-toast";
import MainBackgrounImages from "@/components/main-background-images";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <HomePage />
      <Toaster />
      <MainBackgrounImages />
    </main>
  );
}
