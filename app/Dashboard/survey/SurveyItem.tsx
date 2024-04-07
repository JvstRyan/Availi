import {
  Box,
  Checkbox,
  FormControlLabel,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";

interface DateInt {
    incomingDate: Date
}

const SurveyItem = ({incomingDate}: DateInt)  => {

   const date = new Date(incomingDate);
   const day = date.getDate();
   const weekDay = date.toLocaleString('default', {weekday: 'long'})
   const month = date.toLocaleString('default', {month: 'long'});


  return (
    <>
      <Box
        sx={{
          backgroundColor: "#181818",
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
          control={<Checkbox color="secondary" checked={true} />}
          label="Wel"
          sx={{ marginTop: "10px" }}
        />
        <FormControlLabel control={<Checkbox checked={false} />} label="Niet" />
      </Box>
    </>
  );
};

export default SurveyItem;
