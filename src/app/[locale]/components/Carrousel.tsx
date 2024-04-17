"use client";
import React, { useEffect, useState } from "react";
import GalleryItem from "./CarrouselItem";

const Carousel = ({ images }: { images: any }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 3000);
    return () => clearInterval(interval);
  }, [nextImage]);

  return (
    <div className="relative w-full">
      <button
        className="absolute z-20 top-1/2 left-0 transform -translate-y-1/2 backdrop-blur-xl rounded-xl"
        onClick={prevImage}
      >
        <img src="/icons/prevButton.svg" alt="" />
      </button>
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((slide, index: number) => (
          <div key={index} className="w-full flex-none">
            <GalleryItem
              title={slide.title}
              image={slide.image}
              url={slide.url}
            />
          </div>
        ))}
      </div>
      <button
        className="absolute z-20 top-1/2 right-0 transform -translate-y-1/2 backdrop-blur-xl rounded-xl"
        onClick={nextImage}
      >
        <img src="/icons/nextButton.svg" alt="" />
      </button>
    </div>
  );
};

export default Carousel;
