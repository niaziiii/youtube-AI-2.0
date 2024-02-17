import HomePage from "@/components/home";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <main className="relative">
      <HomePage />
      <Toaster />
    </main>
  );
}
