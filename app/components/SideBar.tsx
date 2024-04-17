import { Avatar, ListItem, ListItemAvatar, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link";
import { AiOutlineAudio } from "react-icons/ai";
import { BsHouseDoor } from "react-icons/bs";
import { FaRegPaperPlane } from "react-icons/fa";
import { IoIosCheckboxOutline } from "react-icons/io";
import { PiUsers } from "react-icons/pi";
import LogoutButton from "./LogoutButton";
import dynamic from "next/dynamic";

export default function SideBar() {
  const DynamicProfile = dynamic(() => import("./Profile"), { ssr: false });
  const drawerWidth = 300;
  const listItems = [
    {
      icon: <BsHouseDoor size={"25px"} color="white" />,
      text: "Overzicht",
      link: "/dashboard",
    },
    {
      icon: <AiOutlineAudio size={"25px"} color="white" />,
      text: "Audio / Video",
      link: "/dashboard/survey",
    },
    {
      icon: <FaRegPaperPlane size={"22px"} color="white" />,
      text: "Nieuw schema",
      link: "/dashboard/survey",
    },
    {
      icon: <PiUsers size={"24px"} color="white" />,
      text: "Gebruikers",
      link: "/dashboard/users",
    },
    {
      icon: <IoIosCheckboxOutline size={"25px"} color="white" />,
      text: "Aanwezigen",
      link: "/dashboard/response",
    },
  ];
  return (
    <Box sx={{ display: "flex" }}>
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
            backgroundColor: "#181818",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Box>
          <Typography
            variant="h1"
            sx={{
              fontWeight: "bold",
              fontSize: "38px",
              padding: "20px",
              color: "white",
            }}
          >
            <span className="text-accent">Plan</span>
            It
          </Typography>
          <List component="nav" sx={{ color: "white" }}>
            {listItems.map((item, index) => (
              <Link href={item.link}>
                <ListItemButton
                  key={index}
                  sx={{ "&:hover": { backgroundColor: "#313131" } }}
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
    </Box>
  );
}
