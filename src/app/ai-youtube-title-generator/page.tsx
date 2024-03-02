import TitlePage from "@/components/pages/title";
import React from "react";
import { Toaster } from "react-hot-toast";
import MainBackgrounImages from "@/components/main-background-images";

const Page = () => {
  return (
    <div className="relative overflow-hidden">
      <TitlePage />
      <Toaster />
      <MainBackgrounImages />
    </div>
  );
};

export default Page;
