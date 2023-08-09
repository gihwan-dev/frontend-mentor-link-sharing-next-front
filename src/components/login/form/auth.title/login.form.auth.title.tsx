import styles from "./login.form.auth.title.module.scss";

const LoginFormAuthTitle: React.FC<{
  title: string;
  paragraph: string;
}> = ({ title, paragraph }) => {
  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <p>{paragraph}</p>
    </div>
  );
};

export default LoginFormAuthTitle;
