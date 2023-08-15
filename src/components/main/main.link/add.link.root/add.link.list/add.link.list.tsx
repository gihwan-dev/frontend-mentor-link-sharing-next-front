"use client";

import styles from "./add.link.list.module.scss";
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import AddLinkListEmpty from "@/components/main/main.link/add.link.root/add.link.list/add.link.list.empty/add.link.list.empty";
import React, { useEffect } from "react";
import AddLinkListItem from "@/components/main/main.link/add.link.root/add.link.list/add.link.list.item/addLinkListItem";
import { Reorder } from "framer-motion";
import {
  initializePlatform,
  Platform,
  reOrderPlatform,
} from "@/stores/platform.slice";
import { useGetPlatforms } from "@/utilities/platforms/react-query";

const AddLinkList = () => {
  const reduxPlatforms = useAppSelector(state => state.platform.platforms);
  const { data: fetchedPlatforms, isLoading, error } = useGetPlatforms();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!!fetchedPlatforms && reduxPlatforms.length === 0) {
      dispatch(initializePlatform(fetchedPlatforms.platforms));
    }
  }, [dispatch, fetchedPlatforms]);

  if (isLoading && reduxPlatforms.length === 0) {
    return (
      <div className={styles.loading}>
        <div className={styles.item}></div>
      </div>
    );
  }

  if (error && reduxPlatforms.length === 0) {
    return <div className={styles.error}></div>;
  }

  return (
    <React.Fragment>
      {reduxPlatforms.length === 0 ? (
        <AddLinkListEmpty />
      ) : (
        <Reorder.Group
          id={"reorder-group"}
          axis={"y"}
          onReorder={(item: Platform[]) => {
            dispatch(reOrderPlatform(item));
          }}
          values={reduxPlatforms}
          className={styles.container}
        >
          {reduxPlatforms.map((i, index) => {
            return (
              <AddLinkListItem
                key={`${i.id}-add.link.list.item`}
                index={index}
              />
            );
          })}
        </Reorder.Group>
      )}
    </React.Fragment>
  );
};

export default AddLinkList;
