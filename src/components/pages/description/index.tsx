"use client";

import React, { useState } from "react";
import Header from "@/components/shared/header";
import SearchingScreen from "@/components/shared/search";

const DescriptionPage = () => {
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [type, setType] = useState<null | "Title" | "Description" | "Tags">(
    "Description"
  );

  const generateHandler = () => {
    console.log({ type, query });
  };
  return (
    <div className="w-full">
      <Header active={1} />
      <div className="h-[86vh]">
        <SearchingScreen
          placeholder="Enter Keyword To Generate Description....."
          title="AI YouTube Description Generator"
          description="Our AI YouTube Video Description Generator creates compelling, SEO-friendly descriptions in seconds"
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

export default DescriptionPage;
