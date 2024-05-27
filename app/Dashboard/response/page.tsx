"use client";
import { getResponses } from "@/app/api/response";
import { Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import ResponseItem from "./ResponseItem";
import adminAuth from "@/app/auth/adminAuth";

export interface ReceivedResponse {
  dateId: string;
  date: Date;
  availableUsers: {
    userId: string;
    userName: string;
  }[];
}

const Page = () => {
  const { data } = useQuery<ReceivedResponse[]>({
    queryKey: ["responses"],
    queryFn: getResponses,
  });

  return (
    <>
      <Box className="mb-10">
        {data
          ?.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
          .map((item) => (
            <ResponseItem
              key={item.dateId}
              dateId={item.dateId}
              date={item.date}
              availableUsers={item.availableUsers}
            />
          ))}
      </Box>
    </>
  );
};

export default adminAuth(Page)
