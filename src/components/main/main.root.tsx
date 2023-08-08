import styles from "./main.root.module.scss";
import LinksImageView from "@/components/main/main.link/image.view/links.image.view";
import AddLinkRoot from "@/components/main/main.link/add.link.root/add.link.root";
import FooterRoot from "@/components/main/main.link/footer.root/footer.root";

const MainRoot = () => {
  return (
    <section className={styles.main}>
      <LinksImageView />
      <div className={styles.right}>
        <AddLinkRoot />
        <hr />
        <FooterRoot />
      </div>
    </section>
  );
};

export default MainRoot;
