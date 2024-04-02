
import axios from "axios"

export interface Users 
{
    id: string
    name: string
    email: string
    roles: string
}

type UpdateUser = 
{
    name?: string;
    email?: string;
    roles?: string;
}

export const getUsers = async () => 
{
   try 
   {
    const response = await axios.get<Users[]>("https://localhost:7220/api/Auth/users")
    if (response && response.data)
    {
        return response.data
    }
    else 
    {
        throw new Error('Get request failed')
    }   
   } 
   catch(error)
   {
    console.error(error)
   }

}


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
    }
}



export const updateUsers = async ({_id, body}: {_id: string, body: UpdateUser}) => 
{
    try 
    {
        const response = await axios.put(`https://localhost:7220/api/Auth/${_id}`, body)
        if (response)
        return response.data;
        else 
        throw new Error('Update request failed')
    }
    catch(error)
    {
    console.error(error)
    }
}


export const deleteUsers = async ({_id}: {_id: string}) => 
{
    try 
    {
        const response = await axios.delete(`https://localhost:7220/api/Auth/${_id}`)
        if (response)
        return response.data;
        else
        throw new Error('Delete request failed')
    }
    catch(error)
    {
        console.error(error)
    }
}