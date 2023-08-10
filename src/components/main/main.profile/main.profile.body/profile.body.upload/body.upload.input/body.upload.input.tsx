"use client";

import styles from "./body.upload.input.module.scss";
import UploadImage from "public/assets/images/icon-upload-image.svg";
import { ChangeEvent, useState } from "react";
import Image from "next/image";

const BodyUploadInput = () => {
  const [imagePreview, setImagePreview] = useState("");

  const onFileUploadedHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) {
      window.alert("업로드에 실패했습니다. 다시 시도해 주세요.");
      return;
    }
    setImagePreview(URL.createObjectURL(files[0]));
  };

  return (
    <label className={styles.upload} htmlFor={"file"}>
      <input
        onChange={onFileUploadedHandler}
        id={"file"}
        type={"file"}
        name={"file"}
      />
      {!imagePreview ? (
        <>
          <UploadImage />
          <p>+ Upload Image</p>
        </>
      ) : (
        <Image
          objectFit={"cover"}
          src={imagePreview}
          fill={true}
          width={180}
          height={180}
          alt={"image preview"}
        />
      )}
    </label>
  );
};

export default BodyUploadInput;
