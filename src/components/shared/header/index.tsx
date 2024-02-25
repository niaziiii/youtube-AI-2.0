"use client";

import Image from "next/image";
import React, { useState } from "react";

const links = [
  {
    name: "Title Generator",
    link: "ai-youtube-title-generator",
  },
  {
    name: "Description Generator",
    link: "ai-youtube-description-generator",
  },
  {
    name: "Tags Generator",
    link: "ai-youtube-tags-generator",
  },
];

const Header = ({ active = null }: { active?: number | null }) => {
  const [showHeader, setShowHeader] = useState(false);

  return (
    <nav className="bg-black border-gray-200 dark:bg-gray-900 ">
      <div className=" relative flex flex-wrap items-center justify-between w-full text-white z-10  px-2 sm:px-6 md:px-12 lg:px-16">
        {/* <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Flowbite
          </span>
        </a> */}
        <div className="flex lg:flex-1">
          <a href="/" className="  text-2xl font-bold">
            <Image width={200} height={20} src={"/logo.png"} alt="'" />
          </a>
        </div>
        <button
          onClick={() => setShowHeader(!showHeader)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg lg:hidden hover:bg-[#0B7666] focus:outline-none focus:ring-2 focus:ring-white dark:text-white dark:hover:bg-white dark:focus:ring-white"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div
          className={`${
            showHeader ? "absolute z-1000 top-[90%] w-full left-0 " : "hidden"
          } lg:block lg:w-auto`}
          id="navbar-default"
        >
          <ul
            className={`${
              showHeader
                ? "text-white bg-[#0f0f0f] w-[95%] m-auto"
                : " text-white gap-8 "
            } font-medium flex  flex-col p-4 lg:p-0 mt-4  rounded-lg lg:flex-row`}
          >
            {links.map((link, i) => {
              return (
                <li key={link.link}>
                  <a
                    style={{
                      color: active == i ? "#13F9D6" : " ",
                    }}
                    href={link.link}
                    className="block font-bold py-2 px-3 hover:text-[#13F9D6]"
                    aria-current="page"
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
