import React from "react";
import styles from "./layout.module.scss";
import MainHeaderRoot from "@/components/main/main.header/main.header.root";

const MainLayout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <div className={styles.container}>
      <header>
        <MainHeaderRoot />
      </header>
      {children}
    </div>
  );
};

export default MainLayout;
