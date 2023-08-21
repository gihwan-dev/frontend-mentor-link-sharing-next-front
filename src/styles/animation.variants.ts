import { Variants } from "framer-motion";

export const listVariants = (index: number): Variants => {
  return {
    hidden: { opacity: 0, x: -100 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        ease: "easeIn",
        duration: 0.5 + index * 0.1,
      },
    },
  };
};

export const alertVariants = (): Variants => {
  return {
    hidden: { opacity: 0, x: 100 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        ease: "easeIn",
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      x: -100,
      transition: {
        ease: "easeOut",
        duration: 0.5,
      },
    },
  };
};
