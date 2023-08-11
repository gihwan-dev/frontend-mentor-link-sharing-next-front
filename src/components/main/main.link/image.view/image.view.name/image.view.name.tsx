"use client";

import styles from "./image.view.name.module.scss";
import { useAppSelector } from "@/stores/hooks";
import { useEffect, useState } from "react";

const ImageViewName = () => {
  const user = useAppSelector(state => state.user);

  const [leftPos, setLeftPos] = useState(0);
  const [topPos, setTopPos] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const rectElement = document.getElementsByTagName("rect");
    const rect = rectElement!.item(0)!.getBoundingClientRect();

    if (!user.firstName && !user.lastName) {
      rectElement!.item(0)!.style.fill = "#EEEE";
    } else {
      rectElement!.item(0)!.style.fill = "white";
    }

    if (!user.email) {
      rectElement!.item(1)!.style.fill = "#EEEE";
    } else {
      rectElement!.item(1)!.style.fill = "white";
    }

    setWidth(rect.width);
    setLeftPos(rect.left);
    setTopPos(rect.top - 8);
  }, [user.firstName, user.lastName, user.email]);

  if (!user.firstName && !user.lastName && !user.email) {
    return null;
  }

  return (
    <div
      style={{
        left: leftPos,
        top: topPos,
        width: width,
      }}
      className={styles.text}
    >
      <p className={styles.name}>
        {user.firstName ?? "     "} {user.lastName ?? "      "}
      </p>
      <p className={styles.email}>{user.email ?? ""}</p>
    </div>
  );
};

export default ImageViewName;
