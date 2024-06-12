"use client";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Image from "next/image";
import image from "../../../public/assets/bg (1).jpg";
const Banner = () => {
  const [text] = useTypewriter({
    words: [
      "Embrace digital transform.",
      "Building Trust, Assuring Success.",
      "Crafting Memorable User Experiences.",
    ],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  const [data] = useTypewriter({
    words: [
      "At Shades Digital, we embrace technology to help our partners pursue their passions and achieve success in their endeavors. We believe that our success is determined by the success of our partners. ",
    ],
    // loop: true,
    typeSpeed: 30,
    // deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    // <div className="h-96 max-w-screen-2xl mx-auto flex flex-col justify-center items-center">
    //   <h1 className="text-2xl md:text-4xl  font-bold">
    //     Connecting Passion with Technology
    //   </h1>
    //   {/* <p className="text-base md:text-lg py-8 font-semibold mt-2">
    //     {text} <Cursor cursorBlinking cursorStyle="|" cursorColor="#ffaa17" />
    //   </p> */}

    //   <p className="text-base text-sm mt-2 w-1/2">
    //     {data} <Cursor cursorBlinking cursorStyle="|" cursorColor="#ffaa17" />
    //   </p>
    // </div>
    <div className="h-96 max-w-screen-2xl mx-auto flex self-start flex-col justify-center items-start px-36">
      <h1 className="text-4xl md:text-5xl  font-bold">
        Connecting Passion with Technology
      </h1>
      <p className="text-base text-sm mt-2 py-4">
        {data} <Cursor cursorBlinking cursorStyle="|" cursorColor="#ffaa17" />
      </p>
    </div>
  );
};

export default Banner;
