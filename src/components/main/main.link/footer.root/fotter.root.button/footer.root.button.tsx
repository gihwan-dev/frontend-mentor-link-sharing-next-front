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
import React, { useState } from "react";
import { setLinkValidation } from "@/stores/platform.slice";
import { postPlatform } from "@/utilities/platforms/fetch";
import {
  updateUser,
  UpdateUserInterface,
  uploadImage,
} from "@/utilities/user/fetch";
import { motion } from "framer-motion";
import { alertVariants } from "@/styles/animation.variants";

const FooterRootButton = () => {
  const platforms = useAppSelector(state => state.platform.platforms);
  const user = useAppSelector(state => state.user);

  const [isValidForm, setIsValidForm] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccessful] = useState(false);
  const [isError, setIsError] = useState(false);

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
        username: user.firstName + " " + user.lastName,
        email: user.email,
      };

      setIsLoading(true);

      const platformResponse = await postPlatform(platforms);
      const updateUserResponse = await updateUser(userInterface);
      const uploadImageResponse = await uploadImage(user.image);

      if (!platformResponse && !updateUserResponse && !uploadImageResponse) {
        throw new Error();
      }

      setIsLoading(false);
      setIsSuccessful(true);
      setTimeout(() => {
        setIsSuccessful(false);
      }, 2000);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      setTimeout(() => {
        setIsError(false);
      }, 2000);
    }
  };

  return (
    <React.Fragment>
      {isLoading ? (
        <div className={`${styles.loading} ${styles.alert}`}></div>
      ) : null}
      {isSuccess ? (
        <motion.div
          initial={"hidden"}
          animate={"show"}
          variants={alertVariants()}
          className={`${styles.complete} ${styles.alert}`}
        >
          Saved!
        </motion.div>
      ) : null}
      {isError ? (
        <motion.div
          initial={"hidden"}
          animate={"show"}
          variants={alertVariants()}
          className={`${styles.error} ${styles.alert}`}
        >
          Try again...
        </motion.div>
      ) : null}
      <button
        onClick={onSubmitHandler}
        disabled={platforms.length === 0}
        className={`${styles.button} ${
          platforms.length === 0 ? styles["button-empty"] : ""
        }`}
      >
        save
      </button>
    </React.Fragment>
  );
};

export default FooterRootButton;
