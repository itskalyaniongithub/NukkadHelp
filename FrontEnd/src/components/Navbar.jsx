import React from "react";
import {AppBar, Toolbar, Button, Typography} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from "../theme";
import { Link } from 'react-router-dom';
function Navbar(){
    return(
        
        <AppBar position ="static" sx={{boxShadow:'none',py:1,width:'100%'}}>
            <Toolbar>
                <Typography variant ='h5' component = 'div' sx={{flexGrow:1, fontWeight:'bold'}}>
                NukkadHelp
                </Typography>
                <Button color="inherit" sx={{ mx: 1 }}>Home</Button>
                <Button color="inherit" sx={{ mx: 1 }}>About Us</Button>
                <Button color="inherit" sx={{ mx: 1 }}>How It Works</Button>
                <Button variant="contained" color="primary" sx={{ ml: 2 }} component={Link} to="/login">Login / Register</Button>
            </Toolbar>
        </AppBar>
        
    )
}

export default Navbar;