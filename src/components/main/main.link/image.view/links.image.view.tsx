"use client";

import Mockup from "public/assets/images/illustration-phone-mockup.svg";
import styles from "./links.image.view.module.scss";
import ImageViewListItem from "@/components/main/main.link/image.view/image.view.list.item/image.view.list.item";
import { useAppSelector } from "@/stores/hooks";
import ImageViewProfileImage from "@/components/main/main.link/image.view/image.view.profile.image/image.view.profile.image";
import ImageViewName from "@/components/main/main.link/image.view/image.view.name/image.view.name";

const LinksImageView = () => {
  const platforms = useAppSelector(state => state.platform.platforms);

  return (
    <div className={styles.mockup}>
      <Mockup />
      <ImageViewProfileImage />
      <ImageViewName />
      {platforms.map((item, index) => {
        return (
          <ImageViewListItem
            index={index}
            title={item.title}
            key={`${item.id}-image.view.list.item`}
          />
        );
      })}
    </div>
  );
};

export default LinksImageView;
