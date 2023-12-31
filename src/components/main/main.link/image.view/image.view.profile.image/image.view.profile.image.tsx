"use client";

import styles from "./image.view.profile.image.module.scss";
import {useEffect, useState} from "react";
import Image from "next/image";
import {useAppSelector} from "@/stores/hooks";
import {useGetUserProfile} from "@/utilities/user/react-query";

const ImageViewProfileImage = () => {
  const [leftPos, setLeftPos] = useState(0);
  const [topPos, setTopPos] = useState(0);
  const [width, setWidth] = useState(0);

  const image = useAppSelector(state => state.user.image);

  const {data: user, isLoading, error} = useGetUserProfile();

  const viewPortChangeHandler = () => {
    const rectElement = document.getElementsByTagName("circle");
    const rect = rectElement!.item(0)!.getBoundingClientRect();
    setWidth(rect.width);
    setLeftPos(rect.left);
    setTopPos(rect.top);
  };

  useEffect(() => {
    window.addEventListener("resize", viewPortChangeHandler);

    const rectElement = document.getElementsByTagName("circle");
    const rect = rectElement!.item(0)!.getBoundingClientRect();
    setWidth(rect.width);
    setLeftPos(rect.left);
    setTopPos(rect.top);
    return () => {
      window.removeEventListener("resize", viewPortChangeHandler);
    };
  }, []);

  if (!image && !user?.image) {
    return null;
  }

  if (isLoading || error) {
    return null;
  }

  return (
    <div
      style={{
        left: leftPos,
        top: topPos,
        width: `${width}px`,
        height: `${width}px`,
      }}
      className={styles.profile}
    >
      { !image && !user?.image ? null : <Image
          src={image ?? user?.image ?? ""}
          fill={true}
          objectFit={"cover"}
          style={{
            borderRadius: "100%",
          }}
          alt={"profile image"}
      />}
    </div>
  );
};

export default ImageViewProfileImage;
