import axios from "axios";


 interface DatesData {
    id: string;
    date: Date
}

export const getAllDates = async () => 
{
    try 
    {
      const response = await axios.get<DatesData[]>('https://localhost:7220/api/Survey')
      if(response && response.data)
      {
        return response.data
      }
      else {
        throw new Error('Request failed')
      }
        
    }
    catch(error)
    {
        console.error(error)
        throw error;
    }
}