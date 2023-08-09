import styles from "./login.form.button.module.scss";

const LoginFormButton: React.FC<{
  content: string;
}> = ({ content }) => {
  return (
    <button className={styles.btn} type="submit">
      {content}
    </button>
  );
};

export default LoginFormButton;
