import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService'; // For provider
import PersonSearchIcon from '@mui/icons-material/PersonSearch'; // For customer

function HowItWorksSection() {
  return (
    <Box sx={{ background: '#f5f5f5', py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" textAlign="center" gutterBottom sx={{ mb: 6, color: 'primary.dark' }}>
          How It Works
        </Typography>
        <Grid container spacing={4}>
          {/* How it works for Customers */}
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', p: 3 }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                  <PersonSearchIcon sx={{ fontSize: 60, color: 'primary.main' }} />
                </Box>
                <Typography variant="h5" component="h3" gutterBottom textAlign="center" sx={{ color: 'primary.dark' }}>
                  For Customers
                </Typography>
                <Typography variant="body1" paragraph>
                  1.  **Search & Discover:** Easily search for plumbers, electricians, and other daily workers near you.
                </Typography>
                <Typography variant="body1" paragraph>
                  2.  **View Ratings & Profiles:** Check out detailed profiles, see their past work, and read genuine customer ratings and reviews.
                </Typography>
                <Typography variant="body1" paragraph>
                  3.  **Book & Relax:** Book a convenient slot directly through the platform and get your work done by a trusted professional.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* How it works for Providers */}
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', p: 3 }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                  <HomeRepairServiceIcon sx={{ fontSize: 60, color: 'secondary.main' }} />
                </Box>
                <Typography variant="h5" component="h3" gutterBottom textAlign="center" sx={{ color: 'primary.dark' }}>
                  For Providers
                </Typography>
                <Typography variant="body1" paragraph>
                  1.  **Register Your Service:** Create a detailed profile showcasing your skills, experience, and availability.
                </Typography>
                <Typography variant="body1" paragraph>
                  2.  **Get Noticed:** Receive job requests from customers in your area. The more jobs you complete successfully, the higher your rating!
                </Typography>
                <Typography variant="body1" paragraph>
                  3.  **Build Your Reputation:** High ratings and positive reviews will help you climb the recommendation list, bringing in more work.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default HowItWorksSection;
