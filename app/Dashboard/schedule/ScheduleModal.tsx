
import { getResponseUsers } from "@/app/api/response";
import { Box, Button, Divider, Modal, Paper, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { RxCross2 } from "react-icons/rx";

type Props = {
  handleSchedule: () => void;
};

const ScheduleModal = ({handleSchedule}: Props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { data } = useQuery({
    queryFn: getResponseUsers,
    queryKey: ["response-user"],
  });


  return (
    <>
      <Button onClick={handleOpen} variant="outlined" color="primary">
        Nieuwe Schema
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box className="absolute top-1/4 left-2/4 -translate-x-10 -translate-y-24 w-1/4 p-10  bg-white">
          <Box className="flex flex-col">
            <RxCross2
              className="self-end cursor-pointer"
              onClick={handleClose}
              size={"28px"}
            />
            <Typography fontWeight={"bold"}>Gebruikers</Typography>
            <Divider className="mt-3" />
            <Box className="flex flex-col gap-2 mt-3">
            {data?.map((user) => (
              <Paper className="p-2" key={user.userId}>{user.userName}</Paper>
            ))}
            </Box>
          </Box>
          <Button onClick={() => {handleClose(); handleSchedule();}} className="mt-4 w-full h-12" variant="outlined" color="primary">
            Schema maken
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default ScheduleModal;
