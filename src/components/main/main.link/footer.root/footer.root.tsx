import styles from "./footer.root.module.scss";
import FooterRootButton from "@/components/main/main.link/footer.root/fotter.root.button/footer.root.button";

const FooterRoot = () => {
  return (
    <div className={styles.footer}>
      <FooterRootButton />
    </div>
  );
};

export default FooterRoot;
