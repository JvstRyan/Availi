import { registerUsers } from "@/app/api/auth";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import * as React from "react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const UserCreationModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

 const [registerName, setRegisterName] = useState('')
 const [registerEmail, setRegisterEmail] = useState('')
 const [registerPassword, setRegisterPassword] = useState('')

 const queryClient = useQueryClient()

 const mutation = useMutation
 ({
    mutationFn: registerUsers,
    onSuccess: () => 
    {
        queryClient.invalidateQueries({queryKey: ['users']})
        toast.success('Gebruiker is aangemaakt', {duration: 4000, position: 'bottom-right'})
        setRegisterName('')
        setRegisterEmail('')
        setRegisterPassword('')
    },
    onError: (error) => 
    {
        toast.error(`${error}`, {duration: 5000, position: 'bottom-right'})
    }
 })

 const newUser = () => 
 {
    mutation.mutate({body: {name: registerName, email: registerEmail, password: registerPassword}})
    handleClose()
 }

  return (
    <div>
      <Toaster />
      <Button onClick={handleOpen} variant="outlined" color="secondary">
        Nieuwe Gebruiker
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box className="absolute top-1/4 left-2/4 -translate-x-10 -translate-y-10 w-1/4 p-10  bg-secondary">
          <form
            onSubmit={(e) => {e.preventDefault(); newUser();}}
            className="flex flex-col justift-center items-center gap-5 "
          >
            <TextField
              required
              color="secondary"
              label="Gebruikers naam"
              variant="outlined"
              className="w-full"
              onChange={(e) => setRegisterName(e.target.value)}
              
            />
            <TextField
              required
              className="w-full"
              color="secondary"
              label="Email"
              variant="outlined"
              type="email"
              onChange={(e) => setRegisterEmail(e.target.value)}
            />
           <TextField
              required
              className="w-full"
              color="secondary"
              label="Wachtwoord"
              variant="outlined"
              type="password"
              onChange={(e) => setRegisterPassword(e.target.value)}
            />
            <Button
              className="w-full h-12 mt-5"
              variant="outlined"
              color="secondary"
              type="submit"
            >
              Gebruiker aanmaken
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default UserCreationModal;
