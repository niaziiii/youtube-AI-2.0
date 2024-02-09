"use client";

import React, { useState } from "react";
import Header from "@/components/shared/header";
import SearchingScreen from "@/components/shared/search";

const TitlePage = () => {
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [type, setType] = useState<null | "Title" | "Description" | "Tags">(
    "Title"
  );

  const generateHandler = () => {
    console.log({ type, query });
  };
  return (
    <div className="w-full">
      <Header active={0} />
      <div className="h-[86vh]">
        <SearchingScreen
          placeholder="Enter Keyword To Generate Title....."
          title="AI You Tube Title Generator"
          description="Get SEO-friendly, attention-grabbing Ai YouTube video titles in seconds, powered by cutting-edge AI."
          query={query}
          setQuery={setQuery}
          type={type}
          setType={setType}
          generateHandler={generateHandler}
        />
      </div>
    </div>
  );
};

export default TitlePage;
