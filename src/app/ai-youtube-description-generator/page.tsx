import DescriptionPage from "@/components/pages/description";
import React from "react";
import { Toaster } from "react-hot-toast";
import MainBackgrounImages from "@/components/main-background-images";

const Page = () => {
  return (
    <div className="relative overflow-hidden">
      <DescriptionPage />
      <Toaster />
      <MainBackgrounImages />
    </div>
  );
};

export default Page;
