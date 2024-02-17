"use client";
import React, { useState } from "react";
import SearchingScreen from "@/components/shared/search";
import Header from "@/components/shared/header";
import { homeServices } from "@/components/constant";
import SocialItems from "@/components/social";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const HomePage = () => {
  const { push } = useRouter();
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [type, setType] = useState<null | "Title" | "Description" | "Tags">(
    null
  );

  const generateHandler = () => {
    if (query === null || query === "") {
      toast.error("Please enter your search query.");
      return;
    }
    if (type === null) {
      toast.error("Please select type of your query.");
      return;
    }
    setLoading(true);
    if (type === "Title") push(`/title-generator?query=${query}`);
    if (type === "Description") push(`/description-generator?query=${query}`);
    if (type === "Tags") push(`/tags-generator?query=${query}`);
  };

  return (
    <div className="w-full">
      <Header />
      <div className="h-[86vh] flex items-center justify-center">
        <SearchingScreen
          placeholder="Enter Keyword To Generate...."
          title="AI-Generated Titles, Descriptions & Tags That Rank You Higher"
          description="Want your videos seen on YouTube ? Our tool writes titles & descriptions people click ! Get on the front pages, Get more views, Get famous"
          query={query}
          setQuery={setQuery}
          type={type}
          setType={setType}
          generateHandler={generateHandler}
          loading={loading}
        />
      </div>
      {/* {loading && <LoadingSpinner />} */}
      <div className="min-h-screen text-white flex items-center justify-center flex-col">
        <h2 className=" capitalize text-4xl font-bold text-center pb-12">
          Services
        </h2>
        <div className="flex items-center justify-center gap-10 mt-10">
          {homeServices.map((service) => (
            <div
              key={service.title}
              className=" w-[300px] border rounded-md py-5"
            >
              <h2 className="text-center mb-3 text-xl font-bold">
                {service.title}
              </h2>
              <h4 className="flex items-center justify-center text-4xl mt-0">
                {service.icon}
              </h4>
              <p className="text-center px-6 mt-6">{service.description}</p>
              <div className="flex items-center justify-center mt-6">
                <button
                  // onClick={generateHandler}
                  className="w-[120px] rounded-md font-semibold py-2 bg-[#0B7666] text-white"
                >
                  Generate
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="min-h-screen text-white flex items-center justify-center flex-col">
        <h2 className=" capitalize text-4xl font-bold text-center pb-12">
          About Us
        </h2>
        <div className="flex flex-col items-center w-full justify-center gap-10 mt-10">
          <div className=" w-[50%]  border rounded-md py-5">
            <p className="text-center px-6 mt-6">
              Tired of staring at a blank YouTube title screen? Feeling lost in
              the keyword desert? Our AI isn&apos;t just a robot – it&apos;s
              your ultimate hype assistant. Imagine titles that spark instant
              curiosity, descriptions that weave mini-stories, and tags that
              become laser beams, finding your ideal audience like magic. We
              learn from each click, each comment, constantly evolving to become
              your secret weapon. Focus on creating, we&apos;ll handle the
              spotlight. Let&apos;s rewrite the rules of content creation
              together.
            </p>
          </div>
        </div>
      </div>
      <div className="pb-10">
        <SocialItems />
      </div>
    </div>
  );
};

export default HomePage;
