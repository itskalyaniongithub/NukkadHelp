import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';

function HeroSection() {
  return (
    <Box
      sx={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        background: 'linear-gradient(45deg, #e3f2fd 30%, #bbdefb 90%)', // Light blue gradient
        color: 'primary.dark',
        py: 8,
        px: 2,
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h3" component="h1" gutterBottom sx={{ mb: 3 }}>
          Your Local Help, Just a Click Away!
        </Typography>
        <Typography variant="h5" component="p" sx={{ mb: 5, color: 'primary.main' }}>
          Connect with trusted plumbers, electricians, and daily workers in your neighborhood.
        </Typography>
        <Box>
          <Button variant="contained" color="primary" size="large" sx={{ mr: 2, mb: { xs: 2, sm: 0 } }}>
            Find a Service
          </Button>
          <Button variant="contained" color="primary" size="large">
            Join as a Provider
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default HeroSection;
