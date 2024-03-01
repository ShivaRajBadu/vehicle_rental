"use client";
import Image from "next/image";
import React, { useState } from "react";
import fullScreenIcon from "../../public/icons/fullscreen.png";

interface image {
  src: string;
  alt: string;
}
const CustomCarousel = ({ images }: { images: image[] }) => {
  const handleImageChange = (index: number) => {
    if (images.length === 1) return;
    // if(index>images.length || index <0) return;
    if (index < 0) {
      setCurrentIndex(images.length - 1);
      return;
    }
    if (index > images.length - 1) {
      setCurrentIndex(0);
      return;
    }
    setCurrentIndex(index);
  };
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFullScreen, setShowFullScreen] = useState(false);
  return (
    <div>
      <div className=" w-full shadow-md h-[400px] relative">
        <Image
          src={images[currentIndex].src}
          fill
          sizes="cover"
          alt={images[currentIndex].alt}
          className="rounded-md "
        />
        <div
          onClick={() => setShowFullScreen(true)}
          className="absolute right-3  bottom-3 cursor-pointer rounded-md bg-white/40 p-2 "
        >
          <Image src={fullScreenIcon} alt="arrow" width={20} height={20} />
        </div>
      </div>
      <div className="flex gap-2 py-4">
        {images.map((each, index) => (
          <div
            key={index}
            className={`
            w-[80px] h-[80px]
            relative
            p-2
            shadow-md
            object-cover
            border-2  rounded-md ${
              currentIndex === index
                ? "border-[color:var(--primary-dark-600)] "
                : ""
            }`}
          >
            <Image
              onClick={() => handleImageChange(index)}
              src={each.src}
              fill
              sizes="fill"
              alt={each.alt}
              className="rounded-md cursor-pointer object-cover "
            />
          </div>
        ))}
      </div>
      {showFullScreen && (
        <div className="fixed z-10 h-screen w-screen inset-0 bg-black/90 grid place-content-center">
          <div className="w-[90vw] max-w-[900px] h-screen max-h-[500px] md:max-h-[600px] bg-black/80 rounded-md relative ">
            <div className="bg-white/60 absolute w-[20px] h-[20px] top-2 right-2 z-10">
              <svg
                onClick={() => setShowFullScreen(false)}
                xmlns="http://www.w3.org/2000/svg"
                width="800px"
                height="800px"
                viewBox="0 0 24 24"
                fill="none"
                className="w-full h-full cursor-pointer "
              >
                <path
                  d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"
                  fill="#0F0F0F"
                />
              </svg>
            </div>
            <div className="relative h-full w-full rounded-md overflow-hidden">
              <Image
                src={images[currentIndex].src}
                fill
                alt="full scale image"
                className="object-contain md:object-cover "
              />
            </div>
            {/* show arrow to change images */}
            <div className="absolute flex justify-between w-[95%] top-1/2 -translate-y-1/2 left-5">
              <button
                onClick={() => handleImageChange(currentIndex + 1)}
                className="bg-white/60 w-[40px] h-[40px] cursor-pointer p-2 rounded-lg "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="800px"
                  height="800px"
                  viewBox="0 0 1024 1024"
                  className="icon w-full h-full"
                  version="1.1"
                >
                  <path
                    d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z"
                    fill="#000000"
                  />
                </svg>
              </button>
              <button
                onClick={() => handleImageChange(currentIndex - 1)}
                className="bg-white/60 w-[40px] cursor-pointer h-[40px] p-2 rounded-lg "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="800px"
                  height="800px"
                  viewBox="0 0 1024 1024"
                  className="icon w-full h-full rotate-180"
                  version="1.1"
                >
                  <path
                    d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z"
                    fill="#000000"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomCarousel;
