import Logo from "public/assets/images/logo-devlinks-large.svg";
import styles from "./login.title.module.scss";

const LoginTitle = () => {
  return (
    <section className={styles.image}>
      <Logo />
    </section>
  );
};

export default LoginTitle;
