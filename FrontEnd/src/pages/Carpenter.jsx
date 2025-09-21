import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Container, Typography, Paper, Grid, Button, AppBar, Toolbar, Menu, MenuItem, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const carpenters = [
  { name: "Rakesh Kumar", rating: 4.5, reviews: 110, charges: "₹300/hr", available: true },
  { name: "Mukesh Singh", rating: 4.3, reviews: 85, charges: "₹280/hr", available: false },
  { name: "Ankit Sharma", rating: 4.7, reviews: 140, charges: "₹350/hr", available: true },
  { name: "Sandeep Verma", rating: 4.1, reviews: 70, charges: "₹250/hr", available: true },
];

const carpenterIcons = ["🔨", "🪚", "🪵", "🪛"];

export default function Carpenter() {
  const navigate = useNavigate();
  const [bookingConfirmation, setBookingConfirmation] = useState(null);

  // For services dropdown
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const handleBooking = (name) => setBookingConfirmation(`Booking request sent for ${name}!`);

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Navbar */}
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            component="div"
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/dashboard")}
          >
            NukkadHelp
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Button color="inherit" onClick={() => navigate("/")}>Home</Button>
            <Button color="inherit" onClick={() => navigate("/dashboard")}>Dashboard</Button>
            
            {/* Services Dropdown */}
            <Button color="inherit" onClick={handleMenuOpen}>Services</Button>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleMenuClose}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            >
              <MenuItem onClick={() => { navigate("/electrician"); handleMenuClose(); }}>Electrician</MenuItem>
              <MenuItem onClick={() => { navigate("/plumbing"); handleMenuClose(); }}>Plumbing</MenuItem>
              <MenuItem onClick={() => { navigate("/househelp"); handleMenuClose(); }}>House Help</MenuItem>
              <MenuItem onClick={() => { navigate("/carpenter"); handleMenuClose(); }}>Carpenter</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Hero Banner */}
      <Box
        sx={{
          width: "100%",
          height: 250,
          backgroundImage: "url('https://images.unsplash.com/photo-1597600152719-3c56f185446f?auto=format&fit=crop&w=1350&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: 4,
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          sx={{
            color: "white",
            backgroundColor: "rgba(0,0,0,0.4)",
            px: 4,
            py: 2,
            borderRadius: 2,
            fontWeight: "bold",
          }}
        >
          Skilled Carpenters at Your Service
        </Typography>
      </Box>

      <Container sx={{ flex: 1, mb: 4 }}>
        <Paper sx={{ p: 4 }}>
          {bookingConfirmation ? (
            <Box textAlign="center">
              <Typography variant="h5" sx={{ color: "green", mb: 2 }}>
                {bookingConfirmation}
              </Typography>
              <Typography sx={{ mb: 3 }}>You will be contacted by the service provider shortly.</Typography>
              <Button
                variant="contained"
                onClick={() => setBookingConfirmation(null)}
              >
                Done
              </Button>
            </Box>
          ) : (
            <>
              <Typography variant="h4" sx={{ mb: 4, textAlign: "center", fontWeight: "bold" }}>
                Available Carpenters
              </Typography>

              <Grid container spacing={4}>
                {carpenters.map((c, idx) => (
                  <Grid item xs={12} sm={6} key={c.name}>
                    <Paper sx={{ p: 3, display: "flex", alignItems: "center", justifyContent: "space-between" }} elevation={4}>
                      <Typography variant="h2" component="span" sx={{ mr: 2 }}>
                        {carpenterIcons[idx]}
                      </Typography>
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="h6" fontWeight="bold">{c.name}</Typography>
                        <Typography>⭐ {c.rating} ({c.reviews} reviews)</Typography>
                        <Typography>💰 {c.charges}</Typography>
                        <Typography color={c.available ? "green" : "red"} fontWeight="bold">
                          {c.available ? "Available Now" : "Currently Unavailable"}
                        </Typography>
                      </Box>
                      <Button
                        variant="contained"
                        color="primary"
                        disabled={!c.available}
                        onClick={() => handleBooking(c.name)}
                      >
                        Book Now
                      </Button>
                    </Paper>
                  </Grid>
                ))}
              </Grid>

              {/* Back Button */}
              <Box textAlign="center" mt={4}>
                <Button
                  variant="outlined"
                  onClick={() => navigate("/dashboard")}
                >
                  ← Back to Dashboard
                </Button>
              </Box>
            </>
          )}
        </Paper>
      </Container>

      {/* Footer */}
      <Box sx={{ bgcolor: "primary.main", color: "white", py: 3, textAlign: "center" }}>
        <Typography>© 2025 NukkadHelp. All rights reserved.</Typography>
        <Typography>Contact: info@nukkadhelp.com | +91 9876543210</Typography>
      </Box>
    </Box>
  );
}
