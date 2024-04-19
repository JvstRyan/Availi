"use client";

import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { ReceivedResponse } from "../response/page";

const page = () => {
  const [receivedData, setReceivedData] = useState<ReceivedResponse[]>();

  const handleSchedule = async () => {
    try {
      const response = await axios.get(`https://localhost:7220/api/Response`);
      if (response && response.data) setReceivedData(response.data);
      else throw new Error("Fetching of responses failed");
    } catch (error) {
      console.error(error);
    }
  };

  function createData(
    date: string,
    audio: string,
    video: string,
    podium: string,
    invaller?: string | undefined
  ) {
    return { date, audio, video, podium, invaller };
  }

  const tableData = receivedData?.map((item) => {
    const randomizedUsers = [...item.availableUsers].sort(
      () => Math.random() - 0.5
    );
    const date = new Date(item.date);
    const day = date.getDate();
    const weekDay = date.toLocaleString("default", { weekday: "long" });
    const month = date.toLocaleString("default", { month: "long" });
    const tableDate = `${weekDay} ${day} ${month}`;

    return createData(
      `${tableDate}`,
      `${randomizedUsers[3]?.userName.split(" ")[0]}`,
      `${randomizedUsers[0]?.userName.split(" ")[0]}`,
      `${randomizedUsers[2]?.userName.split(" ")[0]}`,
      `${randomizedUsers[1]?.userName.split(" ")[0]}`
    );
  });

  return (
    <>
      <section className="mt-10 w-11/12 flex flex-col gap-5 mb-10">
        <article className="flex justify-end items-end self-end">
          <Button onClick={handleSchedule} variant="outlined" color="secondary">
            Nieuwe Schema
          </Button>
        </article>
        <TableContainer className="mt-10" component={Paper}>
          <Table className="bg-primary" aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className="font-bold text-lg">Datums</TableCell>
                <TableCell className="font-bold text-lg" align="right">
                  Video
                </TableCell>
                <TableCell className="font-bold text-lg" align="right">
                  Audio
                </TableCell>
                <TableCell className="font-bold text-lg" align="right">
                  Podium
                </TableCell>
                <TableCell className="font-bold text-lg" align="right">
                  Invaller
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData?.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell className="text-lg" component="th" scope="row">
                    {row.date}
                  </TableCell>
                  <TableCell className="text-lg" align="right">
                    {row.video}
                  </TableCell>
                  <TableCell className="text-lg" align="right">
                    {row.audio}
                  </TableCell>
                  <TableCell className="text-lg" align="right">
                    {row.podium}
                  </TableCell>
                  <TableCell className="text-lg" align="right">
                    {row.invaller}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </section>
    </>
  );
};

export default page;
