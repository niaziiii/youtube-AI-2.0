"use client";
import React, { useState } from "react";
import SearchingScreen from "@/components/shared/search";
import Header from "@/components/shared/header";
import { homeServices } from "@/components/constant";
import SocialItems from "@/components/social";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FAQS } from "./utils";
import Accordination from "../accordination";

const HomePage = () => {
  const { push } = useRouter();
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [type, setType] = useState<null | "Title" | "Description" | "Tags">(
    null
  );

  let queryClick = 1;
  let typeClick = 1;

  const generateHandler = () => {
    if (query === null || query === "") {
      if (queryClick > 1) return;
      queryClick = queryClick + 1;
      toast.error("Please enter your search query.");
      return;
    }
    if (type === null) {
      if (typeClick > 1) return;
      typeClick = typeClick + 1;
      toast.error("Please select type of your query.");
      return;
    }
    setLoading(true);
    if (type === "Title") push(`/ai-youtube-title-generator?query=${query}`);
    if (type === "Description")
      push(`/ai-youtube-description-generator?query=${query}`);
    if (type === "Tags") push(`/ai-youtube-tags-generator?query=${query}`);
  };

  return (
    <div className="w-full overflow-hidden">
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
      <div className="mt-10 text-white flex items-center justify-center flex-col">
        <h2 className=" capitalize text-3xl md:text-4xl font-bold text-center pb-2">
          Services
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-10 mt-10">
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
                <a
                  href={service.link}
                  className="w-[120px] rounded-md text-center font-semibold py-2 bg-[#0B7666] text-white"
                >
                  Generate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <Accordination /> */}

      <div className="my-20 text-white flex items-center justify-center flex-col">
        <h2 className=" capitalize text-3xl md:text-4xl font-bold text-center pb-2">
          About Us
        </h2>
        <div className="flex flex-col items-center w-full justify-center gap-10 mt-10">
          <div className="w-[90%] md:w-[70%] lg:w-[50%]  border rounded-md p-2 sm:p-3 lg:py-5">
            <p className="text-center px-3 lg:px-6">
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
