import {SERVER_URL} from "@/const";

export interface UpdateUserInterface {
  username: string;
  email: string | null;
}

type User = {
  username: string,
  contactEmail: string,
  email: string,
  image: string,
}

export const updateUser = async (updateUser: UpdateUserInterface) => {
  try {
    const response = await fetch(`${SERVER_URL}/user`, {
      method: "PATCH",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache",
      body: JSON.stringify({
        username: updateUser.username,
        contactEmail: updateUser.email,
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

export const uploadImage = async (file: File | null) => {
  try {
    if (!file) {
      return;
    }
    const formData = new FormData();

    formData.append("image", file, file.name);

    const response = await fetch(`${SERVER_URL}/user/image`, {
      method: "POST",
      credentials: "include",
      cache: "no-cache",
      body: formData,
    });
    if (!response.ok) {
      return false;
    }
    return true;
  } catch (error) {
    return false;
  }
};

export const findUserFetch = async (userId: string) => {
    const response = await fetch(`${SERVER_URL}/user/${userId}`);
    if (!response.ok) {
      throw new Error("Network response is not ok.")
    }

    return await response.json() as User;
}
