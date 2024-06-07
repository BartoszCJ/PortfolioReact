"use client";

import Link from "next/link";
import { FaYoutube, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/yourusername" },
  { icon: <FaLinkedinIn />, path: "https://linkedin.com/in/yourusername" },
  { icon: <FaYoutube />, path: "https://youtube.com/yourusername" },
  { icon: <FaTwitter />, path: "https://twitter.com/yourusername" },
];
export const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};
