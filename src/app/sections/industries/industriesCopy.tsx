import React from "react";
import { industries } from "@/app/components/data";
import { BentoCard, BentoGrid } from "@/app/components/magicui/bento-grid";
import Image from "next/image";
import industriesBackground from '../../../../public/assets/bg (1).jpg'

export default function IndustriesCopy() {
  return (
    <div className="w-full h-screen text-white bg-black relative">
        <Image
 src={industriesBackground}
 alt="background"
 className="absolute top-1/4 w-2/5 brightness-50 blur-sm z-0"
/>
      <div className="w-full h-full flex flex-row py-5 items-center justify-center ">
        <div
          className="left-item w-2/5 h-4/6 pr-16 text-5xl ml-5 z-50"
        >
          <h2 className="text-right float-right mt-40 ">
            <b>
              Industries
              <br /> We serve
            </b>
          </h2>
        </div>
          <BentoGrid className="w-3/5 mx-6">
            {industries.map((industry, index) => (
              <BentoCard key={index} {...industry} />
            ))}
          </BentoGrid>
      </div>
    </div>
  );
}
