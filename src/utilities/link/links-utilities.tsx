import GithubIcon from "../../../public/assets/images/icon-github.svg";
import FrontendMentorIcon from "../../../public/assets/images/icon-frontend-mentor.svg";
import TwitterIcon from "../../../public/assets/images/icon-twitter.svg";
import LinkedInIcon from "../../../public/assets/images/icon-linkedin.svg";
import YouTubeIcon from "../../../public/assets/images/icon-youtube.svg";
import FacebookIcon from "../../../public/assets/images/icon-facebook.svg";
import DevToIcon from "../../../public/assets/images/icon-devto.svg";
import CodeWarsIcon from "../../../public/assets/images/icon-codewars.svg";
import CodepenIcon from "../../../public/assets/images/icon-codepen.svg";
import FreeCodeCampIcon from "../../../public/assets/images/icon-freecodecamp.svg";
import GitlabIcon from "../../../public/assets/images/icon-gitlab.svg";
import HashNodeIcon from "../../../public/assets/images/icon-hashnode.svg";
import StackOverflow from "../../../public/assets/images/icon-stack-overflow.svg";
import TwitchIcon from "../../../public/assets/images/icon-twitch.svg";
import React from "react";

interface DropdownMenu {
  icon: React.ReactNode;
  title: string;
}

export const renderIcon = (name: string) => {
  switch (name) {
    case "Github":
      return <GithubIcon />;
    case "Frontend Mentor":
      return <FrontendMentorIcon />;
    case "Twitter":
      return <TwitterIcon />;
    case "LinkedIn":
      return <LinkedInIcon />;
    case "YouTube":
      return <YouTubeIcon />;
    case "Facebook":
      return <FacebookIcon />;
    case "Twitch":
      return <TwitchIcon />;
    case "Dev.to":
      return <DevToIcon />;
    case "Codewars":
      return <CodeWarsIcon />;
    case "Codepen":
      return <CodepenIcon />;
    case "freeCodeCamp":
      return <FreeCodeCampIcon />;
    case "GitLab":
      return <GitlabIcon />;
    case "Hashnode":
      return <HashNodeIcon />;
    case "Stack Overflow":
      return <StackOverflow />;
    default:
      return <GithubIcon />;
  }
};

interface listColorInterface {
  color: string;
  backgroundColor: string;
  border?: string;
}

export const listColorSelector = (name: string): listColorInterface => {
  switch (name) {
    case "Github":
      return {
        color: "white",
        backgroundColor: "rgba(26, 26, 26, 1)",
      };
    case "Frontend Mentor":
      return {
        color: "rgba(51, 51, 51, 1)",
        backgroundColor: "white",
        border: "1px solid #D9D9D9",
      };
    case "Twitter":
      return {
        color: "white",
        backgroundColor: "rgba(67, 183, 233, 1)",
      };
    case "LinkedIn":
      return {
        color: "white",
        backgroundColor: "rgba(45, 104, 255, 1)",
      };
    case "YouTube":
      return {
        color: "white",
        backgroundColor: "rgba(238, 57, 57, 1)",
      };
    case "Facebook":
      return {
        color: "white",
        backgroundColor: "rgba(36, 66, 172, 1)",
      };
    case "Twitch":
      return {
        color: "white",
        backgroundColor: "rgba(238, 63, 200, 1)",
      };
    case "Dev.to":
      return {
        color: "white",
        backgroundColor: "rgba(51, 51, 51, 1)",
      };
    case "Codewars":
      return {
        color: "white",
        backgroundColor: "rgba(138, 26, 80, 1)",
      };
    case "Codepen":
      return {
        color: "white",
        backgroundColor: "rgba(21, 54, 92, 1)",
      };
    case "freeCodeCamp":
      return {
        color: "white",
        backgroundColor: "rgba(48, 34, 103, 1)",
      };
    case "GitLab":
      return {
        color: "white",
        backgroundColor: "rgba(235, 73, 37, 1)",
      };
    case "Hashnode":
      return {
        color: "white",
        backgroundColor: "rgba(3, 48, 209, 1)",
      };
    case "Stack Overflow":
      return {
        color: "white",
        backgroundColor: "rgba(236, 113, 0, 1)",
      };
    default:
      return {
        color: "white",
        backgroundColor: "black",
      };
  }
};

export const MenuList: DropdownMenu[] = [
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
