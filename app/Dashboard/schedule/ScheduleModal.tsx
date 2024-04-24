import {
  Box,
  Button,
  Divider,
  getListItemSecondaryActionClassesUtilityClass,
  Modal,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import { ReceivedResponse } from "../response/page";
import { RxCross2 } from "react-icons/rx";

type Props = {
  handleSchedule: () => void;
  userData?: ReceivedResponse[];
};

const ScheduleModal = ({ handleSchedule, userData }: Props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Button onClick={handleOpen} variant="outlined" color="primary">
        Nieuwe Schema
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box className="absolute top-1/4 left-2/4 -translate-x-10 -translate-y-10 w-1/4 p-10  bg-white">
          <Box className="flex flex-col">
            <RxCross2
              className="self-end cursor-pointer"
              onClick={handleClose}
              size={"28px"}
            />
            <Typography fontWeight={"bold"}>Gebruikers</Typography>
            <Divider className="mt-3" />
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default ScheduleModal;
