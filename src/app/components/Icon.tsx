"use client";
import React from "react";
import IcoMoon from "react-icomoon";
import iconSet from "../../../public/fonts/selection.json";

export interface IcomoonProps {
  color?: string;
  size: string | number;
  icon: string;
  className?: string;
  url?: string;
}
const Icon = (props: IcomoonProps) => {
  const { color, size = "100%", icon, className = "", url } = props;
  const handleClick = () => {
    if (url) window.open(`//` + url);
  };
  return (
    <IcoMoon
      iconSet={iconSet}
      icon={icon}
      size={size}
      color={color}
      className={className}
      onClick={handleClick}
    />
  );
};

export default Icon;
