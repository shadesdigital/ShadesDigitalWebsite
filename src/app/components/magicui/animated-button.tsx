"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

interface AnimatedButtonProps {
  buttonColor: string;
  buttonType: "normal" | "change";
  buttonTextColor?: string;
  subscribeStatus?: boolean;
  initialText: React.ReactElement | string;
  changeText?: React.ReactElement | string;
  onClick?: any;
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  buttonColor,
  subscribeStatus,
  buttonTextColor,
  changeText,
  initialText,
  onClick,
}) => {
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);

  const onPressButton = (value: boolean) => {
    if (onClick) {
      onClick();
    } else {
      setIsSubscribed(value);
    }
  };

  return (
    <AnimatePresence mode="wait">
      {isSubscribed ? (
        <motion.button
          className="relative flex w-[200px] items-center justify-center overflow-hidden rounded-md bg-white p-[10px] outline outline-1 outline-black"
          onClick={() => onPressButton(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.span
            key="action"
            className="relative block h-full w-full font-semibold"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            style={{ color: buttonColor }}
          >
            {changeText}
          </motion.span>
        </motion.button>
      ) : (
        <motion.button
          className="relative flex w-[200px] cursor-pointer items-center justify-center rounded-md border-none p-[10px]"
          style={{ backgroundColor: buttonColor, color: buttonTextColor }}
          onClick={() => onPressButton(true)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.span
            key="reaction"
            className="relative block font-semibold"
            initial={{ x: 0 }}
            exit={{ x: 50, transition: { duration: 0.1 } }}
          >
            {initialText}
          </motion.span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};
