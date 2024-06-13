/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Logout } from './Logout';
import { FaUserCircle, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { useModal } from '../hooks/useModal';
import Logo from '../assets/Logo.png'

// eslint-disable-next-line react/prop-types
const Navbar = ({ username, profilePic }) => {
    const isLogged = useSelector((state) => state.auth.userData);
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isOpen, openModal, closeModal] = useModal();

    const handleRegister = () => { navigate("/register"); }
    const handleLogin = () => { navigate("/login"); }
    const handleUserMenu = () => { setIsMenuOpen(!isMenuOpen); }
    const handleProfile = () => { navigate("/userProfile"); }
    const handleDashboard = () => { navigate("/dashboard"); }

    return (
        <nav className="bg-white-800 p-2 sm:p-4 font-urbanist">
            <div className="flex justify-between items-center">
                <div className="text-blue-ppal sm:pl-6 font-bold sm:text-2xl flex items-center">
                    <img src={Logo} alt="Icono Logo" className='flex-shrink: 0 h-10'/>
                </div>

                {isLogged ? (
                    <div className='flex gap-2 items-center'>
                        <div className="flex items-center text-white">
                            {profilePic ? (
                                <img
                                    src={profilePic}
                                    alt="User Profile"
                                    className="w-8 h-8 rounded-full mr-2"
                                />
                            ) : (
                                <FaUserCircle className='text-blue-ppal w-8 h-8 mr-2' />
                            )}

                            <p className='text-principal'>Hola, <span className='font-bold'>{username ? username : "Usuario"}</span></p>

                            {isMenuOpen ? (
                                <FaArrowLeft className='text-blue-ppal w-8 h-8 p-2 ml-1 hover:bg-gray-200 rounded-full' onClick={handleUserMenu} />
                            ) : (
                                <FaArrowRight className='text-blue-ppal w-8 h-8 p-2 ml-1 hover:bg-gray-200 rounded-full' onClick={handleUserMenu} />
                            )}
                        </div>

                        {isMenuOpen && (
                            <ul className='flex gap-1 text-blue-ppal'>
                                <li className='hover:bg-gray-200 px-2 py-1 rounded-2xl cursor-pointer' onClick={handleProfile}>Perfil</li>
                                <li className='hover:bg-gray-200 px-2 py-1 rounded-2xl cursor-pointer' onClick={handleDashboard}>Mis Tickets</li>
                                <li className='hover:bg-gray-200 px-2 py-1 rounded-2xl'><Logout /></li>
                            </ul>
                        )}
                    </div>
                ) : (
                    <div className='flex gap-1 sm:gap-4 sm:pr-8'>
                        <button className='border-blue-ppal border rounded-full w-28 h-10 font-semibold text-sm' onClick={handleRegister}>Registrarse</button>
                        <button className='bg-blue-ppal rounded-full text-white w-28 h-10 font-semibold text-sm' onClick={handleLogin}>Ingresar</button>
                    </div>
                )}
                {isOpen && (
                    <UserProfileModal closeModal={closeModal} />
                )}
            </div>
        </nav>
    );
};

export default Navbar;


