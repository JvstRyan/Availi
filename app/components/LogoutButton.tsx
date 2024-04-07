'use client'
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import { RiLogoutBoxLine } from "react-icons/ri";
import { logout } from "../api/auth";
import { useRouter } from "next/navigation";


const LogoutButton = () => {

  const router = useRouter()

  const handleLogout= () => 
  {
    logout()
    router.push('/')
  }
    
  return (
    <>
      <ListItemButton
        onClick={handleLogout}
        sx={{ "&:hover": { backgroundColor: "#313131" } }}
      >
        <ListItemIcon>
          <RiLogoutBoxLine size={"25px"} color="white" />
        </ListItemIcon>
        <ListItemText primary="Uitloggen" />
      </ListItemButton>
    </>
  );
};

export default LogoutButton;
