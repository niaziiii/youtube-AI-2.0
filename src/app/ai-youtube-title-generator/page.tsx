import TitlePage from "@/components/pages/title";
import React from "react";
import { Toaster } from "react-hot-toast";

const Page = () => {
  return (
    <div>
      <TitlePage />
      <Toaster />
    </div>
  );
};

export default Page;
