import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

const SocialItems = () => {
  return (
    <div className="flex items-center justify-between w-full px-8">
      <div className="flex items-center gap-2">
        <a
          href="#"
          className="text-xl h-8 w-8 bg-white rounded-full text-black flex items-center justify-center"
        >
          <FaFacebook />
        </a>
        <a
          href="#"
          className="text-xl h-8 w-8 bg-white rounded-full text-black flex items-center justify-center"
        >
          <FaInstagram />
        </a>
        <a
          href="#"
          className="text-xl h-8 w-8 bg-white rounded-full text-black flex items-center justify-center"
        >
          <FaTwitter />
        </a>
        <a
          href="#"
          className="text-xl h-8 w-8 bg-white rounded-full text-black flex items-center justify-center"
        >
          <FaPinterest />
        </a>
      </div>
      <div className="flex items-center gap-4 text-white">
        <a href="#">Declaimer</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">About Us</a>
      </div>
    </div>
  );
};

export default SocialItems;
