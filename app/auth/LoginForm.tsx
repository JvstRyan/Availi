import {
  Box,
  TextField,
  InputAdornment,
  Typography,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import { IoLockClosedSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { useRouter } from "next/navigation";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import toast, { Toaster } from "react-hot-toast";
import { checkAuth, loginUsers } from "@/app/api/auth";

const LoginForm = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const router = useRouter();


  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: loginUsers,
    onSuccess: async () => {

      const isAuthenticated = await checkAuth();

      if (isAuthenticated) 
      {
        toast.success("Je bent ingelogd", {
          duration: 5000,
          position: "top-center",
        });

        router.push('/dashboard/survey')
      }

      setLoginEmail("");
      setLoginPassword("");
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: () => {
      toast.error("Email of watchwoord klopt niet.", {
        duration: 5000,
        position: "top-center",
      });
    },
  });

  const loginUser = () => {
    mutation.mutate({ body: { email: loginEmail, password: loginPassword } });
  };

  return (
    <>
      <Toaster />
      <Box
        component={"form"}
        className="flex flex-col items-center mt-10 gap-8"
        onSubmit={(e) => {
          e.preventDefault();
          loginUser();
        }}
      >
        <TextField
          required
          color="secondary"
          className="w-96"
          placeholder="Email"
          type="email"
          onChange={(e) => setLoginEmail(e.target.value)}
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
          className="w-96"
          placeholder="Wachtwoord"
          type="password"
          onChange={(e) => setLoginPassword(e.target.value)}
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
          Inloggen
        </Button>
      </Box>
    </>
  );
};

export default LoginForm;
