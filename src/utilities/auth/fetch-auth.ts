import { SERVER_URL } from "@/const";
import { StatusCodes } from "http-status-codes";

interface AuthFetchResult {
  status: "ACCEPTED" | "FAILED";
  id?: string;
}

interface authResponseDto {
  id: string;
}

export type AuthFetchStatus = "LOADING" | "ERROR" | "SUCCESS";

export const authFetcher = async (): Promise<AuthFetchResult> => {
  try {
    const result = await fetch(`${SERVER_URL}/auth`, {
      credentials: "include",
      cache: "no-cache",
    });

    if (result.status === StatusCodes.ACCEPTED) {
      const user = (await result.json()) as authResponseDto;
      return {
        status: "ACCEPTED",
        id: user.id,
      };
    }

    return {
      status: "FAILED",
    };
    // router.push("/main");
  } catch (error) {
    return {
      status: "FAILED",
    };
  }
};
