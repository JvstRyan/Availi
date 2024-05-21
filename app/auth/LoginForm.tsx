import { checkAuth, loginUsers } from "@/app/api/auth";
import { Box, Button, InputAdornment, TextField } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { hasAnswered } from "../api/response";

const LoginForm = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const router = useRouter();

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: loginUsers,
    onSuccess: async () => {
      const isAuthenticated = await checkAuth();
      console.log()
      if (isAuthenticated) {
        toast.success("Je bent ingelogd", {
          duration: 5000,
          position: "top-center",
        });
        router.push("/dashboard/survey");
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
          color="primary"
          className="w-96"
          type="email"
          label="Email"
          onChange={(e) => setLoginEmail(e.target.value)}
        />
        <TextField
          required
          color="primary"
          className="w-96"
          type="password"
          label="Wachtwoord"
          onChange={(e) => setLoginPassword(e.target.value)}
        />
        <Button
          variant="contained"
          color="secondary"
          className="bg-gradient-primary font-bold text-white h-12 w-96 mt-5"
          type="submit"
        >
          Inloggen
        </Button>
      </Box>
    </>
  );
};

export default LoginForm;
