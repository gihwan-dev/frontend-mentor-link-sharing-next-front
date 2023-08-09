import React from "react";
import styles from "./layout.module.scss";
import MainHeaderRoot from "@/components/main/main.header/main.header.root";
import LinksImageView from "@/components/main/main.link/image.view/links.image.view";
import FooterRoot from "@/components/main/main.link/footer.root/footer.root";

const MainLayout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <div className={styles.container}>
      <header>
        <MainHeaderRoot />
      </header>
      <section className={styles.main}>
        <LinksImageView />
        <div className={styles.right}>
          {children}
          <hr />
          <FooterRoot />
        </div>
      </section>
    </div>
  );
};

export default MainLayout;
