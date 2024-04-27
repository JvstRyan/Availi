import { Box, Typography, Paper } from "@mui/material";
import React from "react";
import { BiEditAlt } from "react-icons/bi";
import { ReceivedResponse } from "./page";

const ResponseItem = ({dateId, date: incomingDate, availableUsers}: ReceivedResponse ) => {

  const date = new Date(incomingDate);
  const day = date.getDate();
  const weekDay = date.toLocaleString("default", { weekday: "long" });
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getUTCFullYear();


  return (
    <>
      <Box className="flex justify-between items-center w-11/12 mt-14">
        <Typography fontSize={"20px"}>{`${day} ${month} ${year}`}</Typography>
        <Typography fontSize={"20px"}>{weekDay}</Typography>
      </Box>
     {availableUsers.map((item) => (
        <Paper elevation={6} key={item.userId} className="bg-secondary w-11/12 mt-3 flex justify-between items-center">
        <Typography className="p-2 ml-3">{item.userName}</Typography>
        <BiEditAlt size={"21px"} className="mr-4" />
      </Paper>
     ))}
    </>
  );
};

export default ResponseItem;
