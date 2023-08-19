import styles from "./index.module.scss";
import React from "react";
import Image from "next/image";

const PreviewBodyImage: React.FC<{
  id: string;
}> = ({ id }) => {
  // get image
  const { SERVER_URL } = process.env;

  const src = `${SERVER_URL}/user/image/${id}`;

  return (
    <div className={styles.container}>
      <Image
        fill={true}
        style={{
          objectFit: "cover",
        }}
        src={src}
        alt={"user image"}
      />
    </div>
  );
};

export default PreviewBodyImage;
