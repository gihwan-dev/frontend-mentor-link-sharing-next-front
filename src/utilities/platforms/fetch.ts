import { SERVER_URL } from "@/const";
import { Platform } from "@/stores/platform.slice";

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
