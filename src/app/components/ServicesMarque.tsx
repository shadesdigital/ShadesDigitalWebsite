import { cn } from "../../../lib/utils";
import Marquee from "./magicui/marquee";
import {services} from './data'
import Image from "next/image";



const firstRow = services.slice(0, services.length / 2);
const secondRow = services.slice(services.length / 2);

const ServiceCard = ({
  image,
  label,
  tag,
}: {
  image: any;
  label: string;
  tag: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        
        "border-white/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image className="" width="100" height="100" alt="" src={image} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {label}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{}</p>
        </div>
      </div>
      {/* <blockquote className="mt-2 text-sm">{tag}</blockquote> */}
    </figure>
  );
};

export default function ServicesMarque(){
  return (
    <div className="relative flex  w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-background  md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((item) => (
          <ServiceCard key={item.label} {...item} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((item) => (
          <ServiceCard key={item.label} {...item} />
        ))}
      </Marquee>
    </div>
  );
};

