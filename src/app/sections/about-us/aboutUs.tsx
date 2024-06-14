import React from "react";
import Image from "next/image";
import TextCard, { TextCardProps } from "@/app/UI components/TextCard";

export default function AboutUs() {
  const textCardCarousal = [
    {
      logo: "/assets/commitment to excellence.svg",
      title: "Commitment to excellence",
      data: "A first step to continous improvement and the driving force behind top-rated organizations",
    },
    {
      logo: "/assets/personalised approach.svg",
      title: "Personalized Approach",
      data: "Knowledge is closely related to the person who developed or holds it and is shared through face-to-face contact.",
    },
    {
      logo: "/assets/empower businesses.svg",
      title: "Empower Businesses",
      data: "Sharing information, rewards, and power with employees, focusing on employee experience makes all the difference",
    },
  ];

  return (
    <div className="w-full bg-banner-bg bg-center">
      {/* <div className="w-full text-white bg-gradient-to-b from-stone-950 to-transparent"> */}

      <div className="h-screen bg-gradient-to-r from-cyan-700 to-blue-900 flex flex-col items-center text-white">
        <div className="top-section w-9/12  flex flex-row gap-5 p-3 mb-3">
          <div className="who-are-we-label w-3/5 h-full p-5 py-7 pr-20 border-8 text-6xl">
            <b>WHO</b>
            <br />
            <b>ARE</b>
            <br />
            <b>WE ?</b>
          </div>
          <div className="who-are-we-data py-4 text-sm">
            Founded by a team of young passionate entrepreneurs, Shades Digital
            is dedicated to transforming the IT services landscape. Our journey
            began with a shared vision : to harness the power of technology and
            innovation to drive success for our clients.
            <br />
            <br />
            At Shades Digital, we specialize in providing cutting-edge IT
            solutions that are tailored to meet the unique needs of each
            partner. Our comprehensive range of services includes software
            development, cloud computing, cybersecurity, data analytics, and IT
            consulting. By leveraging the latest technologies and industry best
            practices, we ensure that our clients stay ahead in a rapidly
            evolving digital world. Our mission is simple yet profound: to
            empower businesses by connecting passion with technology. We believe
            that the key to our success lies in the success of our partners.
            This belief drives us to deliver exceptional service and support,
            fostering a collaborative environment where innovation and
            creativity can thrive.
          </div>
        </div>
        <div
          style={{
            backgroundImage:
              "url(https://images.ctfassets.net/lsw6afd8rv2d/OhabI7vOem8RswC4kspXa/66b4a145fff6034f94c5d71fdede96cd/banner.jpg?h=250)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="lower-section w-10/12  px-20 text-center bg-blue-500"
        >
          <div className="flex w-fit mx-auto mb-5 -mt-5">
            <Image src={"/assets/plus.svg"} alt="plus" height={80} width={40} />
            <h2 className="text-5xl">WHY US ?</h2>
          </div>

          <div className="why-us-data w-3/6 mx-auto text-sm mb-5">
            We embrace technology to help our partners pursue their passions and
            achieve success in their endeavors. We believe that our success is
            determined by the success of our partners.
          </div>
          <div className="static-carousal grid grid-cols-3 gap-10">
            {textCardCarousal?.map((card: TextCardProps, index: number) => (
              <TextCard
                key={index}
                logo={card?.logo}
                title={card?.title}
                data={card?.data}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
