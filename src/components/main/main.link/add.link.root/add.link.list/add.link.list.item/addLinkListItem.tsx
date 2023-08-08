"use client";

import styles from "./add.link.list.item.module.scss";
import DragAndDropIcon from "public/assets/images/icon-drag-and-drop.svg";
import GithubIcon from "public/assets/images/icon-github.svg";
import FrontendMentorIcon from "public/assets/images/icon-frontend-mentor.svg";
import TwitterIcon from "public/assets/images/icon-twitter.svg";
import LinkedInIcon from "public/assets/images/icon-linkedin.svg";
import YouTubeIcon from "public/assets/images/icon-youtube.svg";
import FacebookIcon from "public/assets/images/icon-facebook.svg";
import TwitchIcon from "public/assets/images/icon-twitch.svg";
import DevToIcon from "public/assets/images/icon-devto.svg";
import CodeWarsIcon from "public/assets/images/icon-codewars.svg";
import CodepenIcon from "public/assets/images/icon-codepen.svg";
import FreeCodeCampIcon from "public/assets/images/icon-freecodecamp.svg";
import GitlabIcon from "public/assets/images/icon-gitlab.svg";
import HashNodeIcon from "public/assets/images/icon-hashnode.svg";
import StackOverflow from "public/assets/images/icon-stack-overflow.svg";
import DownArrowIcon from "public/assets/images/icon-chevron-down.svg";
import React, { useEffect, useState } from "react";

interface DropdownMenu {
  icon: React.ReactNode;
  title: string;
}

const MenuList: DropdownMenu[] = [
  {
    icon: <GithubIcon />,
    title: "Github",
  },
  {
    icon: <FrontendMentorIcon />,
    title: "Frontend Mentor",
  },
  {
    icon: <TwitterIcon />,
    title: "Twitter",
  },
  {
    icon: <LinkedInIcon />,
    title: "LinkedIn",
  },
  {
    icon: <YouTubeIcon />,
    title: "YouTube",
  },
  {
    icon: <FacebookIcon />,
    title: "Facebook",
  },
  {
    icon: <TwitchIcon />,
    title: "Twitch",
  },
  {
    icon: <DevToIcon />,
    title: "Dev.to",
  },
  {
    icon: <CodeWarsIcon />,
    title: "Codewars",
  },
  {
    icon: <CodepenIcon />,
    title: "Codepen",
  },
  {
    icon: <FreeCodeCampIcon />,
    title: "freeCodeCamp",
  },
  {
    icon: <GitlabIcon />,
    title: "GitLab",
  },
  {
    icon: <HashNodeIcon />,
    title: "Hashnode",
  },
  {
    icon: <StackOverflow />,
    title: "Stack Overflow",
  },
];

const AddLinkListItem = () => {
  const [PlatformIcon, setPlatformIcon] = useState(<GithubIcon />);
  const [platformTitle, setPlatformTitle] = useState("Github");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          <li key={item.title}>
            {item.icon}
            <p>{item.title}</p>
          </li>
        );
      })}
    </ul>
  );

  return (
    <li className={styles.item}>
      <div className={styles.top}>
        <button className={styles["btn-drag-and-drop"]}>
          <DragAndDropIcon />
          <p>Link #1</p>
        </button>
        <button className={styles["btn-remove"]}>Remove</button>
      </div>
      <div className={styles["drop-down-platform"]}>
        <label htmlFor="platform">Platform</label>
        <button onClick={openMenuListHandler} id={"platform"}>
          <div className={styles["menu-title"]}>
            {PlatformIcon}
            <p>{platformTitle}</p>
          </div>
          <DownArrowIcon />
        </button>
        {isMenuOpen ? menubar : null}
      </div>
    </li>
  );
};

export default AddLinkListItem;
