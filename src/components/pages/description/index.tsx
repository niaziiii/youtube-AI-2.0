"use client";

import React, { useEffect, useRef, useState } from "react";
import Header from "@/components/shared/header";
import SearchingScreen from "@/components/shared/search";
import { useRouter, useSearchParams } from "next/navigation";
import useHttp from "@/hook/use-http";
import toast from "react-hot-toast";
import { FaCopy } from "react-icons/fa";
import { MdOutlineThumbDown } from "react-icons/md";
import { FaRegThumbsUp } from "react-icons/fa6";
import { VscDebugRestart } from "react-icons/vsc";
import AccordinationFAQ from "@/components/accordination";
import { FAQS } from "@/components/home/utils";
import SocialItems from "@/components/social";

const DescriptionPage = () => {
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [type, setType] = useState<null | "Title" | "Description" | "Tags">(
    "Description"
  );
  const [liked, setLiked] = useState<"Like" | "Dislike" | null>(null);
  const { push } = useRouter();
  const [description, setDescription] = useState("");
  const { searchDescription } = useHttp();
  const DescriptionListingRef = useRef<HTMLDivElement>(null);

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

    if (type === "Title") {
      push(`/ai-youtube-title-generator?query=${query}`);
      return;
    }
    if (type === "Tags") {
      push(`/ai-youtube-tags-generator?query=${query}`);
      return;
    }

    if (query && query !== "" && query !== null) {
      setLoading(true);
      searchDescription(
        { description: query, title: query },
        (res: any) => {
          setLoading(false);
          setDescription(res?.description);

          if (DescriptionListingRef.current) {
            DescriptionListingRef.current.scrollIntoView({
              behavior: "smooth",
            });
          }
        },
        (err: any) => {
          setLoading(false);
          console.log({ err });
        }
      );
    }
  };
  let count = 1;
  const copyClipBoard = (value: any) => {
    if (count > 1) return;
    navigator.clipboard.writeText(value);
    toast.success("The description has been copied.");
    count = count + 1;
    return;
  };

  const searchParams = useSearchParams();
  const refQuery = searchParams.get("query");

  useEffect(() => {
    if (refQuery && refQuery !== "" && refQuery !== null) {
      setLoading(true);
      setQuery(refQuery);

      searchDescription(
        { description: refQuery, title: refQuery },
        (res: any) => {
          setDescription(res?.description);

          if (DescriptionListingRef.current) {
            DescriptionListingRef.current.scrollIntoView({
              behavior: "smooth",
            });
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

  return (
    <div className="w-full">
      <Header active={1} />
      <div
        className="min-h-[86vh] flex items-center justify-center flex-col"
        style={{ paddingTop: description?.length > 0 ? "6rem" : 0 }}
      >
        <SearchingScreen
          placeholder="Enter Keyword To Generate Description....."
          title="AI YouTube Description Generator"
          description="Our AI YouTube Video Description Generator creates compelling, SEO-friendly descriptions in seconds"
          query={query}
          setQuery={setQuery}
          type={type}
          setType={setType}
          generateHandler={generateHandler}
          loading={loading}
        />

        <div
          ref={DescriptionListingRef}
          className="w-full flex items-center justify-center"
        >
          {description && description?.length > 0 && (
            <div className="z-30 bg-white p-4 my-16 w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] rounded-[10px]">
              <h2 className="text-gray mb-4">
                Click Copy Button To Copy The Description{" "}
              </h2>
              <div className=" mx-4 mt-2 mb-2 flex flex-col gap-2 transition-all duration-300 ">
                {typeof description === "string" && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: description?.replace(/\n/g, "<br/>"),
                    }}
                  />
                )}

                <div className=" flex items-center justify-end gap-3 mt-4">
                  <p
                    className=" text-[#0B7666] cursor-pointer tooltip text-xl"
                    onClick={() => copyClipBoard(description)}
                    data-tooltip="Copy"
                  >
                    <FaCopy />
                  </p>
                  <p
                    style={{ color: liked == "Like" ? "blue" : "black" }}
                    className="  cursor-pointer tooltip text-xl"
                    onClick={() => setLiked("Like")}
                    data-tooltip="Like"
                  >
                    <FaRegThumbsUp />
                  </p>
                  <p
                    style={{ color: liked == "Dislike" ? "blue" : "black" }}
                    className="  cursor-pointer tooltip text-xl"
                    onClick={() => setLiked("Dislike")}
                    data-tooltip="Dislike"
                  >
                    <MdOutlineThumbDown />
                  </p>
                  <p
                    className=" text-black cursor-pointer tooltip text-xl"
                    // onClick={() => copyClipBoard(t)}
                    data-tooltip="Re-generate"
                  >
                    <VscDebugRestart />
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div>
        <AccordinationFAQ number={0} faqs={FAQS[1]} />
      </div>
      <div className="pb-10 pt-10">
        <SocialItems />
      </div>
    </div>
  );
};

export default DescriptionPage;
