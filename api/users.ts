import axios from "axios";

export interface Users {
  id: string;
  name: string;
  email: string;
  roles: string;
}

type UpdateUser = {
  name?: string;
  email?: string;
  roles?: string;
};

export const getUsers = async () => {
  try {
    const response = await axios.get<Users[]>(
      "https://availi.azurewebsites.net/api/Users/users"
    );
    if (response && response.data) {
      return response.data;
    } else {
      throw new Error("Get request failed");
    }
  } catch (error) {
    console.error(error);
  }
};

export const updateUsers = async ({
  _id,
  body,
}: {
  _id: string;
  body: UpdateUser;
}) => {
  try {
    const response = await axios.put(
      `https://availi.azurewebsites.net/api/Users/${_id}`,
      body
    );
    if (response) return response.data;
    else throw new Error("Update request failed");
  } catch (error) {
    console.error(error);
  }
};

export const deleteUsers = async ({ _id }: { _id: string }) => {
  try {
    const response = await axios.delete(
      `https://availi.azurewebsites.net/api/Users/${_id}`
    );
    if (response) return response.data;
    else throw new Error("Delete request failed");
  } catch (error) {
    console.error(error);
  }
};
