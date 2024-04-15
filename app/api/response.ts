import axios from "axios"

export interface Response 
{
    userId?: string 
    dateAnswers: {
        dateId: string
        answer: boolean
    }[];
}

export const getResponses = async () => 
{
    try 
    {
        const response = await axios.get(`https://localhost:7220/api/Response`)
        if(response && response.data)
            return response.data
        else
            throw new Error('Fetching of responses failed')
    }
    catch(error)
    {
        console.error(error)
    }
}


export const createResponse = async ({body}: {body: Response}) => 
{
    try 
    {
        const response = await axios.post(`https://localhost:7220/api/Response`, body)
        if(response && response.data)
            return response.data
        else
            throw new Error('Creating response failed')
    }
    catch(error)
    {
        console.error(error)
    }
}

