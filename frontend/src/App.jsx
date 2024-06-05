import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Login from './pages/LoginPage';
import LandingPage from './pages/LandingPage'
import Dashboard from './pages/Dashboard';
import RegisterPage from './components/Register';
import Navbar from "./components/Navbar";
import Landing from './pages/Landing';
import { useEffect } from 'react';


function App() {
  const isLogged = window.localStorage.getItem("token")
  const navigate = useNavigate()

/*   useEffect(() => {
    navigate("/dashboard")
    console.log("logueado")
}, [isLogged]) */
  

  return (
    <main>
      <Navbar/>
      <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={isLogged ? <Dashboard /> : <Login />} />
          <Route path='/dashboard' element={isLogged ? <Dashboard /> : <Login />} />
          <Route path='/register' element={isLogged ? <LandingPage /> : <RegisterPage />} />
          <Route path='/home' element={<Landing />} />
        </Routes>
    </main>
  )
}

export default App