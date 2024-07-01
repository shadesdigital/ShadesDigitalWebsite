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
import {
  CrossCircledIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@radix-ui/react-icons";
import Particles from "./magicui/particles";

interface Services {
  label: string;
  description: string;
  index: number;
  image?: any;
  menu?: any[];
}

export default function Carousel() {
  const [selected, setSelected] = useState<any>();

  const [filteredData, setFilteredData] = useState<any[]>(services);

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
      <div className="flex justify-center content-stretch">
        <ArrowLeftIcon
          className="h-8 w-8 opacity-70 cursor-pointer"
          onClick={() => {
            onClickPrev();
          }}
        />
        <ArrowRightIcon
          className="h-8 w-8 opacity-70 cursor-pointer "
          onClick={() => {
            onClickNext();
          }}
        />
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

  const onClickNext = () => {
    if (selected?.index == services?.length - 1) {
      setSelected(services[0]);
    } else {
      setSelected(services[selected?.index + 1]);
    }
  };

  const onClickPrev = () => {
    if (selected?.index == 0) {
      setSelected(services[services.length - 1]);
    } else {
      setSelected(services[selected?.index - 1]);
    }
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
        animation: "ease-in",
        // animationFillMode:"backwards",
        animationDelay: "3",
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
        <CrossCircledIcon
          className="h-8 w-8 opacity-70 cursor-pointer absolute top-10 right-10"
          onClick={() => {
            setSelected("");
          }}
        />
        <Description />
        <div className=" z-50 absolute top-1/2 left-1/2">
          <MagicContainer
            className={
              "flex h-[500px] w-[80px] flex-col gap-4 lg:h-[250px] lg:flex-row "
            }
          >
            {filteredData?.slice(0, 5).map((item) => {
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
      <div className="absolute top-1/3 right-20">
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
      <Particles className="absolute inset-0"
        quantity={100}
        ease={80}
        // color={color}
        refresh/>
      <div className="w-2/3  self-start justify-start items-start py-5  z-50">
        <h1 className=" px-10 text-4xl md:text-5xl font-bold">Take a look at what we do </h1>
        <p className="text-base text-sm mt-2 px-10">
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before the final copy is available.
        </p>
        <div className="absolute top-8 right-10 hover:opacity-70">
          <AnimatedButton
            buttonTextColor="white"
            buttonColor="transparent"
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
