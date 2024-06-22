import TextCard, { TextCardProps } from "@/app/UI components/TextCard";
import React from "react";

export default function Industries() {
  const IndustriesData = [
    {
      icon: "aid-kit",
      title: "Healthcare",
      data: "Harnessing technology to develop groundbreaking healthcare solutions.",
    },
    {
      icon: "cart",
      title: "E commerce",
      data: "Pushing the boundaries of e-commerce with cutting-edge technologies.",
    },
    {
      icon: "location-marina",
      title: "Marine",
      data: "Advancing marine technology through innovative solutions.",
    },
    {
      icon: "cogs",
      title: "Logistics",
      data: "Driving logistics forward with advanced solutions and technologies.",
    },
  ];

  return (
    <div className="w-full h-screen text-white bg-black">
      <div className="w-full h-full flex flex-row py-5 items-center justify-center">
        <div
          style={{
            backgroundImage:
              "url(https://images.ctfassets.net/lsw6afd8rv2d/OhabI7vOem8RswC4kspXa/66b4a145fff6034f94c5d71fdede96cd/banner.jpg?h=250)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="left-item w-2/5 h-4/6 pr-16 text-5xl ml-5"
        >
          <h2 className="text-left float-right mt-40">
            <b>
              Industries
              <br /> We serve
            </b>
          </h2>
        </div>
        <div className=" w-3/5 grid grid-cols-2 gap-8 align-center justify-center mx-7">
          {IndustriesData?.map((card: TextCardProps, index: number) => (
            <TextCard
              key={index}
              icon={card?.icon}
              title={card?.title}
              data={card?.data}
              isAboutUs={false}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
