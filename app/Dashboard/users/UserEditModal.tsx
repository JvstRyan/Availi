import { updateUsers, Users } from "@/app/api/users";
import { MenuItem, Select, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import * as React from "react";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaEdit } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const UserEditModal = ({ name, email, roles, id }: Users) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [updatedRole, setUpdatedRole] = useState(roles);
  const [updatedName, setUpdatedName] = useState(name);
  const [updatedEmail, setUpdatedEmail] = useState(email);

  const [isChanged, setIsChanged] = useState(false);

  useEffect(() => {
    if (updatedName !== name || updatedEmail !== email || updatedRole !== roles) {
      setIsChanged(true)
    } else {
      setIsChanged(false);
    }
  }, [updatedName, updatedEmail, updatedRole, name, email, roles]);

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: updateUsers,
    onSuccess: () => {
      handleClose();
      queryClient.invalidateQueries({ queryKey: ["users"] });
      toast.success("Gebruiker is aangepast", {duration: 4000, position: "bottom-right" })
      setUpdatedRole('')
      setUpdatedName('')
      setUpdatedEmail('')
    },
  });

  const handleUpdate = () => 
  {
  const updatedData: Partial<Users> = {};

  if (updatedName !== name) 
  {
    updatedData.name = updatedName;
  }

  if (updatedEmail != email) 
  {
    updatedData.email = updatedEmail;
  }

  if (updatedRole !== roles) 
  {
     updatedData.roles = updatedRole
  }


  mutation.mutate({ _id: id, body: updatedData });
  }



  return (
    <div>
     <Toaster />
      <Button onClick={handleOpen}>
        <FaEdit color="black" size={"22px"} />
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box className="absolute top-1/4 left-2/4 -translate-x-10 -translate-y-10 w-1/4 p-10  bg-white">
          <form onSubmit={(e) => {e.preventDefault(); handleUpdate();}} className="flex flex-col justift-center items-center gap-5 ">
          <RxCross2 className="self-end cursor-pointer" onClick={handleClose} size={'28px'}/>
            <TextField
              color="primary"
              label="Gebruikers naam"
              variant="outlined"
              className="w-full"
              onChange={(e) => setUpdatedName(e.target.value)}
              placeholder={updatedName}
            />
            <TextField
              className="w-full"
              color="primary"
              label="Email"
              variant="outlined"
              onChange={(e) => setUpdatedEmail(e.target.value)}
              placeholder={updatedEmail}
            />
            <Select
              value={updatedRole}
              className="w-full"
              color="primary"
              onChange={(e) => setUpdatedRole(e.target.value)}
            >
              <MenuItem value={"volunteer"}>volunteer</MenuItem>
              <MenuItem value={"admin"}>admin</MenuItem>
              <MenuItem value={"guest"}>guest</MenuItem>
            </Select>
            <Button
              className="bg-gradient-primary w-full h-12 mt-3 mb-3 p-2 font-bold "
              color="secondary"
              variant="outlined"
              type="submit"
              disabled={!isChanged}
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
