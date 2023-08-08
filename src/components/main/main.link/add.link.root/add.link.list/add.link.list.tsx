import AddLinkListItem from "@/components/main/main.link/add.link.root/add.link.list/add.link.list.item/addLinkListItem";
import styles from "./add.link.list.module.scss";

const AddLinkList = () => {
  return (
    <ul className={styles.container}>
      <AddLinkListItem />
    </ul>
  );
};

export default AddLinkList;
