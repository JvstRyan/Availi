"use client";

import useUserStore from "@/stores/userStore";
import {
  Avatar,
  Box,
  CircularProgress,
  ListItem,
  ListItemAvatar,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

const Profile = () => {
  const [isClient, setIsClient] = useState(false);
  const user = useUserStore((state) => state.user);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient || !user) {
    return (
      <div className="p-3">
        {" "}
        <CircularProgress color="info" />{" "}
      </div>
    );
  }

  const splitName = user.userName.split(" ");
  const initials =
    splitName.length > 1
      ? `${splitName[0][0]}${splitName[splitName.length - 1][0]}`
      : `${splitName[0][0]}`;

  return (
    <>
      <ListItem sx={{ marginTop: "5px" }}>
        <ListItemAvatar>
          <Avatar className="bg-gradient-primary w-[40px] h-[40px] text-white">
            {initials}
          </Avatar>
        </ListItemAvatar>
        <Box className="flex flex-col -gap-10">
          <Typography
            component="span"
            variant="body1"
            noWrap
            color="black"
            fontWeight={"semi-bold"}
          >
            {user.userName}
          </Typography>

          <Typography component="span" noWrap variant="body2" color="black">
            {user.userEmail}
          </Typography>
        </Box>
      </ListItem>
    </>
  );
};

export default Profile;
