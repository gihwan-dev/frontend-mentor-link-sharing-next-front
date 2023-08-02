"use client";

import LoginFormInput from "@/components/login/form/input/login.form.input";
import emailIcon from "public/assets/images/icon-email.svg";
import password from "public/assets/images/icon-password.svg";
import LoginFormAuthTitle from "@/components/login/form/auth.title/login.form.auth.title";
import { FormEvent, useState } from "react";
import LoginFormButton from "@/components/login/form/button/login.form.button";
import AuthChange from "@/components/login/form/auth.change/auth.change";
import { isValidPassword } from "@/utilities/login/validation";
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import {
  clearValidationState,
  setConfirmPasswordValidation,
  setEmailValidation,
  setPasswordValidation,
} from "@/stores/formSlice";
import styles from "./login.form.module.scss";
import { SERVER_URL } from "@/const";
import { StatusCodes } from "http-status-codes";

const LoginForm = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);

  const [isValidForm, setIsValidForm] = useState(true);

  const [isLoading, setIsLoading] = useState(false);

  const [isCreated, setIsCreated] = useState(false);

  const validationState = useAppSelector(state => state.validation);

  const setCreateModeHandler = () => {
    validationDispatch(clearValidationState());
    setIsLoginMode(false);
  };

  const validationDispatch = useAppDispatch();

  const setLoginModeHandler = () => {
    validationDispatch(clearValidationState());
    setIsLoginMode(true);
  };

  const createSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    validationDispatch(clearValidationState());
    const form = event.currentTarget;
    const emailInputElement = form.elements[0] as HTMLInputElement;
    const passwordInputElement = form.elements[1] as HTMLInputElement;
    const confirmPasswordInputElement = form.elements[2] as HTMLInputElement;

    if (
      !emailInputElement.validity.valid ||
      emailInputElement.value.length === 0
    ) {
      validationDispatch(setEmailValidation(false));
      setIsValidForm(false);
    }

    if (!isValidPassword(passwordInputElement.value)) {
      validationDispatch(setPasswordValidation(false));
      setIsValidForm(false);
    }

    if (passwordInputElement.value !== confirmPasswordInputElement.value) {
      validationDispatch(setConfirmPasswordValidation(false));
      setIsValidForm(false);
    }

    if (!isValidForm) {
      return;
    }

    setIsValidForm(true);

    try {
      const response = await fetch(`${SERVER_URL}/auth`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: emailInputElement.value,
          password: passwordInputElement.value,
        }),
      });

      if (response.status === StatusCodes.CREATED) {
        // 성공 화면 보여주고 로그인 컴포넌트 띄워 줘야함.
        setIsLoading(false);
        setIsCreated(true);
        setTimeout(() => {
          setIsCreated(false);
          setIsLoginMode(true);
        }, 2000);
      }
      const data = (await response.json()) as { message: string };

      window.alert(data.message);
    } catch (e) {
      console.error(e);
    }
  };

  const loginSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    validationDispatch(clearValidationState());
    const form = event.currentTarget;
    const emailInputElement = form.elements[0] as HTMLInputElement;
    const passwordInputElement = form.elements[1] as HTMLInputElement;

    if (
      !emailInputElement.validity.valid ||
      emailInputElement.value.length === 0
    ) {
      validationDispatch(setEmailValidation(false));
      setIsValidForm(false);
    }

    if (!isValidPassword(passwordInputElement.value)) {
      validationDispatch(setPasswordValidation(false));
      setIsValidForm(false);
    }

    if (!isValidForm) {
      return;
    }

    setIsValidForm(true);

    // fetch 함수 작성 후 login 로직 작성.
    try {
      const response = await fetch(`${SERVER_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: emailInputElement.value,
          password: passwordInputElement.value,
        }),
      });
      if (response.status !== StatusCodes.ACCEPTED) {
        // 실패 로직 작성.
      }
      console.log(response);
    } catch (e) {}
  };

  if (isLoading) {
    return <div className={styles.loading}></div>;
  }

  if (isCreated) {
    return (
      <div className={styles.success}>
        <h1>Create successfully!</h1>
      </div>
    );
  }

  const loginModeContent = (
    <section key={"login"} className={`${styles.container} ${styles.login}`}>
      <header>
        <LoginFormAuthTitle
          title={"Login"}
          paragraph={"Add your details below to get back into the app."}
        />
      </header>
      <form onSubmit={loginSubmitHandler} noValidate={true}>
        <LoginFormInput
          icon={emailIcon}
          placeholder={"e.g alex@email.com"}
          type={"email"}
          label={"Email address"}
          isValidInput={validationState.email}
          errMsg={"Not valid email"}
        />
        <LoginFormInput
          icon={password}
          placeholder={"Enter your password"}
          type={"password"}
          label={"Enter your password"}
          isValidInput={validationState.password}
          errMsg={"Please check again"}
        />
        <LoginFormButton content="Login" />
        <AuthChange changeModeHandler={setCreateModeHandler} mode="login" />
      </form>
    </section>
  );

  const createModeContent = (
    <section key={"create"} className={`${styles.container} ${styles.create}`}>
      <header>
        <LoginFormAuthTitle
          title={"Create account"}
          paragraph={"Let's get you started sharing your links!"}
        />
      </header>
      <form onSubmit={createSubmitHandler} noValidate={true}>
        <LoginFormInput
          icon={emailIcon}
          placeholder={"e.g alex@email.com"}
          type={"email"}
          label={"Email address"}
          isValidInput={validationState.email}
          errMsg={"Can't be empty"}
        />
        <LoginFormInput
          icon={password}
          placeholder="At least 8 characters"
          type={"password"}
          label={"Create password"}
          isValidInput={validationState.password}
          errMsg={"Please check again"}
        />
        <LoginFormInput
          icon={password}
          placeholder={"At least 8 characters"}
          type={"password"}
          label={"Confirm password"}
          isValidInput={validationState.confirmPassword}
          errMsg={"Please confirm again"}
        />
        <p>please check at least 8 characters.</p>
        <LoginFormButton content="Create new account" />
        <AuthChange changeModeHandler={setLoginModeHandler} mode="create" />
      </form>
    </section>
  );

  return <>{isLoginMode ? loginModeContent : createModeContent}</>;
};

export default LoginForm;
