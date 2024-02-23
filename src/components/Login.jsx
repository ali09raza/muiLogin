import React, { useState } from "react";
import {
  Avatar,
  Grid,
  TextField,
  Switch,
  Typography,
  Button,
  Link,
  Box,
  InputLabel,
} from "@mui/material";
import userAvatar from "../assets/user.png";

import backgroundImage from "../assets/1.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState("");
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleRemember = () => {
    setRemember((prevValue) => !prevValue);
  };

  const handleButton = () => {
    console.log("email :", email);
    console.log("password :", password);
    console.log("rembebr me :", remember);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <Box
        id="box1"
        sx={{
          padding: "20px",

          width: "600px",
          margin: "0",
          backgroundColor: "white",

          position: "relative",
        }}
      >
        <img
          src={backgroundImage}
          alt="Background"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />
      </Box>
      <Box
        id="box2"
        sx={{
          padding: "30px",
          paddingTop: "150px",
          paddingBottom: "150px",

          height: "50vh",
          width: "670px",
          margin: "0px 0 0px auto",
          color: "white",

          backgroundColor: "rgb(3, 3, 39)",
        }}
      >
        <Grid>
          <Avatar
            src={userAvatar}
            sx={{ width: 60, height: 60, marginLeft: "120px" }}
          />

          <Typography
            variant="h6"
            color="white"
            sx={{
              margin: "2px",
              paddingBottom: "20px",
              fontWeight: "bold",
              marginLeft: "80px",
            }}
          >
            Nice to See You!
            <Typography variant="body2" color="white" sx={{ fontSize: "15px" }}>
              Enter your email and password to sign in
            </Typography>
          </Typography>
        </Grid>
        <InputLabel
          htmlFor="outlined-basic-email"
          sx={{ color: "white", margin: "2px", marginLeft: "80px" }}
        >
          Email
        </InputLabel>
        <div
          style={{
            width: "300px",
            marginLeft: "80px",
          }}
        >
          <TextField
            id="outlined-basic-email"
            onChange={handleEmail}
            value={email}
            sx={{
              margin: "5px",
              width: "auto",

              "& label": {
                color: "white",
                fontSize: "15px",
              },
              "& fieldset": {
                borderColor: "white !important",
                borderRadius: "20px",
                height: "52px",
              },
              "& input::placeholder": {
                color: "white",
              },

              "& input": {
                color: "white",
              },
            }}
            label="Your email address"
            variant="outlined"
            placeholder="Enter email"
            required
          />

          <InputLabel
            htmlFor="outlined-basic-password"
            sx={{
              color: "white",
              margin: "2px",
              marginTop: "2px",
            }}
          >
            Password
          </InputLabel>

          <TextField
            id="outlined-basic-password"
            value={password}
            onChange={handlePassword}
            sx={{
              margin: "5px",
              width: "auto",

              "& label": {
                color: "white",
                fontSize: "15px",
              },
              "& fieldset": {
                borderColor: "white !important",
                borderRadius: "20px",
                height: "52px",
              },
              "& input::placeholder": {
                color: "white",
              },

              "& input": {
                color: "white",
              },
            }}
            label="Your Password"
            type="password"
            variant="outlined"
            placeholder="Enter password"
            required
          />
        </div>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginTop: "2px",
            marginLeft: "80px",
          }}
        >
          <Switch size="large" value={remember} onClick={handleRemember} />
          <Typography variant="body2" color="white" sx={{ marginLeft: "8px" }}>
            Remember Me
          </Typography>
        </Box>

        <Button
          type="submit"
          onClick={handleButton}
          color="primary"
          variant="contained"
          sx={{
            margin: "2px",
            marginLeft: "80px",
            width: "35%",
            height: "10%",
            borderRadius: "10px",
          }}
        >
          Sign In
        </Button>
        <Typography sx={{ marginLeft: "100px", fontSize: "12px" }}>
          Do you have any account ?<Link href="#">Sign up</Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;
