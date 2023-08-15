"use client";

import { useQuery } from "@tanstack/react-query";
import { SERVER_URL } from "@/const";

export interface GetPlatformDto {
  id: string;
  link: string;
  title: string;
}

interface GetPlatformsDto {
  platforms: GetPlatformDto[];
}

export const useGetPlatforms = () => {
  const { isLoading, error, data } = useQuery<GetPlatformsDto>({
    queryKey: ["platformsData"],
    queryFn: () =>
      fetch(`${SERVER_URL}/platform`, {
        credentials: "include",
      }).then(res => res.json()),
  });
  return {
    data,
    error,
    isLoading,
  };
};
