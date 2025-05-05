"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) => {
  const variants = {
    initial: {
      backgroundPosition: "0% 50%",
    },
    animate: {
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    },
  };

  const transition = {
    duration: 10,
    ease: "linear",
    repeat: Infinity,
  };

  const backgroundStyle = {
    backgroundSize: "400% 400%",
  };

  const backgroundGradient =
    "bg-[radial-gradient(circle_farthest-side_at_0_100%,#999999,transparent),radial-gradient(circle_farthest-side_at_100%_0,#111111,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#000000,transparent),radial-gradient(circle_farthest-side_at_0_0,#aaaaaa,#141316)]";

  return (
    <div className={cn("relative p-[4px]", containerClassName)}>
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : false}
        animate={animate ? "animate" : false}
        transition={animate ? transition : undefined}
        style={animate ? backgroundStyle : undefined}
        className={cn(
          "absolute inset-0 rounded-lg z-[1]",
          backgroundGradient
        )}
      />

      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};
