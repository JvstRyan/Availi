"use client"

import useUserStore from "@/userStore";
import { Avatar, Box, ListItem, ListItemAvatar, Typography } from "@mui/material";
import React from "react";

const Profile = React.memo(() => {

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
            className="bg-gradient-primary w-[40px] h-[40px] text-white"
          >
            {initials}
          </Avatar>
        </ListItemAvatar>
        <Box className="flex flex-col -gap-10">
            <Typography component="span" variant="body1" noWrap color="black" fontWeight={"semi-bold"}>
              {user?.userName}
            </Typography>
    
            <Typography component="span" noWrap variant="body2" color="black">
              {user?.userEmail}
            </Typography>
        </Box>
      </ListItem>
    </>
  );
});

export default Profile;