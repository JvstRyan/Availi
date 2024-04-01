"use client";

import { getAllDates } from "@/app/api/survey";
import SurveyItem from "@/app/dashboard/survey/SurveyItem";
import SurveyModal from "@/app/dashboard/survey/SurveyModal";
import { Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

const page = () => {
  const { data } = useQuery({
    queryKey: ["dates"],
    queryFn: getAllDates,
  });

  return (
    <Box
    className="flex justify-center items-center mt-10 flex-col gap-5 w-11/12"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "2rem",
        flexDirection: "column",
        gap: "10px",
        width: "80%",
      }}
    >
      <Box className="flex justify-end items-end self-end">
        <SurveyModal />
      </Box>
      <form className="flex flex-col w-full h-10 text-white mt-5 gap-3">
        {data?.map((date) => (
          <SurveyItem key={date.id} incomingDate={date.date} />
        ))}
      </form>
    </Box>
  );
};

export default page;
