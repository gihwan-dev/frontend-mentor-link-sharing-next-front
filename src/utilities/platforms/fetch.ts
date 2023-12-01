import {SERVER_URL} from "@/const";
import {Platform} from "@/stores/platform.slice";

export const postPlatform = async (platforms: Platform[]) => {
  try {
    const response = await fetch(`${SERVER_URL}/platform`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache",
      credentials: "include",
      body: JSON.stringify({
        platforms,
      }),
    });
    if (!response.ok) {
      return false;
    }
    return true;
  } catch (error) {
    return false;
  }
};

export const findOnePlatform = async (userId: string) => {
    const response = await fetch(`${SERVER_URL}/platform/${userId}`);
    if (!response.ok) {
      throw new Error("Network response is not ok.")
    }
    return await response.json() as Platform[];
}