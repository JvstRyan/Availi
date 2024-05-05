"use client";

import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import RegistrationForm from "./RegistrationForm";
import LoginForm from "./LoginForm";
import Image from "next/image";

export default function Login() {
  const [isRegistering, setIsRegistering] = useState(false);

  return (
    <>
      <Toaster />
      <Box
        component="section"
        className="flex flex-col items-center justify-center min-h-screen"
      >
        <Image src="/availi.svg" alt="logo" width={180} height={100}/>
        {isRegistering ? (
          <RegistrationForm setIsRegistering={setIsRegistering} />
        ) : (
          <LoginForm />
        )}
        <Typography
          component={"p"}
          fontSize={"15px"}
          className="mt-10"
        >
          {isRegistering ? "Heb je al een account?" : "Nog geen account?"}
          <span
            onClick={
              isRegistering
                ? () => setIsRegistering(false)
                : () => setIsRegistering(true)
            }
            className="font-bold gradient-text cursor-pointer ml-1"
          >
            {isRegistering ? "Inloggen" : "Registreren"}
          </span>
        </Typography>
      </Box>
    </>
  );
}
