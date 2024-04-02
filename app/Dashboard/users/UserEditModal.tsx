import { updateUsers, Users } from "@/app/api/users";
import { MenuItem, Select, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import * as React from "react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaEdit } from "react-icons/fa";

const UserEditModal = ({ name, email, roles, id }: Users) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [updatedRole, setUpdatedRole] = useState(roles);
  const [updatedName, setUpdatedName] = useState(name);
  const [updatedEmail, setUpdatedEmail] = useState(email);

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: updateUsers,
    onSuccess: () => {
      handleClose();
      queryClient.invalidateQueries({ queryKey: ["users"] });
      toast.success("Gebruiker is aangepast", {duration: 4000, position: "bottom-right" })
    },
  });

  const handleUpdate = () => 
  {
  mutation.mutate({ _id: id, body: {name: updatedName, email: updatedEmail, roles: updatedRole} });
  }



  return (
    <div>
     <Toaster />
      <Button onClick={handleOpen}>
        <FaEdit color="white" size={"22px"} />
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box className="absolute top-1/4 left-2/4 -translate-x-10 -translate-y-10 w-1/4 p-10  bg-secondary">
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col justift-center items-center gap-5 ">
            <TextField
              color="secondary"
              label="Gebruikers naam"
              variant="outlined"
              className="w-full"
              onChange={(e) => setUpdatedName(e.target.value)}
              placeholder={updatedName}
            />
            <TextField
              className="w-full"
              color="secondary"
              label="Email"
              variant="outlined"
              onChange={(e) => setUpdatedEmail(e.target.value)}
              placeholder={updatedEmail}
            />
            <Select
              value={updatedRole}
              className="w-full"
              color="secondary"
              onChange={(e) => setUpdatedRole(e.target.value)}
            >
              <MenuItem value={"volunteer"}>volunteer</MenuItem>
              <MenuItem value={"admin"}>admin</MenuItem>
              <MenuItem value={"guest"}>guest</MenuItem>
            </Select>
            <Button
              className="w-full h-12 mt-5"
              variant="outlined"
              color="info"
              onClick={handleUpdate}
            >
              Gebruiker updaten
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default UserEditModal;
