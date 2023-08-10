import styles from "./body.upload.text.module.scss";

const BodyUploadText = () => {
  return (
    <div className={styles.text}>
      <p>
        Image must be below 1024x1024xpx.
        <br />
        Use PNG or JPG format.
      </p>
    </div>
  );
};

export default BodyUploadText;
