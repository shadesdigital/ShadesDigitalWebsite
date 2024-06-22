import React from 'react'
import { AnimatedList } from './magicui/animated-list'
import { cn } from '../../../lib/utils';

export default function ServicesList(
    services:any
) {

    const Menu = ({ label, description, icon, color, time }: any) => {
        return (
          <figure
            className={cn(
              "relative mx-auto min-h-fit w-full max-w-[400px] transform cursor-pointer overflow-hidden rounded-2xl p-4",
              // animation styles
              "transition-all duration-200 ease-in-out hover:scale-[103%]",
              // light styles
              "bg-gradient-to-b from-stone-950 to-transparent  [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
              // dark styles
              "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
            )}
          >
            <div className="flex flex-row items-center gap-3">
              {/* <div
                className="flex h-10 w-10 items-center justify-center rounded-2xl"
                style={{
                  backgroundColor: color,
                }}
              >
                <span className="text-lg">{icon}</span>
              </div> */}
              <div className="flex flex-col overflow-hidden">
                <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
                  <span className="text-sm sm:text-lg">{label}</span>
                  <span className="mx-1">·</span>
                  <span className="text-xs text-gray-500">{time}</span>
                </figcaption>
                <p className="text-sm font-normal dark:text-white/60">
                  {description}
                </p>
              </div>
            </div>
          </figure>
        );
      };
      

  return (
    <div className="relative flex max-h-[400px] min-h-[400px] w-full max-w-[32rem] flex-col overflow-hidden rounded-lg  bg-background p-6 shadow-lg">
    <AnimatedList>
      {services?.services?.map((item: any, index: any) => (
        <Menu {...item} key={index} />
      ))}
    </AnimatedList>
  </div>
  )
}
