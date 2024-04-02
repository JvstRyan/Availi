"use client";

import { Button, Modal, Box, Typography } from "@mui/material";
import React from "react";
import SurveyCalender from "./SurveyCalender";


export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="outlined"
        color="info"
      >
        Nieuwe Enquete
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "40%",
            left: "55%",
            transform: "translate(-50%, -50%)",
            width: 500,
            bgcolor: "#181818",
            padding: 4,
          }}
        >
        <Box className="flex justify-center items-center flex-col gap-5">
          <SurveyCalender handleClose={handleClose} />
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
