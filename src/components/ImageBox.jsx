import React from "react";
import backgroundImage from "../assets/1.png";
import { Box } from "@mui/material";

export const ImageBox = () => {
  return (
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
  );
};
export default ImageBox;
