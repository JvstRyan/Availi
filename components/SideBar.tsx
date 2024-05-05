"use client";
import { listItems } from "@/constants";
import { Paper } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoutButton from "./LogoutButton";
import Profile from "./Profile";
import withAuth from "@/app/auth/withAuth";

const SideBar = () => {
  const drawerWidth = 300;
  const pathname = usePathname();

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
          <article className="flex justify-start items-center pl-10  mt-8 mb-10 ">
            <Image
              draggable={false}
              src="/availi.svg"
              alt={"logo"}
              width={160}
              height={100}
            />
          </article>
          <List component="nav">
            <ul className="flex flex-col gap-3">
              {listItems.map((item, index) => {
                const isActive = item.link === pathname;
                const Icon = item.icon;
                return (
                  <Link href={item.link}>
                    <ListItemButton
                      key={index}
                      className={` p-3 ${
                        isActive ? "bg-gradient-primary" : "text-black"
                      }`}
                    >
                      <ListItemIcon className="ml-[25px]">
                        <Icon
                          size={"25px"}
                          color={`${isActive ? "white" : "black"}`}
                        />
                      </ListItemIcon>
                      <p
                        className={` text-md ${
                          isActive ? "text-white font-bold" : "text-black"
                        }`}
                      >
                        {item.text}
                      </p>
                    </ListItemButton>
                  </Link>
                );
              })}
            </ul>
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
            <Profile />
          </List>
        </Box>
      </Drawer>
    </Paper>
  );
}

export default withAuth(SideBar);