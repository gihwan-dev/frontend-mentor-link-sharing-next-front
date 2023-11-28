"use client";

import styles from "./index.module.scss";
import React from "react";
import {useGetUserProfile} from "@/utilities/user/react-query";

interface User {
  username: string;
  email: string;
}

const PreviewBodyInfo: React.FC<{
  id: string;
}> = ({ id }) => {
    const {data: user, isLoading, error} = useGetUserProfile();

    if (isLoading || error) {
        return null;
    }

    if (!user) {
      return (
        <div className={styles.container}>
          <h1>유저 정보를 찾을 수 없습니다.</h1>
          <h2>다시 시도해 주세요.</h2>
        </div>
      );
    }

    return (
      <div className={styles.container}>
        <h1>{user.firstName + " " + user.lastName}</h1>
        <h2>{user.email}</h2>
      </div>
    );
};

export default PreviewBodyInfo;
