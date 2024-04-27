import {
  Box,
  Checkbox,
  FormControlLabel,
  Paper,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

type SurveyItemProps = {
  incomingDate: Date;
  dateId: string;
  onAnswerChange: (dateId: string, answer: boolean) => void;
};

const SurveyItem = ({
  incomingDate,
  dateId,
  onAnswerChange,
}: SurveyItemProps) => {
  const [answer, setAnswer] = useState(false);

  const date = new Date(incomingDate);
  const day = date.getDate();
  const weekDay = date.toLocaleString("default", { weekday: "long" });
  const month = date.toLocaleString("default", { month: "long" });

  return (
    <>
      <Paper
        elevation={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "30px",
          borderRadius: "10px",
          marginBottom: "10px",
        }}
      >
        <Typography fontWeight={"bold"} fontSize={"18px"}>
          {`Beschikbaar ${weekDay} ${day} ${month} ?`}
        </Typography>
        <FormControlLabel
          control={
            <Checkbox
              color="info"
              checked={answer}
              onChange={(e) => {
                const newAnswer = e.target.checked;
                setAnswer(newAnswer);
                onAnswerChange(dateId, newAnswer);
              }}
            />
          }
          label="Ja"
          sx={{ marginTop: "10px" }}
        />
      </Paper>
    </>
  );
};

export default SurveyItem;
