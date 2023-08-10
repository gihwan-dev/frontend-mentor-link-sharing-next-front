import styles from "./main.profile.body.module.scss";
import ProfileBodyUpload from "@/components/main/main.profile/main.profile.body/profile.body.upload/profile.body.upload";
import ProfileBodyInfo from "@/components/main/main.profile/main.profile.body/profile.body.info/profile.body.info";

const MainProfileBody = () => {
  return (
    <section className={styles.body}>
      <ProfileBodyUpload />
      <ProfileBodyInfo />
    </section>
  );
};

export default MainProfileBody;
