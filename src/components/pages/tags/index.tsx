"use client";

import React, { useEffect, useRef, useState } from "react";
import Header from "@/components/shared/header";
import SearchingScreen from "@/components/shared/search";
import LoadingSpinner from "@/components/loading";
import { useRouter, useSearchParams } from "next/navigation";
import useHttp from "@/hook/use-http";
import toast from "react-hot-toast";
import { FaCopy, FaRegThumbsUp } from "react-icons/fa";
import { MdOutlineThumbDown } from "react-icons/md";
import { VscDebugRestart } from "react-icons/vsc";
import { IoMdClose } from "react-icons/io";
import AccordinationFAQ from "@/components/accordination";
import { FAQS } from "@/components/home/utils";

const TagsPage = () => {
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [type, setType] = useState<null | "Title" | "Description" | "Tags">(
    "Tags"
  );
  const [liked, setLiked] = useState<"Like" | "Dislike" | null>(null);
  const { push } = useRouter();
  const [tags, setTags] = useState([]);
  const { searchTags } = useHttp();
  const tagsListingRef = useRef<HTMLDivElement>(null);

  const generateHandler = () => {
    if (query === null || query === "") {
      toast.error("Please enter your search query.");
      return;
    }
    if (type === null) {
      toast.error("Please select type of your query.");
      return;
    }

    if (type === "Title") {
      push(`/title-generator?query=${query}`);
      return;
    }
    if (type === "Tags") {
      push(`/tags-generator?query=${query}`);
      return;
    }

    if (query && query !== "" && query !== null) {
      setLoading(true);
      searchTags(
        { tags: query, title: query },
        (res: any) => {
          setLoading(false);
          setTags(res?.tags);

          if (tagsListingRef.current) {
            tagsListingRef.current.scrollIntoView({
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
  const deleteTitle = (value: any) => {
    setTags((tag) => {
      return tag.filter((t) => t !== value);
    });
    toast.success("The tags has been removed.");
  };

  const copyClipBoard = (value: any) => {
    navigator.clipboard.writeText(value);
    toast.success("The tags has been copied.");
  };

  const searchParams = useSearchParams();
  const refQuery = searchParams.get("query");

  useEffect(() => {
    if (refQuery && refQuery !== "" && refQuery !== null) {
      setLoading(true);
      setQuery(refQuery);

      searchTags(
        { tags: refQuery, title: refQuery },
        (res: any) => {
          setTags(res?.tags);

          if (tagsListingRef.current) {
            tagsListingRef.current.scrollIntoView({
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
      {loading && <LoadingSpinner />}
      <Header active={2} />
      <div
        className="min-h-[86vh] flex items-center justify-center flex-col"
        style={{ paddingTop: tags?.length > 0 ? "6rem" : 0 }}
      >
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

        <div
          ref={tagsListingRef}
          className="w-full flex items-center justify-center"
        >
          {tags && tags?.length > 0 && (
            <div className=" bg-white p-4 my-16 w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] rounded-[10px]">
              <h2 className="text-gray mb-4">
                Click Copy Button To Copy The Description{" "}
              </h2>
              <div className=" mx-4 mt-2 mb-2 flex flex-col gap-2 transition-all duration-300 ">
                <div className="flex items-center gap-4 flex-wrap">
                  {tags?.map((tag: any) => (
                    <div
                      className="py-1 border border-gray rounded-[10px] px-4 capitalize flex items-center gap-4"
                      key={tag}
                    >
                      <p>{tag}</p>
                      <p
                        className=" cursor-pointer"
                        onClick={() => deleteTitle(tag)}
                      >
                        <IoMdClose />
                      </p>
                    </div>
                  ))}
                </div>

                <div className=" flex items-center justify-end gap-3 mt-4">
                  <p
                    className=" text-[#0B7666] cursor-pointer tooltip text-xl"
                    onClick={() => copyClipBoard(tags)}
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
        <AccordinationFAQ number={0} faqs={FAQS[2]} />
      </div>
    </div>
  );
};

export default TagsPage;
