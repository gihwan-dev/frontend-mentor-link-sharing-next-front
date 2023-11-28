"use client";

import styles from "./index.module.scss";
import React from "react";
import BodyLinkItem from "@/components/preview/preview.body/preview.body.link/body.link.item";
import {useGetPlatforms} from "@/utilities/platforms/react-query";

interface Platform {
  title: string;
  link: string;
  platform_id: string;
}

const PreviewBodyLink: React.FC<{
  id: string;
}> = ({ id }) => {

  const {data, isLoading, error} = useGetPlatforms();

  if (isLoading || error) {
    return null;
  }

    if (!data?.platforms) {
      return <p>목록을 찾을 수 없습니다. 다시 시도해 주세요.</p>;
    }

    return (
      <ul className={styles.list}>
        {data.platforms?.map(item => {
          return (
            <BodyLinkItem
              key={item.id}
              title={item.title}
              link={item.link}
            />
          );
        })}
      </ul>
    );
};

export default PreviewBodyLink;
