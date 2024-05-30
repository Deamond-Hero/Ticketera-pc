import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Login from './pages/LoginPage';
import Register from './pages/RegisterPage';
import './App.css'

function App() {

  return (
    <main>
      <Routes >
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes >
    </main>
  )
}

export default App
