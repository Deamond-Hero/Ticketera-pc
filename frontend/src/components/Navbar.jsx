// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { Logout } from './Logout'
import { FaUserCircle, FaArrowRight, FaArrowLeft } from "react-icons/fa"
import { UserProfile } from './UserProfile'
import { useModal } from '../hooks/useModal'

// eslint-disable-next-line react/prop-types
const Navbar = ({ username, profilePic }) => {
    const isLogged = useSelector((state) => state.auth.userData)
    const navigate = useNavigate()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isOpen, openModal, closeModal] = useModal()

    const handleRegister = () => { navigate("/register") }
    const handleLogin = () => { navigate("/login") }
    const handleUserMenu = () => { setIsMenuOpen(!isMenuOpen) }
    const handleOpenModal = () => { openModal() }

    return (
        <nav className="bg-white-800 p-2 sm:p-4 font-urbanist">
            <div className="flex justify-between items-center">
                <div className="text-blue-ppal sm:pl-6 font-bold sm:text-2xl">S15-Ticketera</div>

                {isLogged ?
                    <div className='flex gap-2'>
                        <div className="flex items-center text-white" >
                            {/* Foto del usuario */}
                            {profilePic ?                        
                            <img
                                src={profilePic}
                                alt="User Profile"
                                className="w-8 h-8 rounded-full mr-2"
                            />
                            :
                            <FaUserCircle className='text-blue-ppal w-8 h-8 mr-2'/>
                            }  

                            {/* Nombre del usuario */}
                            <p className='text-principal'>Hola, <span className='font-bold'>{username ? username : "Usuario"}</span></p>

                            {isMenuOpen?
                            <FaArrowLeft className='text-blue-ppal w-8 h-8 p-2 ml-1 hover:bg-gray-200 rounded-full' onClick={handleUserMenu}/>
                            :
                            <FaArrowRight className='text-blue-ppal w-8 h-8 p-2 ml-1 hover:bg-gray-200 rounded-full' onClick={handleUserMenu}/>
                            }
                        </div> 
                                
                        {isMenuOpen &&
                            <ul className='flex gap-1 text-blue-ppal'>
                                <li className='hover:bg-gray-200 px-2 py-1 rounded-2xl' onClick={handleOpenModal}>Perfil</li>
                                <li className='hover:bg-gray-200 px-2 py-1 rounded-2xl'><Link to='/dashboard'>Mis Tickets</Link></li>
                                <li className='hover:bg-gray-200 px-2 py-1 rounded-2xl'><Logout/></li>
                            </ul>
                        }
                    </div>                   
                :
                    <div className='flex gap-1 sm:gap-4 sm:pr-8'>
                        <button className='border-blue-ppal border rounded-full w-28 h-10 font-semibold text-sm' onClick={handleRegister}>Registrarse</button>
                        <button className='bg-blue-ppal rounded-full text-white w-28 h-10 font-semibold text-sm' onClick={handleLogin}>Ingresar</button>
                    </div>
                }
                {
                    isOpen && (
                    <UserProfile closeModal={closeModal}/>
                    )
                }

            </div>
        </nav>
        
    );
};

export default Navbar

