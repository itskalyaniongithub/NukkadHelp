import { useState } from 'react'
import LoginPage from './pages/LoginPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Signup from "./pages/SignupPage";
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
        <Route path="/login" element={<LoginPage />} />
         <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
    </>

  )
}

export default App
