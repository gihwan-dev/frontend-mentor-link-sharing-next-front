import { SERVER_URL } from "@/const";

export interface UpdateUserInterface {
  image: string | null;
  username: string;
  email: string | null;
}

export const updateUser = async (updateUser: UpdateUserInterface) => {
  try {
    console.log(updateUser);
    const response = await fetch(`${SERVER_URL}/user`, {
      method: "PATCH",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache",
      body: JSON.stringify({
        imageURL: updateUser.image,
        username: updateUser.username,
        email: updateUser.email,
      }),
    });
  } catch (error) {}
};
