import styles from "./add.link.root.module.scss";
import AddLinkTitle from "@/components/main/main.link/add.link.root/addlink.title/addlink.title";
import AddLinkButton from "@/components/main/main.link/add.link.root/add.link.button/add.link.button";
import AddLinkList from "@/components/main/main.link/add.link.root/add.link.list/add.link.list";

const AddLinkRoot = () => {
  return (
    <div className={styles.container}>
      <AddLinkTitle />
      <div className={styles.list}>
        <AddLinkButton />
        <AddLinkList />
      </div>
    </div>
  );
};

export default AddLinkRoot;
