import { Box, Button, styled } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import './styles.css'

const LinksSection = () => {

    const CustomButton = styled(Button)({
        borderRadius: 5,
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        cursor: "pointer",
        backgroundColor: "#EAECF0",
        textDecoration: "none",
        fontWeight: 700,
        height: 70,
        color: "black",
        "&:hover": {
          backgroundColor: "#98A2B3",
          color: "white",
        },
    });

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        maxWidth: "100%",
        margin: 3,
        justifyContent: "space-between"
      }}
    >
      <CustomButton variant="contained" color="success">
        <a href="https://twitter.com/kevinmbuimushan">Twitter</a>
      </CustomButton>
      <CustomButton variant="contained" color="success">
        <a href="https://training.zuri.team/">Zuri Team</a>
      </CustomButton>
      <CustomButton id="books" variant="contained" color="success">
        <a href="http://books.zuri.team">Books</a>
      </CustomButton>
      <CustomButton id="book__python" variant="contained" color="success">
        <a href="https://books.zuri.team/python-for-beginners?ref_id=kevinmbui">
          Python Books
        </a>
      </CustomButton>
      <CustomButton id="pitch" variant="contained" color="success">
        <a href="https://background.zuri.team">Background Check for Coders</a>
      </CustomButton>
      <CustomButton id="book__design" variant="contained" color="success">
        <a href="https://books.zuri.team/design-rules">Design Books</a>
      </CustomButton> 
      <CustomButton id="contact" variant="contained" color="success">
        <a href="/contact">Contact</a>
      </CustomButton> 
    </Box>
  );
};

export default LinksSection;
