/** @format */
"use client";

import Image from "next/image";
import { useState } from "react";

import logo from "../../../public/assets/logo.png"
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

import todoImage from  "../../../public/assets/logo.png"
import calendarImage from "../../../public/assets/logo.png"
import remindersImage from "../../../public/assets/logo.png"
import planningImage from "../../../public/assets/logo.png"
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useAutoAnimate } from "@formkit/auto-animate/react";

type NavItem = {
  label: string;
  link?: string;
  menu?: NavItem[];
  iconImage?: string;
};

const navItems: NavItem[] = [
  {
    label: "Our Services",
    link: "#",
    menu: [
        {
          label: "UI/UX Design Services",
          link: "",
        },
        {
          label: "Website Development Services",
          link: "",
        },
        {
          label: "Mobile App Development Services",
          link: "",
        },
        {
          label: "Product Engineering Services",
          link: "",
        },
        {
          label: "Automation Services",
          link: "",
        },
        {
          label: "SEO Services",
          link: "",
        },
        {
          label: "Business and Technology",
          link: "",
        },
        {
          label: "Consulting Services",
          link: "",
        },
      ]
  },
  {
    label: "Industries",
    link: "#",
    menu: [
      {
        label: "E Commerce",
        link: "#"
      },
      {
        label: "Health Care",
        link: "#"
      },
      {
        label: "Marine",
        link: "#"
      },
      {
        label: "Logistics",
        link: "#"
      }
    ]
  },
  {
    label: "Insights",
    link: "#",
    menu: [
        {
          label: "Blogs",
          link: "#"
        },
        {
          label: "Feedbacks",
          link: "#"
        }
      ]
  },
  {
    label: "About Us",
    link: "#"
  },
  {
    label: "Contact Us",
    link: "#"
  }
];

export default function Header() {
  const [animationParent] = useAutoAnimate();
  const [isSideMenuOpen, setSideMenue] = useState(false);
  function openSideMenu() {
    setSideMenue(true);
  }
  function closeSideMenu() {
    setSideMenue(false);
  }

  return (
    <div className="mx-auto flex justify-between px-4 py-5 text-sm lg:px-8">
        <Image
          src={logo}
          alt="banner background"
          className="w-1/6 px-4"
        ></Image>
        {isSideMenuOpen && <MobileNav closeSideMenu={closeSideMenu} />}
        <div className="hidden md:flex items-center gap-4 transition-all text-sm">
          {navItems.map((item, key) => (
            <Link
              key={key}
              href={item.link ?? "#"}
              className="relative group  px-2 py-3 transition-all "
            >
              <p className="flex cursor-pointer items-center gap-2 text-sm font-semibold hover:opacity-60 cursor-pointer">
                <span>{item.label}</span>
                {item.menu && (
                  <IoIosArrowDown className=" rotate-180 transition-all group-hover:rotate-0" />
                )}
              </p>

              {/* dropdown */}
              {item?.menu && (
                <div className="absolute  z-50 right-0   top-10 hidden w-auto  flex-col gap-1 text-slate-400  rounded-lg bg-white py-3 shadow-md  transition-all group-hover:flex ">
                  {item?.menu.map((element, key) => (
                    <Link
                      key={key}
                      href={element.link ?? "#"}
                      className=" flex cursor-pointer items-center  py-1 pl-6 pr-8  hover:text-cyan-700 hover:font-semibold  "
                    >
                      <span className="whitespace-nowrap   pl-3 ">
                        {element.label}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </Link>
          ))}
        </div>
      <FiMenu
        onClick={openSideMenu}
        className="cursor-pointer text-4xl md:hidden"
      />
    </div>
  );
}

function MobileNav({ closeSideMenu }: { closeSideMenu: () => void }) {
  return (
    <div className="fixed left-0 top-0 flex h-full min-h-screen w-full justify-end bg-black/60 md:hidden">
      <div className=" h-full w-[65%] bg-white px-4 py-4">
        <section className="flex justify-end">
          <AiOutlineClose
            onClick={closeSideMenu}
            className="cursor-pointer text-4xl "
          />
        </section>
        <div className=" flex flex-col text-base  gap-2 transition-all">
          {/* {navItems.map((item, key) => (
            <SingleNavItem item={item} />
          ))} */}
          single item nav pending
        </div>

        <section className="  flex  flex-col   gap-8  mt-4 items-center">
          <button className="h-fit text-neutral-400 transition-all hover:text-black/90">
            Login
          </button>

          <button className="w-full  max-w-[200px]  rounded-xl border-2 border-neutral-400 px-4 py-2 text-neutral-400 transition-all hover:border-black hover:text-black/90">
            Register
          </button>
        </section>
      </div>
    </div>
  );
}

function SingleNavItem(label:string,item: NavItem) {
  const [animationParent] = useAutoAnimate();
  const [isItemOpen, setItem] = useState(false);

  function toggleItem() {
    return setItem(!isItemOpen);
  }

  return (
    <Link
      ref={animationParent}
      onClick={toggleItem}
      href={item.link ?? "#"}
      className="relative   px-2 py-3 transition-all "
    >
      <p className="flex cursor-pointer items-center gap-2 text-neutral-400 group-hover:text-black ">
        <span>{item.label}</span>
        {item?.menu && (
          // rotate-180
          <IoIosArrowDown
            className={`text-xs transition-all  ${isItemOpen && " rotate-180"}`}
          />
        )}
      </p>

      {/* dropdown */}
      {isItemOpen && item?.menu && (
        <div className="  w-auto  flex-col gap-1   rounded-lg bg-white py-3   transition-all flex ">
          {item?.menu.map((element, key) => (
            <Link
              key={key}
              href={element.link ?? "#"}
              className=" flex cursor-pointer items-center  py-1 pl-6 pr-8  text-neutral-400 hover:text-black  "
            >
              {/* image */}
              {element.iconImage && <Image src={element.iconImage} alt="item-icon" />}
              {/* item */}
              <span className="whitespace-nowrap   pl-3 ">{element.label}</span>
            </Link>
          ))}
        </div>
      )}
    </Link>
  );
}
