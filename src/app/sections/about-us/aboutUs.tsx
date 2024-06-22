import React from "react";
import Image from "next/image";
import TextCard, { TextCardProps } from "@/app/UI components/TextCard";

export default function AboutUs() {
  const textCardCarousal = [
    {
      icon: "handshake-o",
      title: "Customer Empathy",
      data: "At Shades Digital, we prioritize understanding our customers' unique challenges and aspirations to ensure our solutions align perfectly with their needs.",
    },
    {
      icon: "personalised-approach",
      title: "AGILE DELIVERY",
      data: "We embrace agile delivery to ensure our projects are flexible, responsive, and consistently meet our clients' evolving needs.",
    },
    {
      icon: "empower-businesses",
      title: "IDEAL WORKPLACE",
      data: "We foster an ideal workplace culture centered on innovation, collaboration, and continuous learning, empowering our team to excel in delivering exceptional solutions to our clients.",
    },
  ];

  return (
    <div className="w-full bg-banner-bg bg-center">
      {/* <div className="w-full text-white bg-gradient-to-b from-stone-950 to-transparent"> */}

      <div className="h-screen bg-gradient-to-r from-cyan-700 to-blue-900 flex flex-col items-center text-white">
        <div className="top-section w-9/12  flex flex-row gap-5 p-3 mb-3">
          <div className="who-are-we-label w-3/5 h-full p-5 py-7 pr-20 border-8 text-6xl">
            <b>
              WHO
              <br />
              ARE
              <br />
              WE ?
            </b>
          </div>
          <div className="who-are-we-data py-4 text-sm">
            Founded by a team of young passionate entrepreneurs, Shades Digital
            is dedicated to transforming the IT services landscape. Our journey
            began with a shared vision : to harness the power of technology and
            innovation to drive success for our clients.
            <br />
            <br />
            At Shades Digital, we specialize in delivering state-of-the-art IT
            solutions tailored to the unique needs of each partner. Our
            comprehensive services encompass product development, website
            development, UI/UX consultations, SEO, automation, and IT
            consulting. By harnessing the latest technologies and adhering to
            industry best practices, we ensure our clients stay ahead in the
            fast-paced digital landscape. Our mission is simple yet profound: to
            empower businesses by uniting passion with technology. We believe
            our success is intrinsically linked to the success of our partners.
            This conviction drives us to provide exceptional service and
            support, fostering a collaborative environment where innovation and
            creativity can flourish.
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
            We help our partners connect their passion with technology and
            innovation, believing that our success is defined by their success.
          </div>
          <div className="static-carousal grid grid-cols-3 gap-10">
            {textCardCarousal?.map((card: TextCardProps, index: number) => (
              <TextCard
                key={index}
                icon={card?.icon}
                title={card?.title}
                data={card?.data}
                isAboutUs={true}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
