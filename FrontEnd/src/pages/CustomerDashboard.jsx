import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Button,
  AppBar,
  Toolbar,
  Menu,
  MenuItem,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

// Custom theme without rounded AppBar
const theme = createTheme({
  palette: {
    primary: { main: "#1976d2" },
    background: { default: "#f5f5f5", paper: "#ffffff" },
    text: { secondary: "#555555" },
  },
  typography: { fontFamily: "Inter, Arial, sans-serif" },
  components: {
    MuiPaper: {
      styleOverrides: { root: { borderRadius: "12px", padding: "16px" } },
    },
    MuiButton: {
      styleOverrides: { root: { borderRadius: "999px", fontWeight: "bold", textTransform: "none" } },
    },
    MuiAppBar: { styleOverrides: { root: { backgroundColor: "#1976d2", boxShadow: "none", borderRadius: 0 } } },
    MuiToolbar: { styleOverrides: { root: { minHeight: "64px", paddingLeft: "16px", paddingRight: "16px" } } },
  },
});

const services = [
  { name: "House Help", route: "/househelp", description: "Professional housekeeping, cleaning, and cooking services to keep your home organized." },
  { name: "Electrician", route: "/electrician", description: "Certified electricians for home and office electrical work, repairs, and installations." },
  { name: "Plumbing", route: "/plumbing", description: "Expert plumbing services for leak fixing, installations, and maintenance." },
  { name: "Carpenter", route: "/carpenter", description: "Skilled carpenters for furniture making, repair, and woodwork solutions." },
];

export default function CustomerDashboard() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        {/* Navbar */}
        <AppBar position="static">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6" sx={{ cursor: "pointer", fontWeight: "bold" }} onClick={() => navigate("/")}>
              NukkadHelp
            </Typography>
            <Box>
              <Button color="inherit" onClick={() => navigate("/")}>Home</Button>
              <Button color="inherit" onClick={handleMenuOpen}>Services</Button>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleMenuClose}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                transformOrigin={{ vertical: "top", horizontal: "left" }}
              >
                {services.map((s) => (
                  <MenuItem key={s.name} onClick={() => { navigate(s.route); handleMenuClose(); }}>
                    {s.name}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </AppBar>

        {/* Services Grid */}
        <Container sx={{ flex: 1, py: 4 }}>
          <Typography variant="h4" textAlign="center" sx={{ mb: 4, fontWeight: "bold", color: "#1976d2" }}>
            Choose a Service
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {services.map((service) => (
              <Grid item xs={12} sm={6} md={5} key={service.name}>
                <Paper
                  elevation={3}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    height: "200px",
                    justifyContent: "space-between",
                    cursor: "pointer",
                    "&:hover": { transform: "scale(1.03)", boxShadow: 6 },
                  }}
                  onClick={() => navigate(service.route)}
                >
                  <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>{service.name}</Typography>
                  <Typography variant="body2" sx={{ px: 2, color: "text.secondary" }}>{service.description}</Typography>
                  <Button variant="contained" color="primary" sx={{ mb: 2 }}>Explore</Button>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Footer */}
        <Box sx={{ bgcolor: "primary.main", color: "white", py: 3, textAlign: "center" }}>
          <Typography>© 2025 NukkadHelp. All rights reserved.</Typography>
          <Typography>Contact: info@nukkadhelp.com | +91 9876543210</Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
