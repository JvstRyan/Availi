"use client"

import { getAllDates } from "@/app/api/survey";
import withAuth from "@/app/components/authentication/withAuth";
import SurveyItem from "@/app/dashboard/survey/SurveyItem";
import SurveyModal from "@/app/dashboard/survey/SurveyModal";
import { Box, Button, CircularProgress } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

const page = () => {
  const {data, isLoading} = useQuery({
    queryKey: ["dates"],
    queryFn: getAllDates,
  });

  return (
    <>
    <Toaster />
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
         
         <Button type="submit">Versturen</Button>
      </form>
      {isLoading && <CircularProgress color="secondary" />}
    </Box>
    </>
  );
};

export default withAuth(page);
