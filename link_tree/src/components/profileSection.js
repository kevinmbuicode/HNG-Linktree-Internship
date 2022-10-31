import { Avatar, Box, Typography } from "@mui/material";
import React from "react";

const ProfileSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginBottom: 2,
        marginTop: 3
      }}
    >
      <Avatar id="profile__img" alt="KM" src="./images/myPhoto.jpg" sx={{ height: 100, width: 100}}/>
      <Typography id="twitter" variant="h5">
        Kevin Mbui
      </Typography>
      <Typography id="slack" variant="h6" sx={{ display: "none" }}>
        Kevin Mbui
      </Typography>
      <Box></Box>
    </Box>
  );
};

export default ProfileSection;
