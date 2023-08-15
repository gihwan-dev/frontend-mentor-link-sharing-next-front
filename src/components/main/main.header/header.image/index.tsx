import Logo from "public/assets/images/logo-devlinks-large.svg";
import SmallLogo from "public/assets/images/logo-devlinks-small.svg";
import styles from "./index.module.scss";

const HeaderImage = () => {
  return (
    <div className={styles.container}>
      <SmallLogo className={styles.small} />
      <Logo className={styles.large} />
    </div>
  );
};

export default HeaderImage;
