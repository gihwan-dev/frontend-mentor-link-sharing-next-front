import styles from "./auth.change.module.scss";

const AuthChange: React.FC<{
  mode: "login" | "create";
  changeModeHandler: () => void;
}> = ({ mode, changeModeHandler }) => {
  let content;
  switch (mode) {
    case "login":
      content = (
        <div className={styles.container}>
          <p>{"Don't have an account?"}</p>
          <button type={"button"} onClick={changeModeHandler}>
            Create account
          </button>
        </div>
      );
      break;
    case "create":
      content = (
        <div className={styles.container}>
          <p>Already have an account?</p>
          <button type={"button"} onClick={changeModeHandler}>
            Login
          </button>
        </div>
      );
  }
  return content;
};

export default AuthChange;
