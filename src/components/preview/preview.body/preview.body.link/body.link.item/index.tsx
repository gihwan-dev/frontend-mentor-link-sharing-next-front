import React from "react";

import RightArrow from "public/assets/images/icon-arrow-right.svg";

import styles from "./index.module.scss";
import {
  listColorSelector,
  renderIcon,
} from "@/utilities/link/links-utilities";
import Link from "next/link";

const BodyLinkItem: React.FC<{ title: string; link: string }> = ({
  title,
  link,
}) => {
  const colorInfo = listColorSelector(title);
  return (
    <Link
      href={link}
      className={styles.item}
      style={{
        backgroundColor: colorInfo.backgroundColor,
        color: colorInfo.color,
        border: colorInfo.border ?? "none",
        borderRadius: "0.5rem",
      }}
    >
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
      <div>
        <RightArrow
          className={`${
            title === "Frontend Mentor"
              ? styles["svg-black"]
              : styles["svg-white"]
          } ${styles.arrow}`}
        />
      </div>
    </Link>
  );
};

export default BodyLinkItem;
