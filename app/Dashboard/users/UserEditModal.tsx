import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { FaEdit } from "react-icons/fa";
import { Users } from "@/app/api/users";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";

const UserEditModal = ({ name, email, roles, id }: Users) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [role, setRole] = useState(roles);

  return (
    <div>
      <Button onClick={handleOpen}>
        <FaEdit color="white" size={"22px"} />
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box className="absolute top-1/4 left-2/4 -translate-x-10 -translate-y-10 w-1/4 p-10  bg-secondary">
          <form className="flex flex-col justift-center items-center gap-5 ">
            <TextField
              color="secondary"
              label="Gebruikers naam"
              variant="outlined"
              className="w-full"
              placeholder={name}
            />
            <TextField
              className="w-full"
              color="secondary"
              label="Email"
              variant="outlined"
              placeholder={email}
            />
            <Select
              value={role}
              className="w-full"
              color="secondary"
              onChange={(e) => setRole(e.target.value)}
            >
              <MenuItem value={"volunteer"}>volunteer</MenuItem>
              <MenuItem value={"admin"}>admin</MenuItem>
              <MenuItem value={"guest"}>guest</MenuItem>
            </Select>
            <Button className="w-full h-12 mt-5" variant="outlined" color="secondary">
              Gebruiker updaten
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default UserEditModal;
