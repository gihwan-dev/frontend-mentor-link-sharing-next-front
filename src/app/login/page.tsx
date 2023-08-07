import LoginTitle from "@/components/login/title/login.title";
import LoginForm from "@/components/login/form/login.form";
import styles from "./page.module.scss";

const LoginPage = () => {
  return (
    <main className={styles.main}>
      <LoginTitle />
      <LoginForm />
    </main>
  );
};

export default LoginPage;
