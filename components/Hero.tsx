import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col justify-center gap-8 items-center bg-whitesmoke mt-10 p-32 ml-[10%] mr-[10%] rounded-lg mb-10">
      <h1 className="text-6xl text-center font-semibold leading-tight tracking-normal">
        Creëer <span className="gradient-text font-bold"> razendsnel </span>
        <br></br>
        schema&apos;s op basis van de <br></br>
        <span className="gradient-text font-bold">availi-bility</span> van je
        collega&apos;s.
      </h1>
      <p className="text-center text-xl">
        Availi is een razendsnel schemabuilder dat <br></br> gebaseerd is op de
        beschikbaarheid van je collegas
      </p>
      <Link href="/Dashboard/survey">
      <Button
        variant="outlined"
        color="secondary"
        className="bg-gradient-primary w-60 h-12 font-bold mt-5 rounded-md text-md"
      >
        Start hier
      </Button>
      </Link>
    </section>
  );
};

export default Hero;
