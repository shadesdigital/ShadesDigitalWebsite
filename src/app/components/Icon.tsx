import React from "react";
import IcoMoon from "react-icomoon";
import iconSet from "../../../public/fonts/selection.json";

export interface IcomoonProps {
  color?: string;
  size: string | number;
  icon: string;
  className?: string;
}
const Icon = (props: IcomoonProps) => {
  const { color, size = "100%", icon, className = "" } = props;
  return (
    <IcoMoon
      iconSet={iconSet}
      icon={icon}
      size={size}
      color={color}
      className={className}
    />
  );
};

export default Icon;
