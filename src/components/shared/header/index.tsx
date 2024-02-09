import Image from "next/image";
import React from "react";

const links = [
  {
    name: "Title Generator",
    link: "title-generator",
  },
  {
    name: "Description Generator",
    link: "description-generator",
  },
  {
    name: "Tags Generator",
    link: "tags-generator",
  },
];

const Header = ({ active = null }: { active?: number | null }) => {
  return (
    <header className="  text-white z-10 h-[14vh]">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between py-1.5 px-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="  text-2xl font-bold">
            <Image width={200} height={20} src={"/logo.png"} alt="'" />
          </a>
        </div>

        <div className="flex lg:flex-1 gap-4 lg:justify-end">
          {links.map((link, i: any) => {
            return (
              <a
                style={{
                  color: active == i ? "#13F9D6" : "white",
                }}
                className={`font-semibold`}
                key={i}
                href={link.link}
              >
                {link.name}
              </a>
            );
          })}
        </div>
      </nav>
    </header>
  );
};

export default Header;
