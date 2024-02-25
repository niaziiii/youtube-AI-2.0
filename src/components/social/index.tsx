import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

const SocialItems = () => {
  return (
    <div className="flex items-center justify-between flex-col gap-6 md:flex-row w-full px-8">
      <div className="flex items-center gap-2">
        <a
          href="https://www.facebook.com/writroai?mibextid=ZbWKwL"
          className="text-xl h-8 w-8 bg-white rounded-full text-black flex items-center justify-center"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.instagram.com/writroai?igsh=MTljZXl2MHluenl1Zw=="
          className="text-xl h-8 w-8 bg-white rounded-full text-black flex items-center justify-center"
        >
          <FaInstagram />
        </a>
        <a
          href="https://x.com/WritroAI?t=1mgsu_NtVmcdxs3TKCwnwg&s=09"
          className="text-xl h-8 w-8 bg-white rounded-full text-black flex items-center justify-center"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.pinterest.com/Writroai"
          className="text-xl h-8 w-8 bg-white rounded-full text-black flex items-center justify-center"
        >
          <FaPinterest />
        </a>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-4 text-white">
        <a href="/disclaimer">Disclaimer</a>
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms-conditions">Terms & Conditions</a>
        <a href="#">About Us</a>
      </div>
    </div>
  );
};

export default SocialItems;
