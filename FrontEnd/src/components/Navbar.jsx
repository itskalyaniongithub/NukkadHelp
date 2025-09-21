import React from "react";
import { AppBar, Toolbar, Button, Typography, Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import { Link } from "react-router-dom";
import mainLogo from "../assets/mainLogo.png";

function Navbar() {
  return (
    <AppBar position="static" sx={{ boxShadow: "none", py: 1, width: "100%" }}>
      <Toolbar sx={{ display: "flex", alignItems: "center" }}>
        {/* Logo */}
        <img
          src={mainLogo}
          alt="NukkadHelp Logo"
          style={{ height: "40px", marginRight: "12px" }}
        />

        {/* Left-side buttons */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
          <Button
            color="inherit"
            sx={{
              fontSize: "20px",
              transition: "all 0.3s",
              "&:hover": { backgroundColor: "#0563aaff", transform: "scale(1.1)" },
            }}
            href="#Home"
          >
            Home
          </Button>
          <Button
            color="inherit"
            sx={{
              fontSize: "20px",
              transition: "all 0.3s",
              "&:hover": { backgroundColor: "#0563aaff", transform: "scale(1.1)" },
            }}
            href="#aboutUs"
          >
            About Us
          </Button>
          <Button
            color="inherit"
            sx={{
              fontSize: "20px",
              transition: "all 0.3s",
              "&:hover": { backgroundColor: "#0563aaff", transform: "scale(1.1)" },
            }}
            href="#Working"
          >
            How It Works
          </Button>
        </Box>

        {/* Spacer to push login/register to right */}
        <Box sx={{ flexGrow: 1 }} />

        {/* Right-side buttons */}
        <Button
          variant="contained"
          color="primary"
          sx={{ ml: 2 }}
          component={Link}
          to="/LoginPage"
        >
          Login
        </Button>
        <Button
          variant="contained"
          color="primary"
          sx={{ ml: 2 }}
          component={Link}
          to="/signup"
        >
          Register
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
