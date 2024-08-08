"use client";
import { contactItems } from "@/constants";
import { Box, Button, TextField } from "@mui/material";
import emailjs from "@emailjs/browser";
import { FormEvent, useRef } from "react";
import toast from "react-hot-toast";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID || "default",
          process.env.NEXT_PUBLIC_CONTACT_ID || "default",
          form.current,
          {
            publicKey: process.env.NEXT_PUBLIC_ID,
          }
        )
        .then(
          () => {
            toast.success("Email verstuurd!", {
              duration: 5000,
              position: "top-center",
            });
            if (form.current) form.current.reset();
          },
          (error) => {
            toast.error("Iets ging er mis, probeer het opnieuw.", {
              duration: 5000,
              position: "top-center",
            });
          }
        );
    }
  };

  return (
    <>
      <section className="flex justify-center items-center p-20 mt-10 ">
        <h1 className="text-5xl font-semibold">
          <span className="gradient-text font-bold">Vragen?</span> Stel ze
          gerust!
        </h1>
      </section>
      <main className="flex justify-center items-center p-20">
        <article className="flex flex-col gap-5 shadow-xl p-14 rounded-tl-lg rounded-bl-lg">
          <h2 className="text-2xl font-medium">Get in touch</h2>
          <Box
            component="form"
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col gap-5"
          >
            <Box component={"article"} className="flex gap-4">
              <TextField
                variant="outlined"
                color="primary"
                label="Naam"
                type="text"
                name="user_name"
              ></TextField>
              <TextField
                variant="outlined"
                color="primary"
                label="Email"
                type="email"
                name="user_email"
              ></TextField>
            </Box>
            <TextField
              variant="outlined"
              color="primary"
              label="Onderwerp"
              type="text"
              name="subject"
            ></TextField>
            <textarea
              placeholder="Bericht..."
              className="focus:outline-none border-solid border rounded-sm border-formbord pl-3 pt-3 "
              name="message"
            />
            <Button
              variant="outlined"
              type="submit"
              color="secondary"
              className="bg-gradient-primary h-10 w-40 font-bold"
            >
              Verzenden
            </Button>
          </Box>
        </article>
        <article className="flex flex-col gap-10 shadow-xl p-10 rounded-lg bg-gradient-primary w-96 mt-5">
          <h2 className="text-2xl font-medium text-white">Contact</h2>
          {contactItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex gap-4 items-center">
                <div className="bg-iconbg p-4 rounded-xl">
                  <Icon size={22} color="white" />
                </div>
                <p className="text-white">
                  <span className="font-bold">{item.header}</span>: {item.text}
                </p>
              </div>
            );
          })}
        </article>
      </main>
    </>
  );
};

export default Contact;
