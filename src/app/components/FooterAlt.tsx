"use client";
import React from "react";
import Image from "next/image";

import logo from "../../../public/assets/logo.png";
import SocialMediaIcon from "./SocialMediaBar";
import Icon from "./Icon";

export default function FooterAlt() {
  const socialMediaHandles = [
    {
      socialMedia: "facebook2",
      url: "www.facebook.com",
    },
    {
      socialMedia: "instagram",
      url: "www.instagram.com",
    },
    {
      socialMedia: "linkedin",
      url: "www.linkedin.com",
    },
    {
      SocialMedia: "youtube",
      url: "www.youtube.com",
    },
  ];

  return (
    <div className="w-full bg-banner-bg bg-center overflow-hidden  bg-gradient-to-b from-stone-950 to-cyan-900">
      <div className="w-11/12 flex justify-between my-8 gap-5 mx-auto text-white ">
        <div className="logo-section h-fit w-3/6 my-20 relative">
          <Image
            src={logo}
            alt="banner background"
            height={300}
            width={300}
            className="mx-16 top-14 relative opacity-30 blur-sm"
          />
          <div className="absolute top-0 ">
            <h2 className="text-5xl font-medium  mb-8 mx-5 opacity-70">
              SHADES.digital
            </h2>
            <div className="address w-4/6 px-5 mb-8 opacity-90">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem,
              voluptatibus ea sit dolor illo corporis dolore blanditiis dolorem
              corrupti, maxime facere.
            </div>
            <div className="social-media-icons w-3/6  flex flex-row mx-4 gap-1 mb-5 ">
              {socialMediaHandles?.map((item: any, index: number) => (
                <SocialMediaIcon
                  key={index}
                  socialMedia={item?.socialMedia}
                  url={item?.url}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="form-control h-fit px-10 w-3/6 text-center">
          <h2 className="mb-10 text-3xl font-semibold">Get in touch</h2>
          <form className="w-2/3 mx-auto">
            <input
              type="text"
              placeholder="Name"
              className="bg-transparent border-0 border-b-2 active:outline-none w-full mb-7  h-10 px-2"
            />
            <input
              type="text"
              placeholder="Phone"
              className="bg-transparent border-0 border-b-2 active:outline-none w-full mb-7  h-10 px-2"
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent border-0 border-b-2 active:outline-none w-full mb-7  h-10 px-2"
            />
            <input
              type="text"
              placeholder="Message"
              className="bg-transparent border-0 border-b-2 active:outline-none w-full mb-7 h-10 px-2"
            />

            <button
              className="opacity-70 hover:opacity-100 hover:scale-105"
              type="submit"
            >
              Send Message
              <Icon size={"7%"} icon={"arrow-right2"} className="mx-3" />
            </button>
          </form>
        </div>
      </div>
      <div className=" h-10 text-center text-white opacity-30 py-10">
        ©SHADES, 2024. All Rights Reserved.
      </div>
    </div>
  );
}
