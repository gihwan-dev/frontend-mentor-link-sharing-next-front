import Image from "next/image";
import styles from "./login.form.input.module.scss";

const LoginFormInput: React.FC<{
  icon: string;
  placeholder: string;
  type: "email" | "password";
  label: string;
}> = ({ icon, placeholder, type, label }) => {
  return (
    <div className={styles.container}>
      <label>{label}</label>
      <div className={styles["input-container"]}>
        <Image src={icon} alt={"icon"} />
        <input type={type} placeholder={placeholder} />
      </div>
    </div>
  );
};

export default LoginFormInput;
