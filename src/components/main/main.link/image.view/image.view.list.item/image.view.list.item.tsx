"use client";

import styles from "./image.view.list.item.module.scss";
import MoveToLinkIcon from "../../../../../../public/assets/images/icon-arrow-right.svg";
import React, { useEffect, useState } from "react";
import {
  listColorSelector,
  renderIcon,
} from "@/utilities/link/links-utilities";
import { useAppSelector } from "@/stores/hooks";
import { motion } from "framer-motion";
import { listVariants } from "@/styles/animation.variants";

const ImageViewListItem: React.FC<{
  index: number;
  title: string;
}> = ({ index, title }) => {
  const platform = useAppSelector(state => state.platform.platforms[index]);
  const [leftPos, setLeftPos] = useState(0);
  const [topPos, setTopPos] = useState(0);
  const [width, setWidth] = useState(0);

  const viewPortChangeHandler = () => {
    const rectElement = document.getElementsByTagName("rect");
    const rect = rectElement!.item(index + 2)!.getBoundingClientRect();
    setWidth(rect.width - 32);
    setLeftPos(rect.left);
    setTopPos(rect.top);
  };

  useEffect(() => {
    window.addEventListener("resize", viewPortChangeHandler);

    const rectElement = document.getElementsByTagName("rect");
    const rect = rectElement!.item(index + 2)!.getBoundingClientRect();
    setWidth(rect.width - 32);
    setLeftPos(rect.left);
    setTopPos(rect.top);
    return () => {
      window.removeEventListener("resize", viewPortChangeHandler);
    };
  }, [index]);

  if (!platform) {
    return null;
  }

  if (leftPos === 0 || topPos === 0) {
    return null;
  }

  const styleObj = listColorSelector(title);
  return (
    <motion.div
      variants={listVariants(index)}
      initial={"hidden"}
      animate={"show"}
      style={{
        left: leftPos,
        top: topPos,
        width: width,
        backgroundColor: styleObj.backgroundColor,
        color: styleObj.color,
        border: styleObj.border ?? "none",
      }}
      className={styles.container}
    >
      <div className={styles.platform}>
        <div
          className={
            title === "Frontend Mentor"
              ? styles["svg-black"]
              : styles["svg-white"]
          }
        >
          {renderIcon(title)}
        </div>
        <p>{title}</p>
      </div>
      <div
        className={`${
          title === "Frontend Mentor"
            ? styles["svg-black"]
            : styles["svg-white"]
        } ${styles.arrow}`}
      >
        <MoveToLinkIcon />
      </div>
    </motion.div>
  );
};

export default ImageViewListItem;
