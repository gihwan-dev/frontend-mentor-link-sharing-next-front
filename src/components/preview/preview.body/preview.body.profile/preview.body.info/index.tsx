import styles from "./index.module.scss";
import React from "react";
import { sql } from "@vercel/postgres";

interface User {
  username: string;
  email: string;
}

const PreviewBodyInfo: React.FC<{
  id: string;
}> = async ({ id }) => {
  try {
    const { rows } =
      await sql`SELECT username, email FROM users WHERE User_id=${id}`;

    const user = rows[0] as User;

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
        <h1>{user.username}</h1>
        <h2>{user.email}</h2>
      </div>
    );
  } catch (error) {
    return (
      <div className={styles.container}>
        <h1>에러가 발생했습니다.</h1>
        <h2>새로고침을 시도해 주세요.</h2>
      </div>
    );
  }
};

export default PreviewBodyInfo;
