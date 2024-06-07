"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { FiDownload, FiLoader } from "react-icons/fi";
import { Social } from "@/components/Social";
import { Photo } from "@/components/Photo";
import { Stats } from "@/components/Stats";

export const Home = () => {
  const [loading, setLoading] = useState(true);
  const [loadingPhoto, setLoadingPhoto] = useState(true);
  const [photoSrc, setPhotoSrc] = useState("/assets/waltur.png");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingPhoto(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer1);
  }, []);

  const handlePhotoClick = () => {
    setPhotoSrc((prevSrc) =>
      prevSrc === "/assets/waltur.png"
        ? "/assets/mojavatarrr.png"
        : "/assets/waltur.png"
    );
  };

  return (
    <section className="container mx-auto h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            {loading ? (
              <div className="flex items-center justify-center h-16">
                <FiLoader className="text-xl animate-spin" />
              </div>
            ) : (
              <h1 className="h1">
                Hej jestem, <br /> <span className="text-accent">Bartosz</span>
              </h1>
            )}
            {loading ? (
              <div className="flex items-center justify-center h-16">
                <FiLoader className="text-xl animate-spin" />
              </div>
            ) : (
              <p className="max-w-[500px] mb-9 text-white/80">
                Pasjonuję się tworzeniem aplikacji webowych oraz grafiką
                wektorową, grafiką 3D, i drukowaniem 3D.
                <br></br> <br></br>
                <span className="font-bold">(Proszę kliknąć na psa)</span>
              </p>
            )}

            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Tu będzie moje CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:ml-0 my-7">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            {loadingPhoto ? (
              <div className="flex items-center justify-center h-64 w-64 bg-gray-200 rounded-full">
                <FiLoader className="text-4xl animate-spin" />
              </div>
            ) : (
              <Photo photoSrc={photoSrc} onPhotoClick={handlePhotoClick} />
            )}
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
