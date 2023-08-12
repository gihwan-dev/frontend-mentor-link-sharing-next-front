"use client";
import styles from "./body.info.input.module.scss";
import { ChangeEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import {
  setEmail,
  setFirstName,
  setFirstNameValidate,
  setLastName,
  setLastNameValidate,
} from "@/stores/user-info.slice";

const BodyInfoInput: React.FC<{
  type: "First name" | "Last name" | "Email";
  isEssential: boolean;
}> = ({ type, isEssential }) => {
  const [isFocus, setIsFocus] = useState(false);

  const user = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();

  const getPlaceHolder = (enteredType: string) => {
    switch (enteredType) {
      case "First name":
        return "e.g. John";
      case "Last name":
        return "e.g. Appleseed";
      case "Email":
        return "e.g. email@example.com";
    }
  };
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;

    switch (type) {
      case "First name":
        dispatch(setFirstName(value));
        dispatch(setFirstNameValidate(true));
        break;
      case "Last name":
        dispatch(setLastNameValidate(true));
        dispatch(setLastName(value));
        break;
      case "Email":
        dispatch(setEmail(value));
        break;
    }
  };

  const returnValueHandler = () => {
    switch (type) {
      case "Email":
        return user.email;
      case "First name":
        return user.firstName;
      case "Last name":
        return user.lastName;
    }
  };

  const returnValidationHandler = () => {
    switch (type) {
      case "First name":
        return user.firstNameValidation;
      case "Last name":
        return user.lastNameValidation;
      case "Email":
        return true;
    }
  };

  const onFocusHandler = () => {
    setIsFocus(true);
  };

  const onBlurHandler = () => {
    setIsFocus(false);
  };

  return (
    <div className={styles.container}>
      <label>{type + (isEssential ? "*" : "")}</label>
      <input
        value={returnValueHandler() ?? ""}
        className={`${styles.input} ${
          isFocus
            ? styles.isFocus
            : returnValidationHandler()
            ? ""
            : styles.inValidInput
        }`}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
        placeholder={getPlaceHolder(type)}
        onChange={onChangeHandler}
      ></input>
      {returnValidationHandler() ? (
        ""
      ) : (
        <p className={styles.inValidMsg}>Can not be empty.</p>
      )}
    </div>
  );
};

export default BodyInfoInput;
