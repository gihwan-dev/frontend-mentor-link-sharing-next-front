import { SERVER_URL } from "@/const";
import { StatusCodes } from "http-status-codes";

interface AuthFetchResult {
  status: "ACCEPTED" | "FAILED";
  email?: string;
}

interface authResponseDto {
  email: string;
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
        email: user.email,
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
