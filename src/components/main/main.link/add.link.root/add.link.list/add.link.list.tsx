"use client";

import styles from "./add.link.list.module.scss";
import {useAppDispatch, useAppSelector} from "@/stores/hooks";
import AddLinkListEmpty
  from "@/components/main/main.link/add.link.root/add.link.list/add.link.list.empty/add.link.list.empty";
import React, {useEffect, useState} from "react";
import AddLinkListItem
  from "@/components/main/main.link/add.link.root/add.link.list/add.link.list.item/addLinkListItem";
import {Reorder} from "framer-motion";
import {initializePlatform, Platform, reOrderPlatform,} from "@/stores/platform.slice";
import {useGetPlatforms} from "@/utilities/platforms/react-query";

const AddLinkList = () => {
  const reduxPlatforms = useAppSelector(state => state.platform.platforms);

  const [curPlatforms, setCurPlatforms] = useState<Platform[]>([]);

  const { data: fetchedPlatforms, isLoading, error } = useGetPlatforms();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!!fetchedPlatforms && reduxPlatforms.length === 0) {
      dispatch(initializePlatform(fetchedPlatforms.platforms));
    }
  }, [dispatch, fetchedPlatforms, reduxPlatforms.length]);

  useEffect(() => {
    if (reduxPlatforms.length !== 0) {
      setCurPlatforms(reduxPlatforms);
    }
  }, [reduxPlatforms.length]);

  useEffect(() => {
    dispatch(reOrderPlatform(curPlatforms));
  }, [curPlatforms, dispatch]);

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
      {curPlatforms.length === 0 ? (
        <AddLinkListEmpty />
      ) : (
        <Reorder.Group
          id={"reorder-group"}
          onReorder={setCurPlatforms}
          axis={"y"}
          values={reduxPlatforms}
          className={styles.container}
        >
          {curPlatforms.map((platform, index) => {
            return (
              <Reorder.Item key={`${platform.id}ReorderItem`} id={`${platform.id}ReorderItem`} value={platform}>
                <AddLinkListItem setCurPlatforms={setCurPlatforms} platform={platform} index={index} />
              </Reorder.Item>
            );
          })}
        </Reorder.Group>
      )}
    </React.Fragment>
  );
};

export default AddLinkList;
