"use client";

import { SERVER_URL } from "@/const";
import { useQuery } from "@tanstack/react-query";

const fetchImage = () =>
  fetch(`${SERVER_URL}`, { credentials: "include" }).then(res => res.json());

export const useGetImage = () => {
  const { data, error, isLoading } = useQuery<File>({
    queryKey: ["userImage"],
    queryFn: fetchImage,
  });

  return {
    data,
    error,
    isLoading,
  };
};

interface GetUserInterface {
  firstName: string;
  lastName: string;
  email: string;
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
