import { useState } from 'react'
import LoginPage from './pages/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Signup from "./pages/Signup";
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
      </Routes>
    </Router>
    </>

  )
}

export default App
