"use client";

import styles from "./add.link.list.module.scss";
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import AddLinkListEmpty from "@/components/main/main.link/add.link.root/add.link.list/add.link.list.empty/add.link.list.empty";
import React, { useEffect, useState } from "react";
import AddLinkListItem from "@/components/main/main.link/add.link.root/add.link.list/add.link.list.item/addLinkListItem";
import { Reorder } from "framer-motion";
import { initializePlatform, reOrderPlatform } from "@/stores/platform.slice";
import { useGetPlatforms } from "@/utilities/platforms/react-query";

const AddLinkList = () => {
  const reduxPlatforms = useAppSelector(state => state.platform.platforms);
  const [platforms, setPlatforms] = useState(reduxPlatforms);
  const { data: fetchedPlatforms, isLoading, error } = useGetPlatforms();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initializePlatform(fetchedPlatforms ?? []));
  }, [dispatch, fetchedPlatforms]);

  useEffect(() => {
    setPlatforms(reduxPlatforms);
  }, [reduxPlatforms]);

  useEffect(() => {
    dispatch(reOrderPlatform(platforms));
  }, [dispatch, platforms]);

  return (
    <React.Fragment>
      {platforms.length === 0 ? (
        <AddLinkListEmpty />
      ) : (
        <Reorder.Group
          id={"reorder-group"}
          axis={"y"}
          onReorder={setPlatforms}
          values={platforms}
          className={styles.container}
        >
          {platforms.map((i, index) => {
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
