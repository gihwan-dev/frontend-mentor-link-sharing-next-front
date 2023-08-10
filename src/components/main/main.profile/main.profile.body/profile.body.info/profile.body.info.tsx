import styles from "./profile.body.info.module.scss";
import BodyInfoInput from "@/components/main/main.profile/main.profile.body/profile.body.info/body.info.input/body.info.input";

interface infoTypeInterface {
  type: "First name" | "Last name" | "Email";
  isEssential: boolean;
}

const INFOTYPE: infoTypeInterface[] = [
  {
    type: "First name",
    isEssential: true,
  },
  { type: "Last name", isEssential: true },
  { type: "Email", isEssential: false },
];

const ProfileBodyInfo = () => {
  return (
    <div className={styles.info}>
      {INFOTYPE.map(item => {
        return (
          <BodyInfoInput
            key={Math.random().toString().slice(2)}
            type={item.type}
            isEssential={item.isEssential}
          />
        );
      })}
    </div>
  );
};

export default ProfileBodyInfo;
