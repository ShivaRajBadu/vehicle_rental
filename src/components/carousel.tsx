"use client";
import Image from "next/image";
import React, { useState } from "react";

interface image {
  src: string;
  alt: string;
}
const CustomCarousel = ({ images }: { images: image[] }) => {
  const handleImageChange = (index: number) => {
    setCurrentIndex(index);
  };
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div>
      <div className="max-w-[500px] w-full shadow-md h-[400px] relative">
        <Image
          src={images[currentIndex].src}
          fill
          sizes="cover"
          alt={images[currentIndex].alt}
          className="rounded-md "
        />
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
    </div>
  );
};

export default CustomCarousel;
