"use client";

import styles from "./index.module.scss";
import React from "react";
import Image from "next/image";
import {useFindOneUser} from "@/utilities/user/react-query";

const PreviewBodyImage: React.FC<{
  id: string;
}> = ({ id }) => {
  // get image

    const {data: user, isLoading, error} = useFindOneUser(id);

    if (isLoading || error) {
        return null;
    }

  return (
    <div className={styles.container}>
        {!user || !user.image || user.image == "" ? "" : <Image
            fill={true}
            style={{
                objectFit: "cover",
            }}
            src={user?.image ?? ""}
            alt={"user image"}
        />}
    </div>
  );
};

export default PreviewBodyImage;
