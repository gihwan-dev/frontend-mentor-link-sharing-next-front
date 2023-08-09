"use client";

import styles from "./footer.root.button.module.scss";
import { useAppSelector } from "@/stores/hooks";

const FooterRootButton = () => {
  const platforms = useAppSelector(state => state.platform.platforms);

  return (
    <button
      disabled={platforms.length === 0}
      className={`${styles.button} ${
        platforms.length === 0 ? styles["button-empty"] : ""
      }`}
    >
      save
    </button>
  );
};

export default FooterRootButton;
