import {
  Box,
  Button,
  Checkbox,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const Contact = () => {

  return (
    <Box sx={{ display: "flex", justifyContent: {sm: "center"}}}>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        margin: {sm: 5}
      }}
    >
      <Typography variant="h4" fontSize="bold">Contact me</Typography>
      <Typography>
        Hi there, contact me to ask anything you have in mind.
      </Typography>
      <Box sx={{ display: "flex", flexDirection: {xs: "column", sm: "row"}, gap: 1}}>
        <Box sx={{ display: "flex", flexDirection: "column"}}>
        <label htmlFor="First name" id="first_name">
          First name
        </label>
        <TextField id="first_name" placeholder="Enter your first name" />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column"}}>
        <label htmlFor="Last name" id="first_name">
          Last name
        </label>
        <TextField id="last_name" placeholder="Enter your last name" />
        </Box>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="email" id="first_name">
          Email
        </label>
        <TextField id="email" placeholder="Enter your email address" />
        <label htmlFor="email" id="first_name">
          Message
        </label>
        <TextareaAutosize
          aria-label="minimum height"
          minRows={7}
          placeholder="Send me a message and I'll reply as soon as possible..."
          style={{ margin: 5 }}
        />
        <Box sx={{ display: "flex" }}>
          <Checkbox defaultChecked />
          <p>You agree to providing your data to Kevin who may contact you</p>
        </Box>
          <Button variant="contained" sx={{ width: "100%" }}>Send Message</Button>
      </Box>
    </Box>
    </Box>
  );
};

export default Contact;
