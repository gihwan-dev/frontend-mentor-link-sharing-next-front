"use client";

import Image from "next/image";
import styles from "./login.form.input.module.scss";
import { FocusEvent, useState } from "react";

const LoginFormInput: React.FC<{
  icon: string;
  placeholder: string;
  type: "email" | "password";
  label: string;
}> = ({ icon, placeholder, type, label }) => {
  const [isActive, setIsActive] = useState(false);

  const onFocusHandler = (event: FocusEvent<HTMLInputElement>) => {
    setIsActive(true);
  };

  const onBlurHandler = (event: FocusEvent<HTMLInputElement>) => {
    setIsActive(false);
  };

  const emailValidationHandler = (targetEmail: string) => {};

  const passwordValidationHandler = (targetPassword: string) => {};

  const validateInput = (targetString: string) => {
    switch (type) {
      case "email":
        emailValidationHandler(targetString);
        break;
      case "password":
        passwordValidationHandler(targetString);
        break;
    }
  };

  return (
    <div className={styles.container}>
      <label>{label}</label>
      <div
        className={`${styles["input-container"]} ${
          isActive ? styles.isActive : null
        }`}
      >
        <Image src={icon} alt={"icon"} />
        <input
          onBlur={onBlurHandler}
          onFocus={onFocusHandler}
          type={type}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default LoginFormInput;
