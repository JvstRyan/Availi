"use client";
import toast, { Toaster } from "react-hot-toast";
import { postDates } from "@/app/api/survey";
import { Alert, Box, Button } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import useUserStore from "@/userStore";
import { RxCross2 } from "react-icons/rx";

interface Props {
  handleClose: () => void;
}

export default function SurveyCalender({ handleClose }: Props) {
  const [days, setDays] = useState<Date[] | undefined>([]);
  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: postDates,
    onSuccess: () => {
      handleClose();
      if (user) {
        const updatedUser = { ...user, answered: false };
        setUser(updatedUser);
      }
      toast.success("Datums zijn aangemaakt", {
        duration: 4000,
        position: "bottom-right",
      });
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
        <RxCross2 className="self-end cursor-pointer" onClick={handleClose} size={'28px'}/>
        <DayPicker
          mode="multiple"
          min={1}
          selected={days}
          onSelect={setDays}
          footer={footer}
          styles={{
            caption: { color: "black" },
            table: { color: "black", fontSize: "17px" },
          }}
          modifiersStyles={{
            selected: { backgroundColor: "#319DDB", color: "white" },
          }}
        />
        <Button
          onClick={createDates}
          className="bg-gradient-primary p-2 w-72 h-10 mb-10 font-bold"
          color="secondary"
          variant="outlined"
        >
          Enquête aamaken
        </Button>
      </Box>
    </>
  );
}
