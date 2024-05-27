
import axios from "axios";


 interface DatesData {
    id: string;
    date: Date
}



export const getAllDates = async () => 
{
    try 
    {
      const response = await axios.get<DatesData[]>('https://availi.azurewebsites.net/api/Survey')
      if(response && response.data)
      {
        return response.data
      }
      else {
        throw new Error('Get request failed')
      }
        
    }
    catch(error)
    {
        console.error(error)
        throw error;
    }
}



export const postDates = async (datesList: {dates: string[] | undefined}) => 
{
    try 
    {
        const response = await axios.post('https://availi.azurewebsites.net/api/Survey', datesList)

        if(response && response.data) 
             return response.data
         else 
         {
             throw new Error('Post request failed')
         }
    }
    catch(error) {
        console.error(error)
        throw error;
    }
   
}