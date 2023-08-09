"use client";

import Mockup from "public/assets/images/illustration-phone-mockup.svg";
import styles from "./links.image.view.module.scss";
import ImageViewListItem from "@/components/main/main.link/image.view/image.view.list.item/image.view.list.item";
import { useAppSelector } from "@/stores/hooks";

const LinksImageView = () => {
  const platforms = useAppSelector(state => state.platform.platforms);

  return (
    <div className={styles.mockup}>
      <Mockup />
      {platforms.map((item, index) => {
        console.log(item);
        return (
          <ImageViewListItem
            index={index}
            title={item.title}
            key={Math.random().toString().slice(2)}
          />
        );
      })}
    </div>
  );
};

export default LinksImageView;
