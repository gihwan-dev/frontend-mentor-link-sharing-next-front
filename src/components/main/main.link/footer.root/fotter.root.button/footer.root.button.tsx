"use client";

import styles from "./footer.root.button.module.scss";
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import {
  isValidFirstName,
  isValidLastName,
} from "@/utilities/login/validation";
import {
  setFirstNameValidate,
  setLastNameValidate,
} from "@/stores/user-info.slice";
import { useState } from "react";
import { setLinkValidation } from "@/stores/platform.slice";
import { postPlatform } from "@/utilities/platforms/fetch";
import { updateUser, UpdateUserInterface } from "@/utilities/user/fetch";

const FooterRootButton = () => {
  const platforms = useAppSelector(state => state.platform.platforms);
  const user = useAppSelector(state => state.user);

  const [isValidForm, setIsValidForm] = useState(false);

  const dispatch = useAppDispatch();

  const checkValidationHandler = () => {
    if (!user.firstName || !isValidFirstName(user.firstName)) {
      setIsValidForm(false);
      dispatch(setFirstNameValidate(false));
    }

    if (!user.lastName || !isValidLastName(user.lastName)) {
      setIsValidForm(false);
      dispatch(setLastNameValidate(false));
    }

    platforms.forEach((item, index) => {
      if (item.link.trim().length === 0) {
        setIsValidForm(false);
        dispatch(setLinkValidation({ index, validation: false }));
      }
    });
    setIsValidForm(true);
  };

  const onSubmitHandler = async () => {
    checkValidationHandler();

    if (!isValidForm) {
      return;
    }

    try {
      const userInterface: UpdateUserInterface = {
        image: user.image,
        username: user.firstName + " " + user.lastName,
        email: user.email,
      };

      const platformResponse = await postPlatform(platforms);
      const updateUserResponse = await updateUser(userInterface);
    } catch (error) {}
  };

  return (
    <button
      onClick={onSubmitHandler}
      disabled={platforms.length === 0}
      className={`${styles.button} ${
        platforms.length === 0 ? styles["button-empty"] : ""
      }`}
    >
      save
    </button>
  );
};

export default FooterRootButton;
