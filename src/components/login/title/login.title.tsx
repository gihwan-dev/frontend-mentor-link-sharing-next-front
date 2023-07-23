import Image from "next/image";
import logo from "public/assets/images/logo-devlinks-large.svg";
import styles from "./login.title.module.scss";

const LoginTitle = () => {
  return (
    <section className={styles.image}>
      <Image src={logo} alt={"logo with name"} />
    </section>
  );
};

export default LoginTitle;
