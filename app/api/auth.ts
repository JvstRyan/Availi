import useUserStore from "@/userStore"
import axios from "axios"



export const registerUsers = async ({body}: {body: {name: string, email:string, password:string}}) => 
{
    try
    {
        const response = await axios.post(`https://localhost:7220/api/Auth/register`, body )
        if(response)
        return response.data
        else
        throw new Error("Post request failed")
    }
    catch(error)
    {
        console.error(error)
        throw error
    }
}


export const loginUsers = async ({body}: {body: {email: string, password: string}}) => 
{
    try 
    {
    const response = await axios.post(`https://localhost:7220/api/Auth/login`, body, {
        withCredentials: true
    })
    if (response && response.data)
    {
        console.log(response.data)
        const data = response.data;
        useUserStore.getState().setUser({
            userRole: data.userRole,
            userName: data.userName,
            userEmail: data.email,
        })
    }



    return response.data
    }
    catch(error)
    {
        console.error(error)
        throw error
    }
}

export const logout = async () => 
{
    try 
    {
        const response = await axios.post('https://localhost:7220/api/Auth/logout', {}, 
        {
            withCredentials: true
        });
        if (response)
        return response.data;
    }
    catch(error)
    {
        console.error(error)
    }
}

export const checkAuth = async () => {
    try {
      const response = await axios.get(
        "https://localhost:7220/api/Auth/authorize",
        {
          withCredentials: true,
        }
      );
      if (response && response.data) 
      {
        return true
      }

    } 
    catch(error)
    {
        console.error(error)
        throw error;
    }
}