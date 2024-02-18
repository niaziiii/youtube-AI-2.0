import DescriptionPage from "@/components/pages/description";
import React from "react";
import { Toaster } from "react-hot-toast";

const Page = () => {
  return (
    <div>
      <DescriptionPage />
      <Toaster />
    </div>
  );
};

export default Page;
