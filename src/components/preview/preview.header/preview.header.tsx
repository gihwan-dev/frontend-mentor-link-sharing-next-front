import styles from "./preview.header.module.scss";
import HeaderBackButton from "@/components/preview/preview.header/header.back.button/header.back.button";
import HeaderShareButton from "@/components/preview/preview.header/header.share.button";
import React from "react";

const PreviewHeader = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <HeaderBackButton />
        <HeaderShareButton />
      </nav>
    </header>
  );
};

export default PreviewHeader;
