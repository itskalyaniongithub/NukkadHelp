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
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import SettingsIcon from "@mui/icons-material/Settings";

const theme = createTheme({
  palette: {
    primary: { main: "#1976d2" },
    background: { default: "linear-gradient(135deg, #f0f4ff 0%, #e6f7ff 100%)" },
    text: { secondary: "#555555" },
  },
  typography: { fontFamily: "Inter, Arial, sans-serif" },
  components: {
    MuiPaper: {
      styleOverrides: { root: { borderRadius: "16px", padding: "20px", transition: "0.3s" } },
    },
    MuiButton: {
      styleOverrides: { root: { borderRadius: "999px", fontWeight: "bold", textTransform: "none" } },
    },
    MuiAppBar: {
      styleOverrides: { root: { backgroundColor: "#1976d2", borderRadius: 0 } },
    },
  },
});

const providerOptions = [
  { title: "My Bookings", route: "/provider/bookings", desc: "View and manage all customer bookings.", icon: <AssignmentTurnedInIcon sx={{ fontSize: 40, color: "#1976d2" }} /> },
  { title: "Update Availability", route: "/provider/availability", desc: "Set your work schedule and available slots.", icon: <EventAvailableIcon sx={{ fontSize: 40, color: "#1976d2" }} /> },
  { title: "Earnings", route: "/provider/earnings", desc: "Track your completed jobs and earnings.", icon: <AccountBalanceWalletIcon sx={{ fontSize: 40, color: "#1976d2" }} /> },
  { title: "Profile Settings", route: "/provider/profile", desc: "Update your personal and professional info.", icon: <SettingsIcon sx={{ fontSize: 40, color: "#1976d2" }} /> },
];

export default function ProviderDashboard() {
  const navigate = useNavigate();
  const [user] = useState("John Doe");

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        {/* Navbar */}
        <AppBar position="static" elevation={2}>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", cursor: "pointer" }} onClick={() => navigate("/")}>
              NukkadHelp
            </Typography>
            <Box>
              <Typography variant="body1" sx={{ mr: 2, display: "inline-block" }}>
                Welcome, {user}
              </Typography>
              <Button color="inherit" onClick={() => navigate("/logout")}>Logout</Button>
            </Box>
          </Toolbar>
        </AppBar>

        {/* Dashboard Grid */}
        <Container sx={{ flex: 1, py: 6 }}>
          <Typography variant="h4" textAlign="center" sx={{ mb: 5, fontWeight: "bold", color: "#1976d2" }}>
            Provider Dashboard
          </Typography>
          <Grid container spacing={4} justifyContent="center" alignItems="stretch">
            {providerOptions.map((opt) => (
              <Grid item xs={12} sm={6} md={5} lg={4} key={opt.title}>
                <Paper
                  elevation={4}
                  sx={{
                    height: "250px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    justifyContent: "space-between",
                    cursor: "pointer",
                    p: 3,
                    "&:hover": { transform: "translateY(-6px)", boxShadow: 8 },
                  }}
                  onClick={() => navigate(opt.route)}
                >
                  {opt.icon}
                  <Typography variant="h6" fontWeight="bold">{opt.title}</Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>{opt.desc}</Typography>
                  <Button variant="contained" color="primary">Open</Button>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Footer */}
        <Box sx={{ bgcolor: "primary.main", color: "white", py: 3, textAlign: "center" }}>
          <Typography>© 2025 NukkadHelp. Provider Portal</Typography>
          <Typography>Support: providers@nukkadhelp.com</Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
