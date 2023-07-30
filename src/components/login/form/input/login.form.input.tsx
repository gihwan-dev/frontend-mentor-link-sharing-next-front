"use client";

import Image from "next/image";
import styles from "./login.form.input.module.scss";
import { FocusEvent, FormEvent, useState } from "react";

const LoginFormInput: React.FC<{
  icon: string;
  placeholder: string;
  type: "email" | "password";
  label: string;
}> = ({ icon, placeholder, type, label }) => {
  const [isActive, setIsActive] = useState(false);

  const [enteredInput, setEnteredInput] = useState("");

  const inputChangeHandler = (event: FormEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setEnteredInput(value);
  };

  const onFocusHandler = (event: FocusEvent<HTMLInputElement>) => {
    setIsActive(true);
  };

  const onBlurHandler = (event: FocusEvent<HTMLInputElement>) => {
    setIsActive(false);
  };

  // 아래 코드들 redux로 대체 예정.
  // const emailValidationHandler = (targetEmail: string) => {};
  //
  // const passwordValidationHandler = (targetPassword: string) => {};
  //
  // const validateInput = (targetString: string) => {
  //   switch (type) {
  //     case "email":
  //       emailValidationHandler(targetString);
  //       break;
  //     case "password":
  //       passwordValidationHandler(targetString);
  //       break;
  //   }
  // };

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
          onChange={inputChangeHandler}
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
