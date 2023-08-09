import Link from "next/link";
import React from "react";
import styles from "./header.preview.module.scss";

const HeaderPreview: React.FC<{
  id: string;
}> = ({ id }) => {
  return (
    <Link className={styles.link} href={`/preview/${id}`}>
      <p>Preview</p>
    </Link>
  );
};

export default HeaderPreview;
