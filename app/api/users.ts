import axios from "axios"

export interface Users 
{
    id?: string
    name: string
    email: string
    roles: string[]
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