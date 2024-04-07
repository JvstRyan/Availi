"use client"

import useUserStore from "@/userStore";
import { ListItem, ListItemAvatar, Avatar, ListItemText, Typography, Box } from "@mui/material";
import React from "react";


const Profile = () => {

    const user = useUserStore((state) => state.user);

    const splitName = user?.userName.split(' ');
    let initials = '';
    if (splitName) {
        initials = splitName.length > 1  ? `${splitName[0][0]}${splitName[splitName.length - 1][0]}` : `${splitName[0][0]}`;
    }
     
  
    
  return (
    <>
      <ListItem sx={{ marginTop: "5px" }}>
        <ListItemAvatar>
          <Avatar
            sx={{
              color: "white",
              bgcolor: "#526BA1",
              width: 40,
              height: 40,
            }}
          >
            {initials}
          </Avatar>
        </ListItemAvatar>
        <Box className="flex flex-col -gap-10">
            <Typography component="span" variant="body1" noWrap color="white" fontWeight={"bold"}>
              {user?.userName}
            </Typography>
    
            <Typography component="span" noWrap variant="body2" color="#ABAAAA">
              {user?.userEmail}
            </Typography>
        </Box>
      </ListItem>
    </>
  );
};

export default Profile;
