"use client";

import React, { useState } from "react";
import Header from "@/components/shared/header";
import SearchingScreen from "@/components/shared/search";

const TagsPage = () => {
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [type, setType] = useState<null | "Title" | "Description" | "Tags">(
    "Tags"
  );

  const generateHandler = () => {
    console.log({ type, query });
  };
  return (
    <div className="w-full">
      <Header active={2} />
      <div className="h-[86vh]">
        <SearchingScreen
          placeholder="Enter Keyword To Generate Tags..."
          title="AI You Tube Tags Generator"
          description="Generate the perfect keywords instantly with our AI YouTube Video Tags Generator"
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

export default TagsPage;
