import React, { useState } from "react";
import useHttp from "@/hook/use-http";
import { IoSendSharp } from "react-icons/io5";

const SearchMenu = ({
  updateData,
  updateScreen,
  updateLoading,
  loading,
  query,
  setQuery,
}: {
  updateData: any;
  updateScreen: any;
  updateLoading: any;
  loading: any;
  query: any;
  setQuery: any;
}) => {
  const { searchTitles } = useHttp();

  const handleFormSubmit = (event: any) => {
    event.preventDefault();
    if (loading) return;
    updateLoading(true);

    searchTitles(
      { title: query },
      (res: any) => {
        updateData((prev: any) => ({
          ...prev,
          title: res?.titles,
        }));

        setTimeout(() => {
          updateLoading(false);
          updateScreen(2);
        }, 2000);
      },
      (err: any) => {
        console.log({ err });
        updateLoading(false);
      }
    );
  };

  return (
    <div className="w-full">
      <form onSubmit={handleFormSubmit}>
        <div className="flex">
          <label
            htmlFor="search-dropdown"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Your Email
          </label>

          <div className="relative w-full">
            <input
              type="search"
              id="search-dropdown"
              className="block p-4 w-full z-20 text-md text-gray-900 bg-gray-50 rounded-lg border-s-gray-50  border-gray-300 focus:ring-blue-500 focus:border-none focus:outline-none"
              placeholder="Search with title..."
              value={query}
              onChange={(e) => setQuery(e.target.value as any)}
              required
            />
            <button
              type="submit"
              className="absolute w-[5rem] items-center text-center flex justify-center top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-[#111439]  rounded-e-lg border border-[#111439]  hover:bg-[#111439]/95 focus:outline-none"
            >
              {loading ? (
                "..."
              ) : (
                <p className="text-xl">
                  <IoSendSharp />
                </p>
              )}
              <span className="sr-only">Search</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchMenu;
