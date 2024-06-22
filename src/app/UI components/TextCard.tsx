import Image from "next/image";
import React from "react";
import Icon from "../components/Icon";

export interface TextCardProps {
  icon: string;
  title: string | null;
  data: string | null;
  isAboutUs?: boolean | null;
}

export default function TextCard(props: TextCardProps) {
  const { icon, title, data, isAboutUs } = props;

  return (
    <div
      className={`w-fit mx-auto my-3  ${
        isAboutUs
          ? "text-center hover:scale-105 "
          : "border-4 text-left pb-5 hover:-translate-y-2 "
      } `}
    >
      <div
        className={`logo-container   ${
          isAboutUs
            ? "mx-auto mb-3 w-2/5 h-2/5 "
            : "w-1/6 h-3/6 mb-2 mx-5  p-1 -mt-9 bg-black "
        }`}
      >
        <Icon icon={icon} size={isAboutUs ? 80 : 50} className="mx-auto" />
      </div>

      <h2 className="mb-3 px-5">
        <b>{isAboutUs ? title?.toLocaleUpperCase() : title}</b>
      </h2>
      <div className={`text-card-data w-full mx-auto px-5 text-sm`}>{data}</div>
    </div>
  );
}
