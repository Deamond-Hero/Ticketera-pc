import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import Login from './pages/LoginPage';
import LandingPage from './pages/LandingPage'
import Dashboard from './pages/Dashboard';
import RegisterPage from './components/Register';
import Navbar from "./components/Navbar";
import Landing from './pages/Landing';
import TicketForm from './components/TicketForm';


function App() {
  const isLoged = useSelector((state) => state.auth.userData)
  const location = useLocation()

  console.log(isLoged)

  return (
    <main>
      <Navbar/>
      <Routes >
        <Route path='/' element={<LandingPage />} />
        {/* {!isLoged ? (<Route path='/login' element={<Login />} />) : (<Route path='/login' element={<Dashboard />} />)}
        {!isLoged ? (<Route path='/dashboard' element={<Login />} />) : (<Route path='/dashboard' element={<Dashboard />} />)}
        {!isLoged ? (<Route path='/register' element={<RegisterPage />} />) : (<Route path='/register' element={<LandingPage />} />)}
        {!isLoged ? (<Route path='/home' element={<Landing />} />) : (<Route path='/home' element={<Landing />} />)} */}

        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/home' element={<Landing />} />
        <Route path='/newticket' element={<TicketForm/>}/>
      </Routes >
    </main>
  )
}

export default App