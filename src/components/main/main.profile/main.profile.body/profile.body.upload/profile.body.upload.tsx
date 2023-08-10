import styles from "./profile.body.upload.module.scss";
import BodyUploadTitle from "@/components/main/main.profile/main.profile.body/profile.body.upload/body.upload.title/body.upload.title";
import BodyUploadInput from "@/components/main/main.profile/main.profile.body/profile.body.upload/body.upload.input/body.upload.input";
import BodyUploadText from "@/components/main/main.profile/main.profile.body/profile.body.upload/body.upload.text/body.upload.text";

const ProfileBodyUpload = () => {
  return (
    <div className={styles.upload}>
      <BodyUploadTitle />
      <div className={styles.main}>
        <BodyUploadInput />
        <BodyUploadText />
      </div>
    </div>
  );
};

export default ProfileBodyUpload;
