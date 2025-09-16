import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService'; // For provider
import PersonSearchIcon from '@mui/icons-material/PersonSearch'; // For customer

function HowItWorksSection() {
  return (
    <Box sx={{ background: '#f5f5f5', py: 8 }} id ="Working">
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" textAlign="center" gutterBottom sx={{ mb: 6, color: 'primary.dark' }}>
          How It Works
        </Typography>
        <Grid container justifyContent="center" spacing={4} >
          {/* How it works for Customers */}
          <Grid item xs={12} md={6}>
            <Card sx={{  display: 'flex', flexDirection: 'column', p: 3, width: 950, height: 200 }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                  <PersonSearchIcon sx={{ fontSize: 60, color: 'primary.main' }} />
                </Box>
                <Typography variant="h5" component="h3" gutterBottom textAlign="center" sx={{ color: 'primary.dark' }}>
                  For Customers
                </Typography>
                <Box 
  component="ul" 
  sx={{ 
    listStyleType: 'disc', 
    textAlign: 'left', 
    display: 'inline-block', // keeps bullets compact
    pl: 3,                  // small padding for bullets
    m: '0 auto'  ,           // centers the whole list
    
  }}
>
  <li>
    <Typography 
      variant="body1" 
      component="span" 
      sx={{ display: 'inline' }}
    >
     <strong> Search & Discover:</strong> Easily search for plumbers, electricians, etc.
    </Typography>
  </li>
  <li>
    <Typography 
      variant="body1" 
      component="span" 
      sx={{ display: 'inline' }}
    >
      <strong>Book Instantly: </strong>Select a time slot that works best for you.
    </Typography>
  </li>
  <li>
    <Typography 
      variant="body1" 
      component="span" 
      sx={{ display: 'inline' }}
    >
      <strong>Safe & Secure:</strong> Verified providers for peace of mind.
    </Typography>
  </li>
</Box>

                
  
                
              </CardContent>
            </Card>
          </Grid>

          {/* How it works for Providers */}
          <Grid item xs={12} md={6}>
            <Card sx={{ display: 'flex', flexDirection: 'column', p: 3 ,width: 950, height: 300}}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                  <HomeRepairServiceIcon sx={{ fontSize: 60, color: 'secondary.main' }} />
                </Box>
                <Typography variant="h5" component="h3" gutterBottom textAlign="center" sx={{ color: 'primary.dark' }}>
                  For Providers
                </Typography>
                <Box 
  component="ul" 
  sx={{ 
    listStyleType: 'disc', 
    textAlign: 'left', 
    display: 'inline-block', // keeps bullets compact
    pl: 3,                  // small padding for bullets
    m: '0 auto'  ,           // centers the whole list
    
  }}
>
  <li>
    <Typography 
      variant="body1" 
      component="span" 
      sx={{ display: 'inline' }}
    >
     <strong> Search & Discover:</strong> Easily search for plumbers, electricians, etc.
    </Typography>
  </li>
  <li>
    <Typography 
      variant="body1" 
      component="span" 
      sx={{ display: 'inline' }}
    >
      <strong>Book Instantly: </strong>Select a time slot that works best for you.
    </Typography>
  </li>
  <li>
    <Typography 
      variant="body1" 
      component="span" 
      sx={{ display: 'inline' }}
    >
      <strong>Safe & Secure:</strong> Verified providers for peace of mind.
    </Typography>
  </li>
</Box> 
                <Typography variant="body1" paragraph>
                  1.  <b>Register Your Service:</b>Create a detailed profile showcasing your skills, experience, and availability.
                </Typography>
                <Typography variant="body1" paragraph>
                  2.  <b>Get Noticed:</b> Receive job requests from customers in your area. The more jobs you complete successfully, the higher your rating!
                </Typography>
                <Typography variant="body1" paragraph>
                  3.  <b>Build Your Reputation:</b> High ratings and positive reviews will help you climb the recommendation list, bringing in more work.
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
