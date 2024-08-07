"use client";

import { Box, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Image from "next/image";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";
import Link from "next/link";

export default function Login() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  return (
    <>
      <Toaster />
      {isLoggingIn ? (
        <Box className="flex justify-center items-center h-screen">
          <CircularProgress />
        </Box>
      ) : (
        <Box
          component="section"
          className="flex flex-col items-center justify-center min-h-screen"
        >
          <article className="flex flex-col items-center justify-center shadow-xl p-10 rounded-lg">
            <Link href="/">
              <Image src="/availi.svg" alt="logo" width={180} height={100} />
            </Link>
            {isRegistering ? (
              <RegistrationForm setIsRegistering={setIsRegistering} />
            ) : (
              <LoginForm setLoggingIn={setIsLoggingIn} />
            )}
            <Typography component={"p"} fontSize={"15px"} className="mt-10">
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
          </article>
        </Box>
      )}
    </>
  );
}
