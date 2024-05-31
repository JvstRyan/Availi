
import axios from "axios";

export interface Response {
  userId?: string;
  dateAnswers: {
    dateId: string;
    answer: boolean;
  }[];
}

export interface ResponseUser {
  userId: string;
  userName: string;
}

export const getResponses = async () => {
  try {
    const response = await axios.get(`https://availi.azurewebsites.net/api/Response`);
    if (response && response.data) return response.data;
    else throw new Error("Fetching of responses failed");
  } catch (error) {
    console.error(error);
  }
};

export const createResponse = async ({ body }: { body: Response }) => {
  try {
    const response = await axios.post(
      `https://availi.azurewebsites.net/api/Response`,
      body
    );
    if (response && response.data) return response.data;
    else throw new Error("Creating response failed");
  } catch (error) {
    console.error(error);
  }
};

export const getResponseUsers = async () => {
  try {
    const response = await axios.get<ResponseUser[]>(
      `https://availi.azurewebsites.net/api/Response/users`
    );
    if (response && response.data) return response.data;
    else throw new Error("Fetching response users failed");
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const handleSchedule = async () => {
  try {
    const res = await fetch(`https://availi.azurewebsites.net/api/Response`, {
      cache: "force-cache",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    console.error(error);
  }
};

export const hasAnswered = async (userId: string | undefined) => {
  try {
    const response = await axios.get(
      `https://availi.azurewebsites.net/api/Response/hasUserAnswered?userId=${userId}`
    );

    if (response) 
      return response.data;

   else throw new Error("Answer validation failed");
  } catch (error) {
    console.error(error);
    throw error;
  }
};
