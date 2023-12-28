"use client";
import Image from "next/image";
import React, { useState } from "react";

const gallery = [
  "image-slide-1.jpg",
  "image-slide-2.jpg",
  "image-slide-3.jpg",
  "image-slide-4.jpg",
  "image-slide-5.jpg",
];

const Mywork = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleClickRight = () => {
    setCurrentImage((prevIndex) =>
      prevIndex === gallery.length - 1 ? 0 : prevIndex + 1
    );
  };
  const handleClickLeft = () => {
    setCurrentImage((prevIndex) =>
      prevIndex === 0 ? gallery.length - 1 : prevIndex - 1
    );
  };

  const before = currentImage === 0 ? 4 : currentImage - 1;
  const after = currentImage === 4 ? 0 : currentImage + 1;
  return (
    <div className="mt-[5rem] relative overflow-hidden">
      <div className="flex justify-center text-2xl font-bold ">My Work</div>
      <div className="flex mt-[2rem] w-fit transition-transform duration-500 ease-in-out  ">
        <div className="w-1/3 ">
          <Image src={`/image/${gallery[before]}`} width={600} height={400} />
        </div>
        <div className="w-1/3 ">
          <Image
            src={`/image/${gallery[currentImage]}`}
            width={600}
            height={400}
          />
        </div>
        <div className="w-1/3 ">
          <Image src={`/image/${gallery[after]}`} width={600} height={400} />
        </div>
      </div>
      <div className="flex justify-center gap-x-2 mt-3">
        <div
          className="bg-black rounded-full w-[50px] h-[50px] flex justify-center items-center cursor-pointer hover:bg-indigo-950"
          onClick={handleClickLeft}
        >
          <Image src="/image/icon-arrow-left.svg" width={10} height={10} clas />
        </div>
        <div
          className="bg-black rounded-full w-[50px] h-[50px] flex justify-center items-center cursor-pointer hover:bg-indigo-950"
          onClick={handleClickRight}
        >
          <Image src="/image/icon-arrow-right.svg" width={10} height={10} />
        </div>
      </div>
    </div>
  );
};

export default Mywork;
