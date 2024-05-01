import { GrSchedules } from "react-icons/gr";
import { IoIosCheckboxOutline } from "react-icons/io";
import { LuListTodo } from "react-icons/lu";
import { PiUsers } from "react-icons/pi";

export const listItems = [
    {
      icon: LuListTodo,
      text: "Enquête",
      link: "/dashboard/survey",
    },
    {
      icon: GrSchedules,
      text: "Schema",
      link: "/dashboard/schedule",
    },
    {
      icon: PiUsers,
      text: "Gebruikers",
      link: "/dashboard/users",
    },
    {
      icon: IoIosCheckboxOutline,
      text: "Aanwezigen",
      link: "/dashboard/response",
    },
];