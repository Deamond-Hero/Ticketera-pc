import {
  // eslint-disable-next-line no-unused-vars
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
  Navigate
} from "react-router-dom";
import Login from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import RegisterPage from './components/Register';
import Landing from './pages/Landing';
import CreateConsultTicket from './components/CreateConsultTicket'; // Adjust the path as needed
import { useEffect } from 'react';

function App() {
  const isLogged = window.localStorage.getItem("token");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isLogged && (location.pathname === "/login" || location.pathname === "/register")) {
      navigate("/dashboard");
    }
  }, [isLogged, location.pathname, navigate]);

  return (
    <main>
      <Routes>
        {/* Redirigir si está logueado */}
        <Route path='/login' element={isLogged ? <Navigate to="/dashboard" /> : <Login />} />
        <Route path='/register' element={isLogged ? <Navigate to="/dashboard" /> : <RegisterPage />} />
        
        {/* Rutas accesibles a todos */}
        <Route path='/home' element={<Landing />} />
        
        {/* Ruta protegida */}
        <Route path='/dashboard' element={isLogged ? <Dashboard /> : <Navigate to="/login" />} />

        {/* Ruta para crear ticket */}
        <Route path='/create-ticket' element={<CreateConsultTicket />} />
      </Routes>
    </main>
  )
}

export default App;
