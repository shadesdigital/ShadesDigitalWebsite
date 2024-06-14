import Image from "next/image";
import React from "react";

export interface TextCardProps {
  logo: string;
  title: string | null;
  data: string | null;
}

export default function TextCard(props: TextCardProps) {
  const { logo, title, data } = props;

  return (
    <div className="w-fit mx-auto text-center my-3">
      <div className="logo-container w-2/5 h-2/5 mb-3 p-1  mx-auto">
        <Image
          src={logo}
          alt="text-card logo"
          height={100}
          width={100}
          className="mx-auto"
        />
      </div>

      <h2 className="mb-3 ">
        <b>{title?.toLocaleUpperCase()}</b>
      </h2>
      <div className="text-card-data w-full mx-auto px-3">{data}</div>
    </div>
  );
}
