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
      toast.error(`Account already exists`, { duration: 5000, position: "top-center" });
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
          color="secondary"
          type="text"
          className="w-96"
          placeholder="Vul je volledige naam in"
          onChange={(e) => setRegisterName(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FaUserLarge size={"18px"} color="#526BA1" />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
        <TextField
          required
          color="secondary"
          type="email"
          className="w-96"
          placeholder="Vul je email in"
          onChange={(e) => setRegisterEmail(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MdEmail size={"22px"} color="#526BA1" />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
        <TextField
          required
          color="secondary"
          type="password"
          className="w-96"
          onChange={(e) => setRegisterPassword(e.target.value)}
          placeholder="Maak een wachtwoord aan"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IoLockClosedSharp size={"21px"} color="#526BA1" />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />

        <Button
          variant="contained"
          color="secondary"
          className="bg-accent h-10 w-96 mt-5"
          type="submit"
        >
          Registreren
        </Button>
      </form>
    </>
  );
};

export default RegistrationForm;
