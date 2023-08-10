"use client";
import styles from "./body.info.input.module.scss";

const BodyInfoInput: React.FC<{
  type: "First name" | "Last name" | "Email";
  isEssential: boolean;
}> = ({ type, isEssential }) => {
  const getPlaceHolder = (enteredType: string) => {
    switch (enteredType) {
      case "First name":
        return "e.g. John";
      case "Last name":
        return "e.g. Appleseed";
      case "Email":
        return "e.g. email@example.com";
    }
  };

  return (
    <div className={styles.container}>
      <label>{type + (isEssential ? "*" : "")}</label>
      <input className={styles.input} placeholder={getPlaceHolder(type)} />
    </div>
  );
};

export default BodyInfoInput;
