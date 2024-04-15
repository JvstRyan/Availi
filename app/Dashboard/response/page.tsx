import { getResponses } from '@/app/api/response';
import { useQuery } from '@tanstack/react-query';
import React from 'react'
const page = () => {

    const { data, isLoading } = useQuery({
        queryKey: ["responses"],
        queryFn: getResponses
      });

  return (
   <>
    
   </>
  )
}

export default page