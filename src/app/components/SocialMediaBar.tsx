import React from "react";
import Icon from "./Icon";
import Link from "next/link";

export interface SocialMediaIconProps {
  socialMedia: string;
  url: string;
}

const SocialMediaIcon = (props: SocialMediaIconProps) => {
  const { socialMedia, url } = props;

  return (
    <Link
      className="w-8 h-8 mx-2 hover:scale-105 opacity-80 hover:opacity-100"
      href={`//` + url}
      passHref
      target="_blank"
    >
      <Icon className="mx-auto" size={"100%"} icon={socialMedia} />
    </Link>
  );
};

export default SocialMediaIcon;
