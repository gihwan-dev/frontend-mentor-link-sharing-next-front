import styles from "./index.module.scss";
import PreviewBodyProfile from "@/components/preview/preview.body/preview.body.profile";
import PreviewBodyLink from "@/components/preview/preview.body/preview.body.link";
import React from "react";

const PreviewBody: React.FC<{
  id: string;
}> = ({ id }) => {
  return (
    <main className={styles.main}>
      <PreviewBodyProfile id={id} />
      <PreviewBodyLink id={id} />
    </main>
  );
};

export default PreviewBody;
