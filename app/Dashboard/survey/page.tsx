"use client";

import { createResponse } from "@/app/api/response";
import { getAllDates } from "@/app/api/survey";
import withAuth from "@/app/auth/withAuth";
import SurveyItem from "@/app/dashboard/survey/SurveyItem";
import SurveyModal from "@/app/dashboard/survey/SurveyModal";
import useUserStore from "@/userStore";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const page = () => {
  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);
  const { data, isLoading } = useQuery({
    queryKey: ["dates"],
    queryFn: getAllDates,
  });

  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleAnswerChange = (dateId: string, answer: boolean) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [dateId]: answer,
    }));
  };

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createResponse,
    onSuccess: () => {
      toast.success("Antwoorden zijn opgeslagen", {
        duration: 4000,
        position: "bottom-right",
      });
      queryClient.invalidateQueries({ queryKey: ["responses"] });
    },
    onError: (error) => {
      toast.error(`${error}`, { duration: 5000, position: "bottom-right" });
    },
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const response = {
      userId: user?.userId,
      dateAnswers: Object.entries(answers).map(([dateId, answer]) => ({
        dateId,
        answer,
      })),
    };
    mutation.mutate({ body: response });
    if (user) {
      const updatedUser = { ...user, answered: true };
      setUser(updatedUser);
    }
  };
  return (
    <>
      <Toaster />
      <Box className="flex flex-col w-11/12 h-full mt-10 ">
        <Box className="flex justify-end items-end self-end ">
          <SurveyModal />
        </Box>
        {isMounted && !user?.answered && (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full text-white mt-5 gap-3"
          >
            {data?.map((date) => (
              <SurveyItem
                key={date.id}
                dateId={date.id}
                incomingDate={date.date}
                onAnswerChange={handleAnswerChange}
              />
            ))}
            <Button
              disabled={user?.answered}
              className="bg-gradient-primary p-2.5 font-bold mt-5 mb-5"
              color="secondary"
              variant="outlined"
              type="submit"
            >
              Versturen
            </Button>
          </form>
        )}
        {isLoading && <CircularProgress color="secondary" />}
      </Box>
      {isMounted && user?.answered && (
        <Box className="flex justify-center mt-20 items-center">
          <Typography fontSize={"20px"}>
            Enquête is ingevuld, bedankt!
          </Typography>
        </Box>
      )}
    </>
  );
};

export default withAuth(page);
