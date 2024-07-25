import React from "react";
import Icon from "./Icon";
import Link from "next/link";

const NewFooter = () => {
  return (
    <div className="h-full w-full pt-14 relative  bg-gradient-to-b from-background-900 via-background-700 to-background-600 text-white">
      <div className="info-bar mx-16 flex justify-between ">
        <div className="flex flex-row gap-5 text-base">
          <h2>© 2024 SHADES. All Rights Reserved.</h2>
        </div>
        <div className="flex flex-row gap-8 text-base ">
          <div className="one-link-element w-fit ">
            <Link
              href="#"
              className="group text-white transition duration-300 w-fit flex items-center"
            >
              <div>
                LinkedIn
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
              </div>
              <div className="w-8">
                <Icon
                  size={"100%"}
                  icon={"arrow-up-right"}
                  className="ml-1 group-hover:-translate-y-1 duration-200"
                />
              </div>
            </Link>
          </div>
          <div className="one-link-element w-fit ">
            <Link
              href="#"
              className="group text-white transition duration-300 w-fit flex items-center"
            >
              <div>
                Send a Message
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
              </div>
              <div className="w-8">
                <Icon
                  size={"100%"}
                  icon={"arrow-up-right"}
                  className="ml-1 group-hover:-translate-y-1 duration-200"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="huge-writeup-image">ShadesDigital</div>
    </div>
  );
};

export default NewFooter;
