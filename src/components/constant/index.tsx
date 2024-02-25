import { MdTitle } from "react-icons/md";
import { MdDescription } from "react-icons/md";
import { IoMdPricetags } from "react-icons/io";

export const homeServices = [
  {
    title: "Title Generator",
    description:
      "No More Clickbait, Just Smart bait: AI Writes Titles That Convert Viewers",
    icon: <MdTitle />,
    link: "/ai-youtube-title-generator",
  },
  {
    title: "Description  Generator",
    description:
      "Optimize your channel with personalized AI descriptions for every video",
    icon: <MdDescription />,
    link: "/ai-youtube-description-generator",
  },

  {
    title: "Tags Generator",
    description:
      "Say Goodbye to SEO Struggles, AI Writes Tags That Get Your Videos Seen",
    icon: <IoMdPricetags />,
    link: "/ai-youtube-tags-generator",
  },
];
