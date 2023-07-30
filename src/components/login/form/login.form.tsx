"use client";

import LoginFormInput from "@/components/login/form/input/login.form.input";
import emailIcon from "public/assets/images/icon-email.svg";
import password from "public/assets/images/icon-password.svg";
import LoginFormAuthTitle from "@/components/login/form/auth.title/login.form.auth.title";
import { useState } from "react";
import LoginFormButton from "@/components/login/form/button/login.form.button";

import styles from "./login.form.module.scss";
import AuthChange from "@/components/login/form/auth.change/auth.change";

const LoginForm = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);

  const createSubmitHandler = () => {};

  const loginSubmitHandler = () => {};

  return (
    <section className={styles.container}>
      <header>
        <LoginFormAuthTitle
          title={"Login"}
          paragraph={"Add your details below to get back into the app."}
        />
      </header>
      <form onSubmit={isLoginMode ? loginSubmitHandler : createSubmitHandler}>
        <LoginFormInput
          icon={emailIcon}
          placeholder={"e.g alex@email.com"}
          type={"email"}
          label={"Email address"}
        />
        <LoginFormInput
          icon={password}
          placeholder={
            isLoginMode ? "Enter your password" : "At least 8 characters"
          }
          type={"password"}
          label={"Create password"}
        />
        {isLoginMode ? null : (
          <LoginFormInput
            icon={password}
            placeholder={"At least 8 characters"}
            type={"password"}
            label={"Confirm password"}
          />
        )}
        <LoginFormButton
          content={isLoginMode ? "Login" : "Create new account"}
        />
        <AuthChange mode={isLoginMode ? "login" : "create"} />
      </form>
    </section>
  );
};

export default LoginForm;
