import React, { useState } from 'react';
import { Box, Container, Typography, TextField, Button, Paper, Grid } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import googleIcon from '../assets/googleIcon.png'
import { GoogleLogin } from '@react-oauth/google';
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('customer'); // 'customer' or 'provider'

  const handleLogin = async (e) => {
    e.preventDefault();
    // This is where you would send the email, password, and userType to your backend API

    console.log('Login attempt with:', { email, password, userType });
    try{
      const res = await axios.post("http://localhost:5000/api/auth/login",{
        email,
        password,
        userType
      });
      if(res.status===200){
         console.log("Login success:", res.data);
        localStorage.setItem("token", res.data.token);
        alert("Login successful!");
      navigate("/LandingPage");
      }
    }catch(err){
      console.log(err);
      alert(err.response?.data?.message || "Login failed");
    }
    

    
  };

  const handleUserTypeChange = (type) => {
    setUserType(type);
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
            Login
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
                color="primary"
                onClick={() => handleUserTypeChange('provider')}
              >
                Provider
              </Button>
            </Grid>
          </Grid>

          <form onSubmit={handleLogin}>
            <TextField
              label="Email"
              type="email"
              fullWidth
              required
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              required
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              size="large"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </form>
          <Typography variant="body2" textAlign="center">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </Typography>
          
          <Box textAlign="center"  sx={{ justifyContent: 'center', display:'flex',mt: 3 }}>
          <GoogleLogin onSuccess={async(credentialResponse)=>{
            try{
              const res = await axios.post("http://localhost:5000/api/google-login", {
        credential: credentialResponse.credential,
        userType
      });

      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
            }
            catch(err){
              console.error(err);
      alert("Google login failed");
            }}} onError={()=>console.log("Login failed")}/>
            </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default Login;
