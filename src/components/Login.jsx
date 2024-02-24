import React from "react";
import { Stack } from "@mui/material";
import Navbar from "./Navbar";
import ImageBox from "./ImageBox";
import FormBox from "./FormBox";

const Login = () => {
  return (
    <>
      <Navbar />

      <Stack direction="row">
        <ImageBox />
        <FormBox />
      </Stack>
    </>
  );
};

export default Login;
