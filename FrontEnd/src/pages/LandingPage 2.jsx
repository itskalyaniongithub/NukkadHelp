import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ThemeProvider } from '@mui/material/styles';
import '../App.css'
import HeroSection from '../components/HeroSection';
import AboutUsSection from '../components/AboutUsSection';
import HowItWorksSection from '../components/HowItWorksSection';
import CallToActionSection from '../components/CallToActionSection';

function LandingPage() {
  

  return (
   <>
  
    <Navbar />
    <HeroSection />
    <AboutUsSection />
    <HowItWorksSection />
    <CallToActionSection />
    <Footer />
   
  
</>
    
  )
}

export default LandingPage
