import { GrSchedules } from "react-icons/gr";
import { IoIosCheckboxOutline } from "react-icons/io";
import { LuListTodo } from "react-icons/lu";
import { PiUsers } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs"
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaGlobe } from "react-icons/fa";

export const listItems = [
    {
      icon: LuListTodo,
      text: "Beschikbaarheid",
      link: "/dashboard/survey",
      role: ["volunteer", "admin"]
    },
    {
      icon: GrSchedules,
      text: "Schema",
      link: "/dashboard/schedule",
      role: ["admin"]
    },
    {
      icon: PiUsers,
      text: "Gebruikers",
      link: "/dashboard/users",
      role: ["admin"]
    },
    {
      icon: IoIosCheckboxOutline,
      text: "Aanwezigen",
      link: "/dashboard/response",
      role: ["admin"]
    },
];


export const contactItems = 
[
{
    icon: FaLocationDot,
    header: 'Adres',
    text: '5034BG Eikenweg, Eindhoven NL'
},
{
    icon: BsFillTelephoneFill,
    header: 'Telefoon',
    text: '+31 6 13578361'
},
{
    icon: MdOutlineAlternateEmail,
    header: 'Email',
    text: 'info@gmail.com'
},
{
    icon: FaGlobe,
    header: 'Website',
    text: 'availi.com'
},

]