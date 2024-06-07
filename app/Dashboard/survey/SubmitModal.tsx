import { Button, Modal, Box, Typography } from "@mui/material";
import React from "react";
import { CgDanger } from "react-icons/cg";

type Props = {
  handleSubmit: (event: React.FormEvent) => void;
  datesChosen?: Array<{ day: number; month: string; weekDay: string }>;
};

export default function BasicModal({ handleSubmit, datesChosen }: Props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        className="bg-gradient-primary p-2.5 font-bold mt-5 mb-5 w-full"
        color="secondary"
        variant="outlined"
        onClick={handleOpen}
      >
        Versturen
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box className="absolute top-1/4 left-2/4 -translate-x-10 -translate-y-10 w-1/4 p-10  bg-white">
          <Box
            component={"article"}
            className="flex flex-col items-center justify-center gap-2"
          >
            <CgDanger size={"45px"} />
            <Typography fontWeight={"bold"} fontSize={"20px"}>
              Beschikbaarheid versturen
            </Typography>
            <Typography align="center" fontSize={"15px"}>
              Weet je zeker dat je alles correct hebt ingevuld?
            </Typography>
            <Box className="flex flex-col items-center">
              {datesChosen?.map((date, index) => (
                <div
                  key={index}
                  className="flex items-center font-bold justify-center gap-16"
                >
                  <div>{`${date.day} ${date.month}`}</div>
                  <div>{`${date.weekDay}`}</div>
                </div>
              ))}
            </Box>
            <Box
              component={"div"}
              className="flex justify-center items-center gap-5 mt-5"
            >
              <Button onClick={handleClose} color="primary" variant="outlined">
                Terug
              </Button>
              <Button
                onClick={handleSubmit}
                color="secondary"
                className="bg-gradient-primary text-white"
                variant="outlined"
              >
                Versturen
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
