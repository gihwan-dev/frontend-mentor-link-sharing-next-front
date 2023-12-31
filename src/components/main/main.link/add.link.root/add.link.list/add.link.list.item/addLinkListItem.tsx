"use client";

import styles from "./add.link.list.item.module.scss";
import DragAndDropIcon from "public/assets/images/icon-drag-and-drop.svg";
import DownArrowIcon from "public/assets/images/icon-chevron-down.svg";
import LinkIcon from "public/assets/images/icon-link.svg";
import React, {Dispatch, SetStateAction, useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {Platform, removePlatform,} from "@/stores/platform.slice";
import {MenuList, renderIcon} from "@/utilities/link/links-utilities";

const AddLinkListItem: React.FC<{
  platform: Platform;
  index: number;
  setCurPlatforms: Dispatch<SetStateAction<Platform[]>>;
}> = ({ index, platform, setCurPlatforms }) => {
  const platformDispatch = useDispatch();

  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const [inputIsFocused, setInputIsFocused] = useState(false);

  const [menuListBtnWidth, setMenuListBtnWidth] = useState(100);

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

  const onInputBlurHandler = () => {
    setInputIsFocused(false);
  };

  const onMenuListClickHandler = (selectedTitle: string) => {
    setCurPlatforms(prevState => {
      const newState = prevState.map((item, i) => {
        if (i === index) {
          return {
            ...item,
            title : selectedTitle,
          }
        }
        return item;
      });
      return newState;
    })
    setIsMenuOpen(false);
  };

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurPlatforms(prevState => {
      const newState = prevState.map((item, i) => {
        if (i === index) {
          return {
            ...item,
            link : event.target.value,
            isLinkValid : true,
          }
        }
        return item;
      });
      return newState;
    })
  };

  useEffect(() => {
    const menuListElement = document.getElementById("platform");
    setMenuListBtnWidth(menuListElement?.offsetWidth ?? 100);

    window.addEventListener("resize", changeViewportHandler);

    return () => {
      window.removeEventListener("resize", changeViewportHandler);
    };
  }, []);

  if (!platform) {
    return null;
  }

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
    <div
      className={styles.item}
    >
      <div className={styles.top}>
        <button
          className={styles["btn-drag-and-drop"]}
        >
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
        <div
          className={
            inputIsFocused
              ? styles["input-focused"]
              : platform.isLinkValid
              ? ""
              : styles.isInvalid
          }
        >
          <LinkIcon />
          <input
            value={platform.link}
            onChange={inputChangeHandler}
            inputMode={"url"}
            onFocus={onInputFocusHandler}
            onBlur={onInputBlurHandler}
          />
          {platform.isLinkValid ? (
            ""
          ) : (
            <p className={styles.invalidMsg}>Can not be empty.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default React.memo(AddLinkListItem);
