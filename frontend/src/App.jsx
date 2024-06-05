import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
  Navigate
} from "react-router-dom";
import Login from './pages/LoginPage';
import LandingPage from './pages/LandingPage'
import Dashboard from './pages/Dashboard';
import RegisterPage from './components/Register';
import Navbar from "./components/Navbar";
import Landing from './pages/Landing';
import { useEffect } from 'react';

function App() {
  const isLogged = window.localStorage.getItem("token");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isLogged && (location.pathname === "/login" || location.pathname === "/register")) {
      navigate("/dashboard");
    }
  }, [isLogged]);

  return (
    <main>
      <Navbar />
      <Routes>
        {/* Redirigir si está logueado */}
        <Route path='/login' element={isLogged ? <Navigate to="/dashboard" /> : <Login />} />
        <Route path='/register' element={isLogged ? <Navigate to="/dashboard" /> : <RegisterPage />} />
        
        {/* Rutas accesibles a todos */}
        <Route path='/' element={<LandingPage />} />
        <Route path='/home' element={<Landing />} />
        
        {/* Ruta protegida */}
        <Route path='/dashboard' element={isLogged ? <Dashboard /> : <Navigate to="/login" />} />
      </Routes>
    </main>
  )
}

export default App;