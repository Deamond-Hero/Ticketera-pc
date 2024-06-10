// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

const ClientCounter = () => {
    const [pcReparados, setPcReparados] = useState(2150);
    const [notebookReparados, setNotebookReparados] = useState(1500);
    const [clientesFelices, setClientesFelices] = useState(3650);

    useEffect(() => {
        const interval = setInterval(() => {
            setPcReparados(prev => prev + 2);
            setNotebookReparados(prev => prev + 1);
            setClientesFelices(prev => prev + 3);
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex justify-center items-center w-full p-4" style={{ background: 'linear-gradient(to right, #004562, #42B4C2)' }}>
            <div className="m-12 text-center">
                <h2 className="text-white text-4xl font-bold">{pcReparados}</h2>
                <h3 className="text-white text-xl font-semibold">Pc reparados</h3>
            </div>
            <div className="m-12 text-center"> 
                <h2 className="text-white text-4xl font-bold">{notebookReparados}</h2>
                <h3 className="text-white text-xl font-semibold">Notebook reparados</h3>
            </div>
            <div className="m-12 text-center">
                <h2 className="text-white text-4xl font-bold">{clientesFelices}</h2>
                <h3 className="text-white text-xl font-semibold">Clientes felices</h3>
            </div>
        </div>
    );
};

export default ClientCounter;
