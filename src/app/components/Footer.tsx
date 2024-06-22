import { Input } from "@nextui-org/input";
import React from "react";
import Image from "next/image";
import logo from "../../../public/assets/copy.png";

export default function Footer() {
  const variants = ["flat", "bordered", "underlined", "faded"];

  return (
    <div className="w-full bg-banner-bg bg-center">
      <div className="w-full  px-16 bg-gradient-to-b  from-background-500 to-background-600 flex flex-col text-white">
        <div className="flex  items-stretch">
          <div className="w-1/2 flex flex-col items-center">
            <div className="text-2xl font-bold">SHADES Digital</div>
          </div>
          <div className="h-fit w-1/2 mx-8 p-8 shadow-2xl bg-background-400 flex flex-col items-center text-white">
            <div className="text-2xl font-bold">Contact Form </div>
            {variants.map((variant) => (
              <div key={variant} className="flex gap-4">
                <Input type="email" variant={"underlined"} label="Email" />
              </div>
            ))}
            <div className="h-fit w-1/2 mx-8 p-8 shadow-2xl bg-background-400 items-center text-white">
            Send Message
            </div>
          </div>
        </div>
        <div className="opacity-40 text-xs mt-8 p-8 flex items-center gap-2">
          {/* <Image
            src={logo}
            alt="banner background"
            className="w-6 h-6 "
          ></Image> */}
          {/* <div className="text-xs flex flex-col "> */}
            <span>© 2024 SHADES. All Rights Reserved.</span>

          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
