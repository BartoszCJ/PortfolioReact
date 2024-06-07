"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export const Photo = ({ photoSrc, onPhotoClick }) => {
  return (
    <div
      className="w-full h-full relative flex justify-center items-center"
      onClick={onPhotoClick}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
        }}
        exit={{ opacity: 0, transition: { duration: 0.4, ease: "easeOut" } }}
        key="photoContainer"
        className="relative w-[298px] h-[298px] xl:w-[498px] xl:h-[498px]"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={photoSrc}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Image
              src={photoSrc}
              priority
              quality={100}
              layout="fill"
              alt="Photo"
              className="object-contain"
            />
          </motion.div>
        </AnimatePresence>

        <motion.svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 506 506"
          fill="transparent"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};
