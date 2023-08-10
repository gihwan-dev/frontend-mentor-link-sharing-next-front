"use client";

import styles from "./body.upload.input.module.scss";
import UploadImage from "public/assets/images/icon-upload-image.svg";
import { ChangeEvent } from "react";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import { setImage } from "@/stores/user-info.slice";

const BodyUploadInput = () => {
  const userImage = useAppSelector(state => state.user.image);
  const dispatch = useAppDispatch();

  const onFileUploadedHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) {
      window.alert("업로드에 실패했습니다. 다시 시도해 주세요.");
      return;
    }
    dispatch(setImage(files[0]));
  };

  return (
    <label className={styles.upload} htmlFor={"file"}>
      <input
        onChange={onFileUploadedHandler}
        id={"file"}
        type={"file"}
        name={"file"}
      />
      {!userImage ? (
        <>
          <UploadImage />
          <p>+ Upload Image</p>
        </>
      ) : (
        <>
          <Image
            objectFit={"cover"}
            src={URL.createObjectURL(userImage)}
            fill={true}
            alt={"image preview"}
            style={{
              borderRadius: "0.75rem",
            }}
          />
          <div className={styles["text-overwrite"]}>
            <UploadImage />
            <p>Change Image</p>
          </div>
        </>
      )}
    </label>
  );
};

export default BodyUploadInput;