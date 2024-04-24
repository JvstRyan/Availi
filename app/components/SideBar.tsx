import { Paper, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import dynamic from "next/dynamic";
import Link from "next/link";
import { AiOutlineAudio } from "react-icons/ai";
import { BsHouseDoor } from "react-icons/bs";
import { FaRegPaperPlane } from "react-icons/fa";
import { IoIosCheckboxOutline } from "react-icons/io";
import { PiUsers } from "react-icons/pi";
import LogoutButton from "./LogoutButton";
import Image from "next/image";

export default function SideBar() {
  const DynamicProfile = dynamic(() => import("./Profile"), { ssr: false });
  const drawerWidth = 300;
  const listItems = [
    {
      icon: <BsHouseDoor size={"25px"} color="black" />,
      text: "Overzicht",
      link: "/dashboard",
    },
    {
      icon: <AiOutlineAudio size={"25px"} color="black" />,
      text: "Audio / Video",
      link: "/dashboard/survey",
    },
    {
      icon: <FaRegPaperPlane size={"22px"} color="black" />,
      text: "Nieuw schema",
      link: "/dashboard/schedule",
    },
    {
      icon: <PiUsers size={"24px"} color="black" />,
      text: "Gebruikers",
      link: "/dashboard/users",
    },
    {
      icon: <IoIosCheckboxOutline size={"25px"} color="black" />,
      text: "Aanwezigen",
      link: "/dashboard/response",
    },
  ];
  return (
    <Paper sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      ></AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Box>
          <article className="flex justify-start items-center pl-7  mt-8 mb-10 ">
          <Image draggable={false} src="/logo.svg" alt={"logo"} width={200} height={100} />
          </article>
          <List component="nav" sx={{ color: "black" }}>
            {listItems.map((item, index) => (
              <Link href={item.link}>
                <ListItemButton
                  key={index}
                  sx={{ "&:hover": { backgroundColor: "#ffff0" } }}
                >
                  <ListItemIcon sx={{ marginLeft: "25px" }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </Link>
            ))}
          </List>
        </Box>
        <Box>
          <Divider sx={{ backgroundColor: "#646464" }} />
          <List
            component="nav"
            sx={{
              color: "white",
              display: "flex",
              flexDirection: "column",
              marginTop: "5px",
            }}
          >
            <LogoutButton />
            <DynamicProfile />
          </List>
        </Box>
      </Drawer>
    </Paper>
  );
}
