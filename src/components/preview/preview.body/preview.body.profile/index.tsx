import styles from "./index.module.scss";
import PreviewBodyImage from "@/components/preview/preview.body/preview.body.profile/preview.body.image";
import PreviewBodyInfo from "@/components/preview/preview.body/preview.body.profile/preview.body.info";
import React from "react";

const PreviewBodyProfile: React.FC<{
  id: string;
}> = ({ id }) => {
  return (
    <section className={styles.container}>
      <PreviewBodyImage id={id} />
      <PreviewBodyInfo id={id} />
    </section>
  );
};

export default PreviewBodyProfile;
