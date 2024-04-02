"use client";
import toast, { Toaster } from 'react-hot-toast';
import { postDates } from "@/app/api/survey";
import { Alert, Box, Button } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

interface Props {
  handleClose: () => void;
}

export default function SurveyCalender({ handleClose }: Props) {
  const [days, setDays] = useState<Date[] | undefined>([]);

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: postDates,
    onSuccess: () => {
      handleClose();
      queryClient.invalidateQueries({ queryKey: ["dates"] });
    },
  });

  const createDates = () => {
    const formattedDates = days?.map((day) => {
      const date = new Date(day.getFullYear(), day.getMonth(), day.getDate());
      const timezoneOffsetInMilliseconds = date.getTimezoneOffset() * 60 * 1000;
      date.setTime(date.getTime() - timezoneOffsetInMilliseconds);

      return date.toISOString().split("T")[0];
    });
    mutation.mutate({ dates: formattedDates });
  };

  const footer =
    days && days.length > 0 ? (
      <p className="mt-5">Je hebt {days.length} datum(s) gekozen.</p>
    ) : (
      <p className="mt-5">Kies de dagen voor je enquete</p>
    );

  return (
    <>
      <Box className="flex flex-col justify-center items-center gap-5">
        <DayPicker
          mode="multiple"
          min={1}
          selected={days}
          onSelect={setDays}
          footer={footer}
          styles={{
            caption: { color: "white" },
            table: { color: "white", fontSize: "17px" },
          }}
          modifiersStyles={{
            selected: { backgroundColor: "#526BA1", color: "white" },
          }}
        />
        <Button
          onClick={createDates}
          className="w-72 h-10"
          variant="outlined"
          color="secondary"
          
        >
          Enquete aamaken
        </Button>
      </Box>
    </>
  );
}
