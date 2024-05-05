import { registerUsers } from "@/app/api/auth";
import { Button, InputAdornment, TextField } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaUserLarge } from "react-icons/fa6";
import { IoLockClosedSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

type registering = {
  setIsRegistering: (value: boolean) => void;
};

const RegistrationForm = ({ setIsRegistering }: registering) => {
  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: registerUsers,
    onSuccess: () => {
      toast.success("Registreren gelukt", {
        duration: 5000,
        position: "bottom-right",
      });

      setRegisterName("");
      setRegisterEmail("");
      setRegisterPassword("");

      setIsRegistering(false);

      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (error) => {
      toast.error(`Account already exists`, {
        duration: 5000,
        position: "top-center",
      });
    },
  });

  const newUser = () => {
    mutation.mutate({
      body: {
        name: registerName,
        email: registerEmail,
        password: registerPassword,
      },
    });
  };
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          newUser();
        }}
        className="flex flex-col items-center mt-10 gap-8"
      >
        <TextField
          required
          color="primary"
          type="text"
          className="w-96"
          label="Gebruikers naam"
          onChange={(e) => setRegisterName(e.target.value)}
        />
        <TextField
          required
          color="primary"
          className="w-96"
          type="email"
          label="Email"
          onChange={(e) => setRegisterEmail(e.target.value)}
        />
        <TextField
          required
          color="primary"
          className="w-96"
          type="password"
          label="Wachtwoord"
          onChange={(e) => setRegisterPassword(e.target.value)}
        />

        <Button
          variant="contained"
          color="secondary"
          className="bg-gradient-primary text-white font-bold h-12 w-96 mt-5"
          type="submit"
        >
          Registreren
        </Button>
      </form>
    </>
  );
};

export default RegistrationForm;
