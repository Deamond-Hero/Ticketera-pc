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
import ViewTicket from './components/ViewTicket';

function App() {
  const userData = useSelector((state) => state.auth.userData);
  const isLogged = JSON.parse(window.localStorage.getItem("user"))
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
        {/* Redirigir a landing si se accede a "/"  */}
        <Route path='/' element={isLogged ? <Navigate to="/home" /> : <Navigate to="/home" />} />
        {/* Redirigir si está logueado */}
        <Route path='/login' element={isLogged ? <Navigate to="/dashboard" /> : <Login />} />
        <Route path='/register' element={isLogged ? <Navigate to="/dashboard" /> : <RegisterPage />} />

        {/* Rutas accesibles a todos */}
        <Route path='/home' element={<Landing />} />

        {/* Ruta protegida */}
        <Route path='/dashboard' element={isLogged ? <Dashboard /> : <Navigate to="/login" />} />

        {/* Ruta para crear ticket */}
        <Route path='/create-ticket' element={<CreateConsultTicket />} />

        {/* Ruta para nuevo ticket */}
        <Route path='/newticket' element={<TicketForm />} />
        <Route path='/newservice' element={<ServiceForm />} />
        <Route path='/myTicketStatus' element={<ViewTicket />} />
      </Routes>
    </main>
  );
}

export default App;
