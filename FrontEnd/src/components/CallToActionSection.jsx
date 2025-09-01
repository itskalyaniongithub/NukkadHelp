import React from 'react';
import { Box, Container, Typography, Button, Stack } from '@mui/material';

function CallToActionSection() {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        color: 'white',
        textAlign: 'center',
        py: 8,
        px: 2,
      }} 
    >
      <Container maxWidth="md">
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{ mb: 3 }}
        >
          Ready to Get Started?
        </Typography>

        <Typography
          variant="h6"
          component="p"
          sx={{ mb: 5 }}
        >
          Whether you need help or want to offer your services, NukkadHelp is the place for you.
        </Typography>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          justifyContent="center"
        >
        <Button
            variant="outlined"
            size="large"
            sx={{
              color: 'white',
              borderColor: 'white',
              '&:hover': {
                backgroundColor: 'white',
                color: 'primary.main',
              },
            }}
          >
            Find a Service Now
        </Button>

          <Button
            variant="outlined"
            size="large"
            sx={{
              color: 'white',
              borderColor: 'white',
              '&:hover': {
                backgroundColor: 'white',
                color: 'primary.main',
              },
            }}
          >
            Become a Provider
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}

export default CallToActionSection;
