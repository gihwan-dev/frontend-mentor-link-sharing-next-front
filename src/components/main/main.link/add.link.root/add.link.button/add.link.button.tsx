"use client";

import styles from "./add.link.button.module.scss";
import { useAppDispatch } from "@/stores/hooks";
import { addPlatform } from "@/stores/platform.slice";

const AddLinkButton = () => {
  const platformDispatch = useAppDispatch();
  return (
    <button
      type="button"
      onClick={() => {
        platformDispatch(addPlatform());
      }}
      className={styles.button}
    >
      + Add new link
    </button>
  );
};

export default AddLinkButton;
