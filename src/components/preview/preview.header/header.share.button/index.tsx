"use client";

import { useAppSelector } from "@/stores/hooks";
import styles from "./index.module.scss";
import React, { useState } from "react";
import { motion } from "framer-motion";

const HeaderShareButton = () => {
  const platforms = useAppSelector(state => state.platform.platforms);

  const [showAlert, setShowAlert] = useState(false);

  const shareLinkHandler = () => {
    // 클릭시 링크 공유 기능. 복사하기 기능이 실행 되어야함.
    const content = platforms.reduce((acc, cur) => {
      return acc + `${cur.title}: ${cur.link}\n`;
    }, "");
    navigator.clipboard.writeText(content);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  return (
    <React.Fragment>
      <button onClick={shareLinkHandler} className={styles.btn}>
        Share Link
      </button>
      {showAlert ? (
        <div className={styles.tooltip}>
          <p>클립보드에 저장되었습니다 </p>
        </div>
      ) : null}
    </React.Fragment>
  );
};

export default HeaderShareButton;
