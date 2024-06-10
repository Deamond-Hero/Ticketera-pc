import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
  useNavigate, // Asegúrate de que useNavigate está importado
} from "react-router-dom";
import Login from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import RegisterPage from './components/Register';
import Landing from './pages/Landing';
import CreateConsultTicket from './components/CreateConsultTicket';
import TicketForm from './components/TicketForm';
import ServiceForm from './components/ServiceForm';

function App() {
  const userData = useSelector((state) => state.auth.userData); 
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (userData && (location.pathname === "/login" || location.pathname === "/register")) {
      navigate("/dashboard");
    }
  }, [userData, location.pathname, navigate]);

  return (
    <main>
      <Routes>
        {/* Redirigir si está logueado */}
        <Route path='/login' element={userData ? <Navigate to="/dashboard" /> : <Login />} />
        <Route path='/register' element={userData ? <Navigate to="/dashboard" /> : <RegisterPage />} />
        
        {/* Rutas accesibles a todos */}
        <Route path='/home' element={<Landing />} />
        
        {/* Ruta protegida */}
        <Route path='/dashboard' element={userData ? <Dashboard /> : <Navigate to="/login" />} />

        {/* Ruta para crear ticket */}
        <Route path='/create-ticket' element={<CreateConsultTicket />} />
        
        {/* Ruta para nuevo ticket */}
        <Route path='/newticket' element={<TicketForm />} />
        <Route path='/newservice' element={<ServiceForm/>}></Route>
      </Routes>
    </main>
  );
}

export default App;
