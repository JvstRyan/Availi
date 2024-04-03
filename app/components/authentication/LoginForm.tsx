import {
  Box,
  TextField,
  InputAdornment,
  Typography,
  Button,
} from "@mui/material";
import React from "react";
import { IoLockClosedSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const LoginForm = () => {
  return (
    <>
      <Box
        component={"form"}
        className="flex flex-col items-center mt-10 gap-8"
      >
        <TextField
          required
          color="secondary"
          className="w-96"
          placeholder="Email"
          type="email"
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
