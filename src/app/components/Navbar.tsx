import React from "react";
import { BsSearch } from "react-icons/bs";
import { ImCart } from "react-icons/im";
import { FiMenu } from "react-icons/fi";
import Image from "next/image";
import logo from "../../../public/assets/logo.png";
import { Popover } from "flowbite-react";
import PopUp from "./PopUp";

const Navbar = () => {
  return (
    <div className="w-full h-20 lg:h-28 text-white bg-transparent lg:px-4">
      <div className="max-w-screen-2xl h-full mx-auto px-4 flex items-center justify-between">
        <Image
          src={logo}
          alt="banner background"
          className="w-1/6 px-4"
          // style={{
          //   height: "30%",
          //   width: "10%",
          // }}
        ></Image>

        <div className="hidden lg:inline-flex gap-8 items-center">
          <ul className="hidden lg:inline-flex items-center gap-8 text-sm font-semibold">
            <Popover
              trigger="hover"
              aria-labelledby="default-popover"
              content={<PopUp />}
            >
              <li className="group/item hover:opacity-70 cursor-pointer">
                Our Services
              </li>
            </Popover>
            <li className="group/item hover:opacity-70 cursor-pointer">
              Industries
            </li>
            <li className="group/item hover:opacity-70 cursor-pointer">
              Insights
            </li>
            <li className="group/item hover:opacity-70 cursor-pointer">
              About Us
            </li>
            <li className="group/item hover:opacity-70 cursor-pointer">
              Contact Us
            </li>
          </ul>
        </div>

        <div className="inline-flex lg:hidden ">
          <FiMenu className="text-3xl" color="white" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
