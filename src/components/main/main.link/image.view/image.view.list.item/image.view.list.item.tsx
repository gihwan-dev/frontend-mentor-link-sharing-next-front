"use client";

import styles from "./image.view.list.item.module.scss";
import MoveToLinkIcon from "../../../../../../public/assets/images/icon-arrow-right.svg";
import React, { useEffect, useState } from "react";
import {
  listColorSelector,
  renderIcon,
} from "@/utilities/link/links-utilities";

const ImageViewListItem: React.FC<{
  index: number;
  title: string;
}> = ({ index, title }) => {
  const [leftPos, setLeftPos] = useState(0);
  const [topPos, setTopPos] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const rectElement = document.getElementsByTagName("rect");
    const rect = rectElement!.item(index + 2)!.getBoundingClientRect();
    setWidth(rect.width - 32);
    setLeftPos(rect.left);
    setTopPos(rect.top);
  }, [index]);
  const styleObj = listColorSelector(title);
  return (
    <div
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
    </div>
  );
};

export default ImageViewListItem;
