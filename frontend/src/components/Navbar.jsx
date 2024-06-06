// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
const Navbar = ({ username, profilePic }) => {
    return (
        <nav className="bg-white-800 p-4">
            <div className="flex justify-between items-center">
                <div className="text-black">S15-Ticketera</div>

                <div className="flex items-center text-white">
                    {/* Foto del usuario */}
                    <img
                        src={profilePic}
                        alt="User Profile"
                        className="w-8 h-8 rounded-full mr-2"
                    />

                    {/* Icono del usuario */}
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>

                    {/* Nombre del usuario */}
                    <span className='text-principal'>Hola, {username}</span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

