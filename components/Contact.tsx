"use client";
import { Box, Button, TextareaAutosize, TextField } from "@mui/material";
import React from "react";

const Contact = () => {
  return (
    <>
      <section className="flex justify-center items-center p-20 mt-10 ">
        <h1 className="text-5xl font-semibold">
          <span className="gradient-text font-bold">Vragen?</span> Stel ze
          gerust!
        </h1>
      </section>
      <main className="flex justify-center items-center p-20">
        <article className="flex flex-col gap-5 shadow-xl p-14 rounded-lg">
          <h2 className="text-2xl font-medium">Get in touch</h2>
          <Box
            component="form"
            onClick={(e) => e.preventDefault()}
            className="flex flex-col gap-5"
          >
            <Box component={"article"} className="flex gap-4">
              <TextField
                variant="outlined"
                color="primary"
                label="Gebruikers naam"
              ></TextField>
              <TextField
                variant="outlined"
                color="primary"
                label="Email"
              ></TextField>
            </Box>
            <TextField
              variant="outlined"
              color="primary"
              label="Onderwerp"
            ></TextField>
            <textarea
              placeholder="Bericht..."
              className="focus:outline-none border-solid border rounded-sm border-formbord pl-3 pt-3 "
            />
            <Button variant="outlined" color="secondary" className="bg-gradient-primary h-10 w-40 font-bold">
                Verzenden
            </Button>
          </Box>
        </article>
        <article className="flex flex-col gap-5 shadow-xl p-10 rounded-lg bg-gradient-primary w-96">
            <h2 className="text-2xl font-medium text-white">Contact</h2>
            
        </article>
      </main>
    </>
  );
};

export default Contact;
