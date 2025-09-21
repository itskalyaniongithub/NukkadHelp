import { useState } from 'react'
import LoginPage from './pages/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Signup from "./pages/SignupPage";
import CustomerDashboard from "./pages/CustomerDashboard";
import Electrician from "./pages/Electrician";
import Plumbing from "./pages/Plumbing";
import Carpenter from "./pages/Carpenter";
import HouseHelp from "./pages/HouseHelp";


// import Navbar from './components/Navbar'
// import { ThemeProvider } from '@mui/material/styles';
// import theme from "./theme"; 

import LandingPage from './pages/LandingPage'
function App() {
  const [count, setCount] = useState(0)

  return (
      <>
      <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/dashboard" element={<CustomerDashboard />} />
        <Route path="/electrician" element={<Electrician />} />
        <Route path="/plumbing" element={<Plumbing />} />
        <Route path="/carpenter" element={<Carpenter />} />
        <Route path="/househelp" element={<HouseHelp />} />
      </Routes>
    </Router>
    </>

  )
}

export default App
