"use client";

import {SERVER_URL} from "@/const";
import {useQuery} from "@tanstack/react-query";

const fetchImage = () =>
  fetch(`${SERVER_URL}/user/image`, { credentials: "include" })
    .then(res => res.blob())
    .then(blob => URL.createObjectURL(blob));

export const useGetImage = () => {
  const { data, error, isLoading } = useQuery<string>({
    queryKey: ["userImage"],
    queryFn: fetchImage,
  });

  if (!data) {
    return {
      data: undefined,
      error,
      isLoading,
    };
  }

  return {
    data: data,
    error,
    isLoading,
  };
};

interface GetUserInterface {
  firstName: string;
  lastName: string;
  email: string;
  image: string;
}

const fetchUser = () =>
  fetch(`${SERVER_URL}/user`, {
    credentials: "include",
  }).then(res => res.json());

export const useGetUserProfile = () => {
  const { data, error, isLoading } = useQuery<GetUserInterface>({
    queryKey: ["userInfo"],
    queryFn: fetchUser,
  });

  return {
    data,
    error,
    isLoading,
  };
};
