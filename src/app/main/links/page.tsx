import { cookies } from "next/headers";
import styles from "./page.module.scss";
import Link from "next/link";
import MainRoot from "@/components/main/main.root";

const EditPage = () => {
  const cookieStore = cookies();
  const userCookie = cookieStore.get("frontend-mentor-link-sharing")?.value;

  let content = <MainRoot />;

  if (!userCookie) {
    content = (
      <div className={styles["container-fail"]}>
        <h1>로그인을 시도해 주세요.</h1>
        <Link href={"/login"}>로그인 페이지로 이동하기</Link>
      </div>
    );
  }
  return <>{content}</>;
};
export default EditPage;
