import React from 'react';
import { Box, Container, Typography, Grid, Link, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

function Footer() {

  return (
    <Box sx={{ backgroundColor: '#222', color: 'white', py: 4, mt: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              NukkadHelp
            </Typography>
            <Typography variant="body2">
              Your local service solution, connecting you to nearby professionals with ease and trust.
            </Typography>
          </Grid>

          <Grid item xs={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box>
              <Link href="#" color="inherit" underline="hover" display="block">
                About Us
              </Link>
              <Link href="#" color="inherit" underline="hover" display="block">
                Services
              </Link>
              <Link href="#" color="inherit" underline="hover" display="block">
                Contact
              </Link>
              <Link href="#" color="inherit" underline="hover" display="block">
                FAQ
              </Link>
            </Box>
          </Grid>

          <Grid item xs={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box>
              <IconButton href="#" target="_blank" sx={{ color: 'white' }}>
                <Facebook />
              </IconButton>
              <IconButton href="#" target="_blank" sx={{ color: 'white' }}>
                <Twitter />
              </IconButton>
              <IconButton href="#" target="_blank" sx={{ color: 'white' }}>
                <Instagram />
              </IconButton>
              <IconButton href="#" target="_blank" sx={{ color: 'white' }}>
                <LinkedIn />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Box mt={4} textAlign="center">
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} NukkadHelp. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
