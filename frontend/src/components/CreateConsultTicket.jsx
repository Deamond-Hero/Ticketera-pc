/* eslint-disable react-hooks/rules-of-hooks */
// eslint-disable-next-line no-unused-vars, react-refresh/only-export-components
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {ModalTicket} from '../utils/ModalTicket';
import api from '../utils/Api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import ViewTicket from './ViewTicket';


const CreateConsultTicket = () => {
    const navigate = useNavigate();
    const [ticketId, setTicketId] = useState('');
    const [ticket, setTicket] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const baseURL = import.meta.env.VITE_PUBLIC_BACKEND_URL


    const isAuthenticated = () => {
        return localStorage.getItem('token') !== null;
    }

    const handleCreateTicket = () => {
        if (isAuthenticated()) {
            navigate('/newticket');
        } else {
            navigate('/login');
        }
    }

    const handleConsultTicket = async () => {

    try {
        const response = await axios.get(`${baseURL}api/tickets/${ticketId}`);
        if (ticketId === "") {
            toast.error('Ingresa el ID de tu ticket'); // Muestra una notificación toast de advertencia
        } else {
            // setTicket(response.data);
            // setIsModalOpen(true);
            navigate('/myTicketStatus', {state: {ticket: response.data}})
        }
    } catch (error) {
        console.error("Error fetching ticket:", error);
    }
}

    return (
        <div className="flex justify-center items-center m-8">
           <div className="flex space-x-4 bg-white p-5 rounded-xl">
                <div className="p-5">
                    <h2 className='mb-5 font-urbanist font-semibold'>Crear nuevo Ticket</h2>
                    <button 
                        className="flex items-center bg-principal text-white p-10 rounded-xl"
                        onClick={handleCreateTicket}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z" />
                        </svg>
                    </button>
                </div>
            
                <div className="border-r border-gray-300 mx-4"></div>
                <div className="p-5">
                    <h3 className='mb-5 font-urbanist font-semibold'>Conocé el estado de tu reparación <br /> en todo momento</h3>
                    <div className="relative w-full">
                        <input 
                            type="text" 
                            className="font-urbanist font-regula20 w-full p-2 pr-12 border border-gray-300 rounded-full shadow-md focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Ingresá el número de orden"
                            value={ticketId}
                            onChange={(e) => setTicketId(e.target.value)}
                        />
                       
                        <button 
                            className="absolute right-0 top-0 h-full px-4 bg-principal text-white rounded-r-full"
                            onClick={handleConsultTicket}
                        >
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                className="h-5 w-5" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth="2" 
                                    d="M10 21a9 9 0 100-18 9 9 0 000 18zM21 21l-5-5"
                                />
                            </svg>
                        </button>
                    </div>  
                    <p className='text-color-input flex start font-urbanist font-regular16'>Ej: 00045546546456</p>
                </div>
            </div>
            <ToastContainer />
            {isModalOpen && <ModalTicket ticket={ticket} closeModal={() => setIsModalOpen(false)} />}
        </div>
    );
}

export default CreateConsultTicket;
