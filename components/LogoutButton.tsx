"use client";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import { RiLogoutBoxLine } from "react-icons/ri";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('jwtToken')
    localStorage.removeItem('userRole')
    router.push("/auth");
  };

  return (
    <>
      <ListItemButton
        onClick={handleLogout}
        sx={{ "&:hover": { backgroundColor: "#ffff0" }, color: "black" }}
      >
        <ListItemIcon>
          <RiLogoutBoxLine size={"25px"} color="black" />
        </ListItemIcon>
        <ListItemText>Uitloggen</ListItemText>
      </ListItemButton>
    </>
  );
};

export default LogoutButton;
