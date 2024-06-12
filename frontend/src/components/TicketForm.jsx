import { useEffect, useState } from "react";
import { createTicket, getAllServices } from "../redux/ticket/actionsTicket";
import { useDispatch, useSelector } from "react-redux";
import statusMachine from "../utils/statusMachine.json";

const TicketForm = () => {
    const userData = JSON.parse(window.localStorage.getItem('user'));
    const techservices = useSelector(state => state.ticket.serviceList);
    const dispatch = useDispatch();
    const [formTicket, setFormTicket] = useState({
        subject: "",
        description: "",
        status: statusMachine.dashboard.enCola,
        user: userData._id,
        firstName: userData.firstName,
        lastName: userData.lastName,
        phone: "",
        agent: "",
        service: "",
    });

    useEffect(() => {
        dispatch(getAllServices());
    }, []);


    const changeValue = (e) => {
        const { name, value } = e.target;
        setFormTicket(prevState => ({
            ...prevState,
            [name]: name === "phone" ? parseInt(value) : value
        }));
    };

    const ticketSubmit = (event) => {
        event.preventDefault();
        // Validar campos antes de enviar
        if (!formTicket.subject || !formTicket.phone || !formTicket.service) {
            alert("Por favor completa todos los campos obligatorios.");
            return;
        }
        dispatch(createTicket(formTicket));
    };

    const cancelSubmit = () => {
        console.log("TicketCancelado");
        closeModal();
    };

    const changeService = (id) => {
        setFormTicket(prevState => ({
            ...prevState, 
            agent: id, 
            service: id
        }));
    };

    return (
        <div className="flex items-center justify-center w-full">
            <div className="flex-col bg-white rounded-3xl p-8 max-w-lg w-[70rem] h-[fit-content]">
                <h1 className="text-xl font-bold mb-4 text-center">Nuevo ticket</h1>
                <form className="flex flex-col mb-4 justify-center ml-[1rem]">
                    <div className="flex mt-[2rem]">
                        <div className="flex flex-col">
                            <label>Nombre</label>
                            <input
                                className="appearance-none bg-white border border-gray-300 rounded mt-[.1rem] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 w-[90%]"
                                type="text"
                                name="firstName"
                                value={formTicket.firstName}
                                onChange={changeValue}
                                placeholder=""
                            />
                        </div>
                        <div className="flex flex-col ">
                            <label>Apellido</label>
                            <input
                                className="appearance-none bg-white border border-gray-300 rounded mt-[.1rem] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 w-[90%]"
                                type="text"
                                name="lastName"
                                value={formTicket.lastName}
                                onChange={changeValue}
                                placeholder=""
                            />
                        </div>
                    </div>
                    <div className="flex flex-col mt-[1rem]">
                        <label>Celular</label>
                        <input
                            className="appearance-none bg-white border border-gray-300 rounded mt-[.1rem] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 w-[95%]"
                            type="tel"
                            name="phone"
                            value={formTicket.phone}
                            onChange={changeValue}
                            placeholder=""
                        />
                    </div>
                    <div className="flex flex-col mt-[1rem]">
                        <label>Asunto</label>
                        <input
                            className="appearance-none bg-white border border-gray-300 rounded mt-[.1rem] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 w-[95%]"
                            type="text"
                            name="subject"
                            value={formTicket.subject}
                            onChange={changeValue}
                            placeholder=""
                        />
                    </div>
                    <div className="flex flex-col mt-[1rem]">
                        <label>Tipo de servicio</label>
                        {techservices && techservices.map((serv) => (
                            <div className="flex" key={serv._id}>
                                <input 
                                    type="radio" 
                                    name="service"
                                    value={serv._id} 
                                    className="rounded-full" 
                                    onChange={() => changeService(serv._id)} 
                                    checked={formTicket.service === serv._id} 
                                />
                                <p className="ml-[1rem]">{serv.name}</p>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col mt-[1rem]">
                        <label>Amplíe su caso en observaciones (opcional)</label>
                        <textarea
                            className="appearance-none bg-white border border-gray-300 rounded mt-[.1rem] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 w-[95%]"
                            maxLength={250}
                            onChange={changeValue}
                            name="description"
                            value={formTicket.description}
                            placeholder=""
                        />
                    </div>
                </form>
                <div className="flex justify-center mt-[3rem]">
                    <button 
                        className="h-10 w-96 rounded-lg text-[#FFFFFF] text-l tracking-wide bg-blue-ppal ml-[1rem] mr-[1rem]" 
                        onClick={ticketSubmit}
                    >
                        Crear ticket
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TicketForm;