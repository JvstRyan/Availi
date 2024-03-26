
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Avatar, ListItem, ListItemAvatar, Typography } from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import { BsHouseDoor } from "react-icons/bs";
import { AiOutlineAudio } from "react-icons/ai";
import { FaRegPaperPlane } from "react-icons/fa";
import { PiUsers } from "react-icons/pi";
import { IoIosCheckboxOutline } from "react-icons/io";
import { RiLogoutBoxLine } from "react-icons/ri";




export default function SideBar() {


const drawerWidth = 300;

const listItems = [
  { icon: <BsHouseDoor size={"25px"} color="white" />, text: "Overzicht"},
  {
    icon: <AiOutlineAudio size={"25px"} color="white" />,
    text: "Audio / Video", 
  },
  {
    icon: <FaRegPaperPlane size={"22px"} color="white" />,
    text: "Nieuw schema", 
  },
  { icon: <PiUsers size={"24px"} color="white" />, text: "Gebruikers",  },
  {
    icon: <IoIosCheckboxOutline size={"25px"} color="white" />,
    text: "Aanwezigen", 
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
            className="font-bold text-4xl p-7 text-white"
          >
            <span className="text-accent">Plan</span>
            It
          </Typography>
          <List component="nav" sx={{ color: "white" }}>
            {listItems.map((item, index) => (
              <ListItemButton
                key={index}
                sx={{ "&:hover": { backgroundColor: "#313131"} }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
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
            <ListItemButton sx={{ "&:hover": { backgroundColor: "#313131" } }}>
              <ListItemIcon>
                <RiLogoutBoxLine size={"25px"} color="white" />
              </ListItemIcon>
              <ListItemText primary="Uitloggen" />
            </ListItemButton>
            <ListItem sx={{ marginTop: "5px" }}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: "#526BA1", width: 40, height: 40 }}>
                  RH
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                    
                  <Typography
                    component="span"
                    color="white"
                    fontWeight={"bold"}
                  >
                    Ryan Horrmann
                  </Typography>
                }
                secondary={
                  <Typography component="span" variant="body2" color="#ABAAAA">
                    ryanhorrmann@gmail.com
                  </Typography>
                }
              ></ListItemText>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}

