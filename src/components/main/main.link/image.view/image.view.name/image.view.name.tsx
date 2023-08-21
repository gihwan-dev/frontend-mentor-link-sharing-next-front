"use client";

import styles from "./image.view.name.module.scss";
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import { setEmail, setFirstName, setLastName } from "@/stores/user-info.slice";
import { useGetUserProfile } from "@/utilities/user/react-query";
import { useEffect, useState } from "react";

const ImageViewName = () => {
  const user = useAppSelector(state => state.user);

  const [leftPos, setLeftPos] = useState(0);
  const [topPos, setTopPos] = useState(0);
  const [width, setWidth] = useState(0);

  const { data } = useGetUserProfile();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!!data?.firstName && !user.firstName) {
      dispatch(setFirstName(data.firstName));
    }
    if (!!data?.lastName && !user.lastName) {
      dispatch(setLastName(data.lastName));
    }
    if (!!data?.email && !user.email) {
      dispatch(setEmail(data.email));
    }
  }, [
    user.email,
    user.firstName,
    user.lastName,
    data?.firstName,
    data?.lastName,
    data?.email,
    dispatch,
  ]);

  const viewPortChangeHandler = () => {
    const rectElement = document.getElementsByTagName("rect");
    const rect = rectElement!.item(0)!.getBoundingClientRect();
    setWidth(rect.width);
    setLeftPos(rect.left);
    setTopPos(rect.top - 8);
  };

  useEffect(() => {
    window.addEventListener("resize", viewPortChangeHandler);

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
    return () => {
      window.removeEventListener("resize", viewPortChangeHandler);
    };
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
