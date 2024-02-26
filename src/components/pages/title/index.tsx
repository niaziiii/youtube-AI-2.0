"use client";

import React, { useEffect, useRef, useState } from "react";
import Header from "@/components/shared/header";
import SearchingScreen from "@/components/shared/search";
import { useRouter, useSearchParams } from "next/navigation";
import useHttp from "@/hook/use-http";
import { FaCopy } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import toast from "react-hot-toast";
import LoadingSpinner from "@/components/loading";
import AccordinationFAQ from "@/components/accordination";
import { FAQS } from "@/components/home/utils";
import SocialItems from "@/components/social";

const TitlePage = () => {
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [type, setType] = useState<null | "Title" | "Description" | "Tags">(
    "Title"
  );
  const { push } = useRouter();
  const [title, setTitles] = useState([]);
  const { searchTitles } = useHttp();
  const titleListingRef = useRef<HTMLDivElement>(null);

  const generateHandler = () => {
    if (query === null || query === "") {
      toast.error("Please enter your search query.");
      return;
    }
    if (type === null) {
      toast.error("Please select type of your query.");
      return;
    }

    if (type === "Description") {
      push(`/ai-youtube-description-generator?query=${query}`);
      return;
    }
    if (type === "Tags") {
      push(`/ai-youtube-tags-generator?query=${query}`);
      return;
    }

    if (query && query !== "" && query !== null) {
      setLoading(true);
      searchTitles(
        { title: query },
        (res: any) => {
          setLoading(false);
          setTitles(res?.titles);

          if (titleListingRef.current) {
            titleListingRef.current.scrollIntoView({ behavior: "smooth" });
          }
        },
        (err: any) => {
          setLoading(false);
          console.log({ err });
        }
      );
    }
  };

  const searchParams = useSearchParams();
  const refQuery = searchParams.get("query");

  useEffect(() => {
    if (refQuery && refQuery !== "" && refQuery !== null) {
      setLoading(true);
      setQuery(refQuery);

      searchTitles(
        { title: refQuery },
        (res: any) => {
          setTitles(res?.titles);

          if (titleListingRef.current) {
            titleListingRef.current.scrollIntoView({ behavior: "smooth" });
          }
          setTimeout(() => {
            setLoading(false);
          }, 1000);
        },
        (err: any) => {
          setLoading(false);
          console.log({ err });
        }
      );
    }
  }, [refQuery]);

  const copyClipBoard = (value: any) => {
    navigator.clipboard.writeText(value);
    toast.success("The title has been copied.");
  };

  const deleteTitle = (value: any) => {
    setTitles((titles) => {
      return titles.filter((t) => t !== value);
    });
    toast.success("The title has been removed.");
  };

  return (
    <div className="w-full">
      {loading && <LoadingSpinner />}
      <Header active={0} />
      <div
        className="min-h-[86vh] flex items-center justify-center flex-col"
        style={{ paddingTop: title.length > 0 ? "6rem" : 0 }}
      >
        <SearchingScreen
          placeholder="Enter Keyword To Generate Title....."
          title="AI You Tube Title Generator"
          description="Get SEO-friendly, attention-grabbing Ai YouTube video titles in seconds, powered by cutting-edge AI."
          query={query}
          setQuery={setQuery}
          type={type}
          setType={setType}
          generateHandler={generateHandler}
          loading={loading}
        />

        <div
          ref={titleListingRef}
          className="w-full flex items-center justify-center"
        >
          {title && title?.length > 0 && (
            <div className=" bg-white p-4 my-16 w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] rounded-[10px]">
              <h2 className="text-gray mb-4">Copy The Title Below </h2>
              <div className=" mx-4 mt-2 flex flex-col gap-2 transition-all duration-300 ">
                {title.map((t: any, i: number) => (
                  <li
                    key={i}
                    className="list-none flex items-center  border font-semibold text-[#010103] border-black rounded-[10px] py-2 px-4"
                  >
                    <p className="">{t}</p>
                    <p
                      className="ml-auto text-[#0B7666] cursor-pointer tooltip"
                      onClick={() => copyClipBoard(t)}
                      data-tooltip="Copy"
                    >
                      <FaCopy />
                    </p>
                    <p
                      className="ml-3 text-[#00040C] cursor-pointer tooltip"
                      onClick={() => deleteTitle(t)}
                      data-tooltip="Remove title"
                    >
                      <IoMdClose />
                    </p>
                  </li>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <div>
        <AccordinationFAQ number={0} faqs={FAQS[0]} />
      </div>
      <div className="pb-10 pt-10">
        <SocialItems />
      </div>
    </div>
  );
};

export default TitlePage;
