import styles from "./add.link.list.empty.module.scss";
import EmptyImage from "public/assets/images/illustration-empty.svg";
import EmptyImageSmall from "public/assets/images/illustration-empty-small.svg";

const AddLinkListEmpty = () => {
  return (
    <div className={styles.empty}>
      <EmptyImage className={styles.image} />
      <EmptyImageSmall className={styles.small} />
      <div className={styles["text-field"]}>
        <h2>{"Let's"} get you started</h2>
        <p>{`Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit them. We’re here to help you share your profiles with everyone!`}</p>
      </div>
    </div>
  );
};

export default AddLinkListEmpty;
