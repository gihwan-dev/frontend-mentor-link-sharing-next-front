import styles from "./main.profile.module.scss";
import MainProfileTitle from "@/components/main/main.profile/main.profile.title/main.profile.title";
import MainProfileBody from "@/components/main/main.profile/main.profile.body/main.profile.body";

const MainProfile = () => {
  return (
    <section className={styles.main}>
      <MainProfileTitle />
      <MainProfileBody />
    </section>
  );
};

export default MainProfile;
