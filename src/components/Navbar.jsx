import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import PersonIcon from "@mui/icons-material/Person";
import { Typography, Button } from "@mui/material";

export const Navbar = () => {
  return (
    <AppBar
      position="absolute"
      sx={{
        backgroundColor: "rgb(3, 3, 39)",
        border: "2px solid white",
        borderRadius: "20px",
        width: "75%",
        height: "70px",
        margin: "auto",
        marginRight: "10%",
        marginTop: "20px",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          VISION UI FREE
        </Typography>

        <Button
          color="inherit"
          startIcon={<DashboardIcon />}
          sx={{ marginRight: "10px" }}
        >
          DASHBOARD
        </Button>
        <Button
          startIcon={<PersonIcon />}
          color="inherit"
          sx={{ marginRight: "10px" }}
        >
          PROFILE
        </Button>
        <Button
          startIcon={<AccountCircleIcon />}
          color="inherit"
          sx={{ marginRight: "10px" }}
        >
          SIGN UP
        </Button>
        <Button
          startIcon={<VpnKeyIcon />}
          color="inherit"
          sx={{ marginRight: "80px" }}
        >
          SIGN IN
        </Button>
        <Button variant="contained" color="primary">
          Free Download
        </Button>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
