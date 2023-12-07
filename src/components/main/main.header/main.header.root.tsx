"use client";

import styles from "./main.header.root.module.scss";
import HeaderImage from "@/components/main/main.header/header.image";
import HeaderNav from "@/components/main/main.header/header.nav";
import {useEffect, useState} from "react";
import {authFetcher} from "@/utilities/auth/fetch-auth";
import {useRouter} from "next/navigation";
import HeaderPreview from "@/components/main/main.header/header.preview";
import SignoutButton from "@/components/main/main.header/header.signout/SignoutButton";

const MainHeaderRoot = () => {
  // get 요청 보내서 유저 확인
  const [username, setUsername] = useState("");
  const router = useRouter();

  useEffect(() => {
    authFetcher()
      .then(result => {
        if (result.id === undefined) {
          router.push("/login");
          return;
        }
        setUsername(result.id);
      })
      .catch(error => {
        window.alert(
          error.message ?? "오류가 발생했습니다. 다시시도해 주세요.",
        );
        router.push("/login");
      });
  }, []);

  return (
    <nav className={styles.nav}>
      <HeaderImage />
      <HeaderNav />
      <div className={styles["button-list"]}>
          <SignoutButton />
          <HeaderPreview id={username} />
      </div>
    </nav>
  );
};

export default MainHeaderRoot;
