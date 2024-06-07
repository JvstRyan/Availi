import useUserStore from "@/stores/userStore";
import axios from "axios";

export const registerUsers = async ({
  body,
}: {
  body: { name: string; email: string; password: string };
}) => {
  try {
    const response = await axios.post(
      `https://availi.azurewebsites.net/api/Auth/register`,
      body
    );
    if (response) return response.data;
    else throw new Error("Post request failed");
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const loginUsers = async ({
  body,
}: {
  body: { email: string; password: string };
}) => {
  try {
    const response = await axios.post(
      `https://availi.azurewebsites.net/api/Auth/login`,
      body
    );
    if (response && response.data) {
      const data = response.data;
      localStorage.setItem('jwtToken', data.jwtToken)
      localStorage.setItem('userRole', data.userRole)
      useUserStore.getState().setUser({
        userName: data.userName,
        userEmail: data.email,
        userId: data.userId,
      });
    }

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};



