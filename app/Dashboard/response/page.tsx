"use client";
import { getResponses } from "@/api/response";
import { Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import ResponseItem from "./ResponseItem";
import adminAuth from "@/app/auth/adminAuth";
import withAuth from "@/app/auth/withAuth";

export interface ReceivedResponse {
  dateId: string;
  date: Date;
  availableUsers: {
    userId: string;
    userName: string;
  }[];
}

const ResponsePage = () => {
  const { data } = useQuery<ReceivedResponse[]>({
    queryKey: ["responses"],
    queryFn: getResponses,
  });

  return (
    <>
      <Box className="mb-10">
        {data
          ?.sort(
            (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
          )
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

export default withAuth(ResponsePage);
