import TagsPage from "@/components/pages/tags";
import React from "react";
import { Toaster } from "react-hot-toast";
import MainBackgrounImages from "@/components/main-background-images";

const Tags = () => {
  return (
    <div className="relative overflow-hidden">
      <TagsPage />
      <Toaster />
      <MainBackgrounImages />
    </div>
  );
};

export default Tags;
