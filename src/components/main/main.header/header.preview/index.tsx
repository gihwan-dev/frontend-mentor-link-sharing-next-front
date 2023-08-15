import Link from "next/link";
import React from "react";
import styles from "./header.preview.module.scss";
import PreviewIcon from "public/assets/images/icon-preview-header.svg";

const HeaderPreview: React.FC<{
  id: string;
}> = ({ id }) => {
  return (
    <Link className={styles.link} href={`/preview/${id}`}>
      <PreviewIcon className={styles.logo} />
      <p>Preview</p>
    </Link>
  );
};

export default HeaderPreview;
