"use client";

import { createResponse, hasAnswered } from "@/api/response";
import { getAllDates } from "@/api/survey";
import withAuth from "@/app/auth/withAuth";
import useUserStore from "@/stores/userStore";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import SubmitModal from "./SubmitModal";
import SurveyItem from "./SurveyItem";
import SurveyModal from "./SurveyModal";

const SurveyPage = () => {
  const user = useUserStore((state) => state.user);
  const { data, isLoading } = useQuery({
    queryKey: ["dates"],
    queryFn: getAllDates,
  });

  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const [userHasAnswered, setUserHasAnswered] = useState(false);

  useEffect(() => {
    const fetchHasAnswered = async () => {
      if (user?.userId) {
        const response = await hasAnswered(user.userId);
        setUserHasAnswered(response);
      }
    };

    fetchHasAnswered();
  }, [user?.userId]);

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
    setUserHasAnswered(true);
  };
  return (
    <>
      <Toaster />
      <Box className="flex flex-col w-11/12 h-full mt-10 ">
        <Box className="flex justify-end items-end self-end ">
          <SurveyModal />
        </Box>
        {!userHasAnswered && (
          <form className="flex flex-col w-full text-white mt-5 gap-3">
            {data?.map((date) => (
              <SurveyItem
                key={date.id}
                dateId={date.id}
                incomingDate={date.date}
                onAnswerChange={handleAnswerChange}
              />
            ))}
            <SubmitModal handleSubmit={handleSubmit} />
          </form>
        )}
        {isLoading && <CircularProgress color="secondary" />}
      </Box>
      {userHasAnswered && (
        <Box className="flex justify-center mt-20 items-center">
          <Typography fontSize={"20px"}>
            Enquête is ingevuld, bedankt!
          </Typography>
        </Box>
      )}
    </>
  );
};

export default withAuth(SurveyPage);
