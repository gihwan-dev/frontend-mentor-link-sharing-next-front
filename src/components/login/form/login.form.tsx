"use client";

import LoginFormInput from "@/components/login/form/input/login.form.input";
import EmailIcon from "public/assets/images/icon-email.svg";
import PasswordIcon from "public/assets/images/icon-password.svg";
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
import { useRouter } from "next/navigation";
import Cookies from "universal-cookie";

const LoginForm = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);

  const [isValidForm, setIsValidForm] = useState(true);

  const [isLoading, setIsLoading] = useState(false);

  const [isSuccessful, setIsSuccessful] = useState(false);

  const [successMsg, setSuccessMsg] = useState("");

  const [isLoginFailed, setIsLoginFailed] = useState(false);

  const validationState = useAppSelector(state => state.validation);

  const [failedMsg, setFailedMsg] = useState("");

  const router = useRouter();

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
      const response = await fetch(`${SERVER_URL}/user`, {
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
        const data = (await response.json()) as { message: string };
        setSuccessMsg(data.message);
        setIsLoading(false);
        setIsSuccessful(true);
        setTimeout(() => {
          setIsSuccessful(false);
          setIsLoginMode(true);
        }, 2000);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const loginSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
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
      const response = await fetch(`${SERVER_URL}/auth`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          email: emailInputElement.value,
          password: passwordInputElement.value,
        }),
      });
      if (response.status !== StatusCodes.ACCEPTED) {
        // 실패 로직 작성.
        const failedData = await response.json();
        validationDispatch(setEmailValidation(false));
        validationDispatch(setPasswordValidation(false));
        setFailedMsg(
          failedData?.message ?? "로그인에 실패했습니다. 다시시도해 주세요.",
        );
        setTimeout(() => {
          setIsLoading(false);
          setIsLoginFailed(true);
          setTimeout(() => {
            setIsLoginFailed(false);
          }, 2000);
        }, 2000);
      }
      const data = (await response.json()) as {
        message: string;
        token: string;
      };
      const cookies = new Cookies();
      cookies.set("frontend-mentor-link-sharing", data.token, {
        sameSite: "none",
        maxAge: 60 * 60 * 1000,
        httpOnly: true,
        path: "/",
        secure: true,
        domain: ".frontend-mentor-link-sharing-nest-server.vercel.app",
      });
      setSuccessMsg(data.message);
      setTimeout(() => {
        setIsLoading(false);
        setIsSuccessful(true);
        setTimeout(() => {
          setIsSuccessful(true);
          setTimeout(() => {
            // 리디렉션
            router.push("/main/links");
          }, 1500);
        }, 2000);
      }, 2000);
    } catch (e) {}
  };

  if (isLoading) {
    return <div className={styles.loading}></div>;
  }

  if (isSuccessful) {
    return (
      <div className={styles.success}>
        <h1>{successMsg}</h1>
      </div>
    );
  }

  if (isLoginFailed) {
    return (
      <div className={styles.failed}>
        <h1>{failedMsg}</h1>
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
          icon={EmailIcon}
          placeholder={"e.g alex@email.com"}
          type={"email"}
          label={"Email address"}
          isValidInput={validationState.email}
          errMsg={"Not valid email"}
        />
        <LoginFormInput
          icon={PasswordIcon}
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
          icon={EmailIcon}
          placeholder={"e.g alex@email.com"}
          type={"email"}
          label={"Email address"}
          isValidInput={validationState.email}
          errMsg={"Can't be empty"}
        />
        <LoginFormInput
          icon={PasswordIcon}
          placeholder="At least 8 characters"
          type={"password"}
          label={"Create password"}
          isValidInput={validationState.password}
          errMsg={"Please check again"}
        />
        <LoginFormInput
          icon={PasswordIcon}
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
