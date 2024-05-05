"use client";

import {
  Input,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";

import { handleSchedule } from "@/app/api/response";
import { useState } from "react";
import { ReceivedResponse } from "../response/page";
import ScheduleModal from "./ScheduleModal";

const page = () => {
  const [receivedData, setReceivedData] = useState<ReceivedResponse[]>();
  const [showTable, setShowTable] = useState(false);

  const scheduleHandler = async () => {
    const data = await handleSchedule();
    setReceivedData(data);
    setShowTable(true);
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

  // Initialize an empty object to store the tasks assigned to each user
  let userTasks: any = {};

  const tableData = receivedData
    ?.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .map((item) => {
      let randomizedUsers = [...item.availableUsers].sort(
        () => Math.random() - 0.5
      );
      const date = new Date(item.date);
      const day = date.getDate();
      const weekDay = date.toLocaleString("default", { weekday: "long" });
      const month = date.toLocaleString("default", { month: "long" });
      const tableDate = `${weekDay} ${day} ${month}`;

      // Assign tasks to users
      const tasks = ["audio", "video", "podium", "invaller"];
      const assignedUsers: any = {};

      for (let task of tasks) {
        for (let user of randomizedUsers) {
          const userName = user.userName.split(" ")[0];

          // If the user hasn't been assigned this task yet, assign it to them
          if (!userTasks[userName] || !userTasks[userName].includes(task)) {
            assignedUsers[task] = userName;

            // Add the task to the user's list of assigned tasks
            if (userTasks[userName]) {
              userTasks[userName].push(task);
            } else {
              userTasks[userName] = [task];
            }

            // Remove the user from the list of available users
            randomizedUsers = randomizedUsers.filter((u) => u !== user);

            break;
          }
        }
      }

      return createData(
        `${tableDate}`,
        `${assignedUsers["audio"]}`,
        `${assignedUsers["video"]}`,
        `${assignedUsers["podium"]}`,
        `${assignedUsers["invaller"]}`
      );
    });

  return (
    <>
      <section className="mt-10 w-11/12 flex flex-col gap-5">
        <article className="flex justify-end items-end self-end">
          <ScheduleModal handleSchedule={scheduleHandler} />
        </article>
        {showTable && (
          <TableContainer className="mt-10" component={Paper}>
            <Table className="bg-primary" aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className="font-bold text-[16px]">
                    Datums
                  </TableCell>
                  <TableCell className="font-bold text-[16px]" align="center">
                    <input
                      className="outline-none max-w-15"
                      placeholder={"Video"}
                    />
                  </TableCell>
                  <TableCell className="font-bold text-[16px]" align="center">
                    <input
                      className="outline-none max-w-15"
                      placeholder={"Audio"}
                    />
                  </TableCell>
                  <TableCell className="font-bold text-[16px]" align="center">
                    <input
                      className="outline-none max-w-15"
                      placeholder={"Podium"}
                    />
                  </TableCell>
                  <TableCell className="font-bold text-[16px]" align="center">
                    <input
                      className="outline-none max-w-15"
                      placeholder={"Invaller"}
                    />
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tableData?.map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      className="text-[16px]"
                      component="th"
                      scope="row"
                    >
                      {row.date}
                    </TableCell>
                    <TableCell className="text-[16px]" align="center">
                      <input
                        className="outline-none max-w-15"
                        placeholder={row.video}
                      />
                    </TableCell>
                    <TableCell className="text-[16px]" align="center">
                      <input
                        className="outline-none max-w-15"
                        placeholder={row.audio}
                      />
                    </TableCell>
                    <TableCell className="text-[16px]" align="center">
                      <input
                        className="outline-none max-w-15"
                        placeholder={row.podium}
                      />
                    </TableCell>
                    <TableCell className="text-[16px]" align="center">
                      <input
                        className="outline-none max-w-15"
                        placeholder={row.invaller}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </section>
    </>
  );
};

export default page;
