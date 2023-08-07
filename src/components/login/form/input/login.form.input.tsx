"use client";

import styles from "./login.form.input.module.scss";
import React, { FocusEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import {
  setConfirmPasswordValidation,
  setEmailValidation,
  setPasswordValidation,
} from "@/stores/formSlice";

const LoginFormInput: React.FC<{
  icon: React.FC;
  placeholder: string;
  type: "email" | "password";
  label: string;
  isValidInput: boolean;
  errMsg: string;
}> = ({ icon, placeholder, type, label, isValidInput, errMsg }) => {
  const [isActive, setIsActive] = useState(false);

  const [enteredInput, setEnteredInput] = useState("");

  const validationDispatch = useDispatch();

  const Icon = icon;

  const inputChangeHandler = (event: FormEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setEnteredInput(value);
  };

  const onFocusHandler = (event: FocusEvent<HTMLInputElement>) => {
    if (!isValidInput) {
      switch (type) {
        case "email":
          validationDispatch(setEmailValidation(true));
          break;
        case "password":
          validationDispatch(setPasswordValidation(true));
          validationDispatch(setConfirmPasswordValidation(true));
          break;
      }
    }
    setIsActive(true);
  };

  const onBlurHandler = (event: FocusEvent<HTMLInputElement>) => {
    setIsActive(false);
  };

  const validInput = (
    <div className={styles.container}>
      <label>{label}</label>
      <div
        className={`${styles["input-container"]} ${
          isActive ? styles.isActive : null
        }`}
      >
        <Icon />
        <input
          value={enteredInput}
          onChange={inputChangeHandler}
          onBlur={onBlurHandler}
          onFocus={onFocusHandler}
          type={type}
          placeholder={placeholder}
        />
      </div>
    </div>
  );

  const invalidInput = (
    <div className={styles["container-error"]}>
      <label>{label}</label>
      <div className={styles["input-container"]}>
        <Icon />
        <input
          value={enteredInput}
          onChange={inputChangeHandler}
          onBlur={onBlurHandler}
          onFocus={onFocusHandler}
          type={type}
          placeholder={placeholder}
        />
        <p>{errMsg}</p>
      </div>
    </div>
  );

  return <>{isValidInput ? validInput : invalidInput}</>;
};

export default LoginFormInput;
