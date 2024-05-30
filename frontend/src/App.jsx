import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Login from './pages/LoginPage';
import './App.css'

function App() {

  return (
    <main>
      <Routes >
        <Route path='/login' element={<Login />} />
      </Routes >
    </main>
  )
}

export default App
