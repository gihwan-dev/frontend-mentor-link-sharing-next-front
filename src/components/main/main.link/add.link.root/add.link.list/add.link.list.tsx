"use client";

import styles from "./add.link.list.module.scss";
import { useAppSelector } from "@/stores/hooks";
import AddLinkListItem from "@/components/main/main.link/add.link.root/add.link.list/add.link.list.item/addLinkListItem";
import AddLinkListEmpty from "@/components/main/main.link/add.link.root/add.link.list/add.link.list.empty/add.link.list.empty";
import React from "react";

const AddLinkList = () => {
  const platforms = useAppSelector(state => state.platform.platforms);
  return (
    <React.Fragment>
      {platforms.length === 0 ? (
        <AddLinkListEmpty />
      ) : (
        <ul className={styles.container}>
          {platforms.map((item, index) => {
            return (
              <AddLinkListItem
                index={index}
                key={Math.random().toString().slice(2)}
              />
            );
          })}
        </ul>
      )}
    </React.Fragment>
  );
};

export default AddLinkList;
