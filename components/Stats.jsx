"use client";
import CountUp from "react-countup";
import React from "react";

const stats = [
  {
    num: 3,
    text: "Lata nauki",
  },
  {
    num: 9,
    text: "Aplikaci webowych",
  },
  {
    num: 21,
    text: "Modeli 3D",
  },
  {
    num: 32,
    text: "Grafiki Wektorowe",
  },
];

export const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                key={index}
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leadnig-snug text-white/80`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
