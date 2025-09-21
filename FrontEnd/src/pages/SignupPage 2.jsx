import React, { useState } from 'react';
import { Box, Container, Typography, TextField, Button, Paper, Grid } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

function SignupPage() {
  const navigate = useNavigate();
  const [userType, setUserType] = useState('customer'); // 'customer' or 'provider'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    serviceType: '', // Provider-specific
    bio: '', // Provider-specific
  });
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleUserTypeChange = (type) => {
    setUserType(type);
    // Reset provider-specific fields if switching back to customer
    if (type === 'customer') {
      setFormData(prev => ({ ...prev, serviceType: '', bio: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setPasswordsMatch(false);
      return;
    }
    setPasswordsMatch(true);

    // Filter out confirmPassword field before sending
    const { confirmPassword, ...dataToSend } = formData;
    
    // Add userType to the data before sending to backend
    const finalData = { ...dataToSend, userType };

    // This is where you would send the data to your backend API
    console.log('Signup data:', finalData);

    // In a real app, after successful signup, you might navigate to a login page or dashboard.
    // navigate('/login');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(45deg, #e3f2fd 30%, #bbdefb 90%)',
        py: 4,
      }}
    >
      <Container maxWidth="xs">
        <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
          <Typography variant="h4" component="h1" gutterBottom textAlign="center" sx={{ fontWeight: 'bold', color: 'primary.dark' }}>
            Create an Account
          </Typography>

          {/* User Type Selector */}
          <Grid container spacing={1} sx={{ mb: 3 }}>
            <Grid item xs={6}>
              <Button
                fullWidth
                variant={userType === 'customer' ? 'contained' : 'outlined'}
                color="primary"
                onClick={() => handleUserTypeChange('customer')}
              >
                Customer
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                fullWidth
                variant={userType === 'provider' ? 'contained' : 'outlined'}
                color="secondary"
                onClick={() => handleUserTypeChange('provider')}
              >
                Provider
              </Button>
            </Grid>
          </Grid>

          <form onSubmit={handleSubmit}>
            <TextField
              label="Full Name"
              name="name"
              fullWidth
              required
              margin="normal"
              value={formData.name}
              onChange={handleInputChange}
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              fullWidth
              required
              margin="normal"
              value={formData.email}
              onChange={handleInputChange}
            />
            <TextField
              label="Phone Number"
              name="phone"
              type="tel"
              fullWidth
              required
              margin="normal"
              value={formData.phone}
              onChange={handleInputChange}
            />
            <TextField
              label="Password"
              name="password"
              type="password"
              fullWidth
              required
              margin="normal"
              value={formData.password}
              onChange={handleInputChange}
            />
            <TextField
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              fullWidth
              required
              margin="normal"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              error={!passwordsMatch}
              helperText={!passwordsMatch && "Passwords do not match."}
            />

            {/* Provider-specific fields */}
            {userType === 'provider' && (
              <>
                <TextField
                  label="Service Type (e.g., Plumber, Electrician)"
                  name="serviceType"
                  fullWidth
                  required
                  margin="normal"
                  value={formData.serviceType}
                  onChange={handleInputChange}
                />
                <TextField
                  label="Short Bio"
                  name="bio"
                  multiline
                  rows={4}
                  fullWidth
                  required
                  margin="normal"
                  value={formData.bio}
                  onChange={handleInputChange}
                />
              </>
            )}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              size="large"
              sx={{ mt: 3, mb: 2 }}
            >
              Create Account
            </Button>
          </form>
          <Typography variant="body2" textAlign="center">
            Already have an account? <Link to="/login">Sign In</Link>
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}

export default SignupPage;
