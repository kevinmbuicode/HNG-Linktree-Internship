import { Box } from "@mui/material";
import React from "react";
import LinksSection from "./linksSection";
import ProfileSection from "./profileSection";

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        // justifyContent: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <ProfileSection />
      <LinksSection />
    </Box>
  );
};

export default Home;
