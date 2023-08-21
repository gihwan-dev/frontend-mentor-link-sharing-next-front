"use client";

import { useRouter } from "next/navigation";
import styles from "./header.back.button.module.scss";

const HeaderBackButton = () => {
  const router = useRouter();

  const backToEditorHandler = () => {
    router.push("/main/links");
  };

  return (
    <button className={styles.btn} onClick={backToEditorHandler}>
      Back to Editor
    </button>
  );
};

export default HeaderBackButton;
