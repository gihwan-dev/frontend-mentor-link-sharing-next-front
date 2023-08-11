"use client";

import styles from "./add.link.list.item.module.scss";
import DragAndDropIcon from "public/assets/images/icon-drag-and-drop.svg";
import DownArrowIcon from "public/assets/images/icon-chevron-down.svg";
import LinkIcon from "public/assets/images/icon-link.svg";
import React, { useEffect, useRef, useState } from "react";
import { useAppSelector } from "@/stores/hooks";
import { useDispatch } from "react-redux";
import { removePlatform, setPlatform } from "@/stores/platform.slice";
import { MenuList, renderIcon } from "@/utilities/link/links-utilities";

const AddLinkListItem: React.FC<{
  index: number;
}> = ({ index }) => {
  const platform = useAppSelector(state => state.platform.platforms[index]);
  const platformDispatch = useDispatch();

  const [initialX, setInitialX] = useState(0);
  const [initialY, setInitialY] = useState(0);

  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [inputIsFocused, setInputIsFocused] = useState(false);

  const [menuListBtnWidth, setMenuListBtnWidth] = useState(100);

  const ref: React.Ref<HTMLLIElement> = useRef(null);

  const openMenuListHandler = () => {
    setIsMenuOpen(true);
  };

  const closeMenuListHandler = () => {
    setIsMenuOpen(false);
  };

  const changeViewportHandler = () => {
    const menuListElement = document.getElementById("platform");
    setMenuListBtnWidth(menuListElement?.offsetWidth ?? 100);
  };

  const onInputFocusHandler = () => {
    setInputIsFocused(true);
  };

  const onMouseMoveHandler = (event: React.MouseEvent) => {
    setMouseX(event.clientX);
    setMouseY(event.clientY);
  };

  const onInputBlurHandler = () => {
    setInputIsFocused(false);
  };

  const onMenuListClickHandler = (selectedTitle: string) => {
    platformDispatch(setPlatform({ index, title: selectedTitle }));
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const menuListElement = document.getElementById("platform");
    setMenuListBtnWidth(menuListElement?.offsetWidth ?? 100);

    window.addEventListener("resize", changeViewportHandler);

    return () => {
      window.removeEventListener("resize", changeViewportHandler);
    };
  }, []);

  const menubar = (
    <ul
      onMouseLeave={closeMenuListHandler}
      className={styles["drop-down-menu"]}
      style={{
        width: menuListBtnWidth,
      }}
    >
      {MenuList.map(item => {
        return (
          <React.Fragment key={item.title}>
            <li
              onClick={() => onMenuListClickHandler(item.title)}
              className={item.title === platform.title ? styles.isActive : ""}
            >
              {item.icon}
              <p>{item.title}</p>
            </li>
            <hr key={Math.random().toString().slice(2)} />
          </React.Fragment>
        );
      })}
    </ul>
  );

  return (
    <li className={styles.item} onMouseMove={onMouseMoveHandler} ref={ref}>
      <div className={styles.top}>
        <button className={styles["btn-drag-and-drop"]} draggable={true}>
          <DragAndDropIcon />
          <p>Link #{index + 1}</p>
        </button>
        <button
          onClick={() => {
            platformDispatch(removePlatform(index));
          }}
          className={styles["btn-remove"]}
        >
          Remove
        </button>
      </div>
      <div className={styles["drop-down-platform"]}>
        <label htmlFor="platform">Platform</label>
        <button onClick={openMenuListHandler} id={"platform"}>
          <div className={styles["menu-title"]}>
            {renderIcon(platform.title)}
            <p>{platform.title}</p>
          </div>
          <DownArrowIcon />
        </button>
        {isMenuOpen ? menubar : null}
      </div>
      <div className={styles["link-input"]}>
        <label>Link</label>
        <div className={inputIsFocused ? styles["input-focused"] : ""}>
          <LinkIcon />
          <input
            inputMode={"url"}
            onFocus={onInputFocusHandler}
            onBlur={onInputBlurHandler}
          />
        </div>
      </div>
    </li>
  );
};

export default AddLinkListItem;
