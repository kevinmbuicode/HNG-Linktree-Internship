import { Avatar, Box, Typography } from "@mui/material";
// import { MoreHoriz, Share } from "@mui/icons-material";
import React from "react";

const ProfileSection = () => {

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            marginBottom: 2,
            marginTop: 3,
          }}
        >
          <Avatar
            id="profile__img"
            alt="KM"
            src="./images/myPhoto.jpg"
            sx={{ height: 100, width: 100 }}
          />
          <Typography id="twitter" variant="h5">
            Kevin Mbui
          </Typography>
          <Typography id="slack" variant="h6" sx={{ display: "none" }}>
            Kevin Mbui
          </Typography>
        </Box>
      </Box>
      {/* <Box sx={{ display: {xs: "block", sm: "none"}}}>
        <MoreHoriz />
      </Box>
      <Box sx={{ display: {xs: "none", sm: "none", md: "block"}}}>
        <Share />
      </Box>  */}
    </Box>
  );
};

export default ProfileSection;
