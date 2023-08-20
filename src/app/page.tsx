"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { authFetcher, AuthFetchStatus } from "@/utilities/auth/fetch-auth";
import styles from "./page.module.scss";

export default function Home() {
  const [fetchState, setFetchState] = useState<AuthFetchStatus>("LOADING");
  const router = useRouter();

  useEffect(() => {
    authFetcher().then(res => {
      switch (res.status) {
        case "ACCEPTED":
          setTimeout(() => {
            setFetchState("SUCCESS");
          }, 4000);
          break;
        case "FAILED":
          setTimeout(() => {
            setFetchState("ERROR");
          }, 4000);
          break;
      }
    });
  }, []);

  useEffect(() => {
    if (fetchState === "ERROR") {
      router.push("/login");
    }

    if (fetchState === "SUCCESS") {
      router.push("/main/links");
    }
  }, [fetchState, router]);

  if (fetchState === "LOADING") {
    return (
      <main className={styles.greeting}>
        <h1>Welcome.</h1>
      </main>
    );
  }

  if (fetchState === "SUCCESS" || fetchState === "ERROR") {
    return null;
  }

  return <div>알 수 없는 오류 입니다. 새로고침을 통해 다시 시도해 주세요.</div>;
}
