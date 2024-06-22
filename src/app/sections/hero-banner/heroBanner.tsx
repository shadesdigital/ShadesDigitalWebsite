import React from "react";
import Image from "next/image";
import Banner from "../../components/Banner";
import image from "../../../../public/assets/bg2.png";
import Header from "@/app/components/Header";
import Globe from "@/app/components/magicui/globe";

export default function Herobanner() {
  return (
    <div className="w-full bg-banner-bg bg-center">
      {/* <div
        style={{
          zIndex: -1,
          height: "500px",
          width: "100vw",
        }}
      >
        <Image
          src={image}
          alt="banner background"
          layout="fill"
          objectFit="cover"
        ></Image>
      </div> */}
      <div
        style={{
          backgroundImage:
            "url(https://images.ctfassets.net/lsw6afd8rv2d/OhabI7vOem8RswC4kspXa/66b4a145fff6034f94c5d71fdede96cd/banner.jpg?h=250)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          color: "white",
          margin: 0,
          padding: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          
        }}
      >
        {/* <div className="w-full text-white bg-gradient-to-r from-cyan-500 to-blue-500 opacity-70"> */}
        <div className="w-full text-white bg-gradient-to-b from-stone-950 to-transparent ">
          <Header/>
          <div className="self-start  flex ">
          <Banner />
          {/* <Globe className="top-28 " />  */}
          </div>
        </div>
      </div>
    </div>
  );
}
