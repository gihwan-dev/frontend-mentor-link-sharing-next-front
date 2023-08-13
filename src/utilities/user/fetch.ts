import { SERVER_URL } from "@/const";

export interface UpdateUserInterface {
  username: string;
  email: string | null;
}

export interface UploadImageInterface {
  blobImageUrl: string;
}

const fetchData = async (blobUrl: string) => {
  const response = await fetch(blobUrl);
  return await response.blob();
};

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
    if (response.ok) {
      const data = await response.json();
    }
  } catch (error) {}
};

export const uploadImage = async (blobImageUrl: string | null) => {
  try {
    if (!blobImageUrl) {
      return;
    }
    const fileBlob = await fetchData(blobImageUrl);
    const formData = new FormData();

    formData.append("image", fileBlob);

    const response = await fetch(`${SERVER_URL}/user/image`, {
      method: "POST",
      credentials: "include",
      cache: "no-cache",
      body: formData,
    });
  } catch (error) {}
};
