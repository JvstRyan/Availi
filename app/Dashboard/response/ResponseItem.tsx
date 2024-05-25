import { Box, Typography, Paper } from "@mui/material";
import React from "react";
import { BiEditAlt } from "react-icons/bi";
import { ReceivedResponse } from "./page";

const ResponseItem = ({dateId, date: incomingDate, availableUsers}: ReceivedResponse ) => {

  const date = new Date(incomingDate);
  const day = date.getDate();
  const weekDay = date.toLocaleString("default", { weekday: "long" });
  const capitalDay = weekDay.charAt(0).toUpperCase() + weekDay.slice(1);
  const month = date.toLocaleString("default", { month: "long" });
  const capitalMonth = month.charAt(0).toUpperCase() + month.slice(1)
  const year = date.getUTCFullYear();


  return (
    <>
      <Box className="flex justify-between items-center w-11/12 mt-14">
        <Typography fontSize={"20px"}>{`${day} ${capitalMonth} ${year}`}</Typography>
        <Typography fontSize={"20px"}>{capitalDay}</Typography>
      </Box>
     {availableUsers.map((item) => (
        <Paper elevation={6} key={item.userId} className="bg-secondary w-11/12 mt-3 flex justify-between items-center">
        <Typography className="p-2 ml-3">{item.userName}</Typography>
      </Paper>
     ))}
    </>
  );
};

export default ResponseItem;
