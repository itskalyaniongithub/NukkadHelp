import React from 'react';
import { Container, Typography, Grid, CardMedia,Box } from '@mui/material';

function AboutUsSection() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography
        variant="h4"
        component="h2"
        textAlign="center"
        gutterBottom
        sx={{ mb: 6, color: 'primary.dark' }}
      >
        About NukkadHelp
      </Typography>

      <Grid container spacing={4} alignItems="center">
        {/* Left side - Text */}
        <Grid item xs={12} md={6}>
          <Typography variant="body1" paragraph>
            NukkadHelp is your go-to platform for connecting with skilled daily workers like plumbers,
            electricians, carpenters, and more, right in your local area. We bridge the gap between
            service providers seeking work and customers needing reliable help.
          </Typography>
          <Typography variant="body1" paragraph>
            Our mission is to make finding trustworthy local services effortless. Providers can showcase
            their skills, get rated by customers, and build their reputation, while customers can easily
            find, review, and book the best professionals for their needs.
          </Typography>
        </Grid>

        {/* Right side - Image */}
        <Grid item xs={12} md={6}>
        <Box sx={{ width: '100vw', position: 'relative', left: '50%', transform: 'translateX(-50%)' }}>

          <CardMedia
          
            component="img"
            sx={{
              width: '100%',
              height: 'auto',
              borderRadius: 2,
              boxShadow: 3,
            }}
            image="https://placehold.co/600x400/ADD8E6/000000?text=Community+Helping"
            alt="Community Helping Hands"
          />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AboutUsSection;
