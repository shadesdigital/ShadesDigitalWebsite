"use client";
import React, { useState } from "react";
import { MagicContainer, MagicCard } from "./magicui/magic-card";
import ServicesList from "./ServicesList";
import { services } from "./data";
import { ChevronRightIcon } from "lucide-react";
import { AnimatedButton } from "./magicui/animated-button";
import ServicesMarque from "./ServicesMarque";
import Image from "next/image";
import { BorderBeam } from "./magicui/border-beam";
import {useSpring,animated} from 'react-spring'

interface Services {
  label: string;
  description: string;
  index: number;
  image?: any;
  menu?: any[];
}

export default function Carousel() {
  const [selected, setSelected] = useState<Services>();

  const [filteredData, setFilteredData] = useState<any[]>(services);


  const animationProps = useSpring({
    to:{opacity:1},
    from:{opacity:0},
    delay:200
  })
  const onClick = (data: Services) => {
    setSelected(data);
    filterData(data?.index);
  };

  const filterData = (index: number) => {
    if (index > 0) {
      const temp = services.slice(0, index);
      const data = services.slice(index + 1, 7);
      const newData = data.concat(temp);
      setFilteredData(newData);
    }
  };

  const Buttons = () => {
    return (
      <div className=" flex justify-center items-end">
        <button
          style={{
            width: "40px",
            height: " 40px",
            borderRadius: "50%",
            backgroundColor: "#eee4",
            border: "none",
            color: "#fff",
            // font-family: monospace,
            // font-weight: bold,
            transition: ".5s",
            margin: "20px",
          }}
          id="prev"
        >
          &lt;
        </button>
        <button
          className="rounded-full my-5 bg-white h-10 w-10 opacity-50 text-white"
          id="next"
        >
          &gt;
        </button>
      </div>
    );
  };

  const Description = () => {
    return (
      <div className="flex-col px-10">
        <h1 className="text-4xl md:text-5xl font-bold">{selected?.label}</h1>
        <p className="text-base text-sm mt-2 py-4">{selected?.description}</p>
        {selected?.menu && <ServicesList services={selected?.menu} />}
      </div>
    );
  };

  return selected ? (
    <div
    style={{
      color: "white",
      margin: 0,
      padding: 10,
      display: "flex",
      flexDirection: "column",
      width: "90%",
      animation: 'ease-in',
      // animationFillMode:"backwards",
      animationDelay:'3'
    }}
      className="overflow-hidden relative"
    >
       <Image
      src={selected?.image}
      width={500}
      height={500}
      alt="background"
      className="absolute z-0 w-full brightness-50 blur-sm"
    />
      <div className="w-2/3 flex-col self-start justify-start items-start pt-10  z-50">
        <Description />
        <div className=" z-50 absolute top-1/2 left-1/2">
          <MagicContainer
            className={
              "flex h-[500px] w-[80px] flex-col gap-4 lg:h-[250px] lg:flex-row "
            }
          >
            {filteredData?.slice(0, 5).map((item, index) => {
              return (
                <MagicCard
                  className="hover:scale-110 flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#ffaa40_0,#9c40ff_50%,transparent_100%)] p-20 shadow-2xl"
                  onClick={() => {
                    onClick(item);
                  }}
                >
                  <p className=" z-10 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                    {item.label}
                  </p>
                  <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
                </MagicCard>
              );
            })}
          </MagicContainer>
        </div>
      </div>
      <div className="absolute top-20 left-3/4">
        <Buttons />
      </div>
    </div>
  ) : (
    <div
      style={{
        color: "white",
        padding: 10,
        margin: 60,
        display: "flex",
        flexDirection: "column",
        width: "90%",
        // height: "600px",
        // border: "solid",
        // borderWidth: "0 4px 4px 4px",
      }}
      className="overflow-hidden relative"
    >
       <BorderBeam />
      <div className="w-2/3  self-start justify-start items-start py-5  z-50">
        <h1 className=" px-10 text-4xl md:text-5xl font-bold">What we do </h1>
        <p className="text-base text-sm mt-2 px-10">
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before the final copy is available.
        </p>
        <div className="absolute top-8 right-10 hover:opacity-70">
          <AnimatedButton
            buttonTextColor="#0A151D"
            buttonColor="#ffffff"
            initialText={
              <span className="group inline-flex items-center">
                Know more
                <ChevronRightIcon className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            }
            buttonType={"normal"}
            onClick={() => {
              onClick(services[0]);
            }}
          />
        </div>
      </div>
      <div className="px-10">
        <ServicesMarque />
      </div>
    </div>
  );
}
