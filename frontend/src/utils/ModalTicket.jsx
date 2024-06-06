import { useState } from "react";

// eslint-disable-next-line react/prop-types
export const ModalTicket = ({ ticket, closeModal }) => {

    const updateTicket = async(formTicket) =>{
        return async() =>{
            try {
                const response = await api.get(`/api/tickets`, formTicket);
                console.log(response)
            }catch{
                console.log("Error");
            }
        }
    }

    const [formTicket, setFormTicket] = useState({
        id: ticket?.id,
        firstName: ticket?.firstName,
        lastName: ticket?.lastName,
        phone: ticket?.phone,
        subject : ticket?.subject,
        user: ticket?.user,
        description: ticket?.description,
        status: ticket?.status,
        agent: ticket?.agent,
        service: ticket?.service,
    })

    const changeValue = (e) => {
        const { name, value } = e.target;
        setFormTicket(prevState => ({
            ...prevState,
            [name]: value
        }))

    }

    const ticketSubmit = () => {
        // event.prevent.default()
        console.log("TicketModificado")
        updateTicket(formTicket)
    }

    const cancelSubmit = () => {
        // event.prevent.default()
        console.log("TicketCancelado")
        closeModal()
    }

    const stateMachine = {
        enCola: "En cola",
        enRevisión: "En Revisión",
        presupuestado: "Presupuestado",
        enProceso: "En proceso",
        finalizado: "Finalizado",
        retirado: "Retirado",
        cancelado: "Cancelado"
    }


    return (
        <div className="flex fixed top-0 left-0 w-full h-full items-center justify-center bg-gray-800 bg-opacity-50 ">
            <div className="flex-col bg-white rounded-3xl p-8 max-w-lg w-[70rem] h-[fit-content]">
                <h1 className="text-xl font-bold mb-4 text-center">Detalles del ticket</h1>
                <form className="flex flex-col mb-4 justify-center ml-[1rem] " onSubmit={ticketSubmit}>

                    <div className="flex-col aling-left mt-[1rem]">
                        <p>Técnico: {ticket?.tecnico}</p>
                        <p>Fecha de ingreso: {ticket?.date}</p>
                        <p>Ultima modificación: {ticket?.updateDate}</p>
                    </div>
                    
                    <div className="flex mt-[2rem]">
                        <div className="flex flex-col">
                            <label>Nombre</label>
                            <input
                                className="appearance-none bg-white border border-gray-300 rounded mt-[.1rem] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 w-[90%]"
                                type="text"
                                name="firstName"
                                value={formTicket.firstName}
                                onChange={changeValue}
                                placeholder={ticket?.firstName}
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
                                placeholder={ticket?.lastName}
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
                            placeholder={ticket?.phone}
                        />
                    </div>
                    <div className="flex flex-col mt-[1rem]">
                        <label>Título</label>
                        <input
                            className="appearance-none bg-white border border-gray-300 rounded mt-[.1rem] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 w-[95%]"

                            type="text"
                            name="subject"
                            value={formTicket.subject}
                            onChange={changeValue}
                            placeholder={ticket?.subject}
                        />
                    </div>
                    <div className="flex flex-col mt-[1rem]">
                        <label>Observaciones del cliente</label>
                        <textarea
                            className="appearance-none bg-white border border-gray-300 rounded mt-[.1rem] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 w-[95%]"
                            maxLength={250}
                            onChange={changeValue}
                            name="description"
                            value={formTicket.description}
                            placeholder={ticket?.description ? ticket.description : ""}
                        />
                    </div>

                    <div className="flex flex-col mt-[1rem]">
                        <label>Observaciones del técnico</label>
                        <textarea
                            className="appearance-none bg-white border border-gray-300 rounded mt-[.1rem] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 w-[95%]"
                            maxLength={250}
                            onChange={changeValue}
                            name="description"
                            value={formTicket.description}
                            placeholder={ticket?.description ? ticket.description : ""}
                        />
                    </div>
                    <div className="flex flex-col mt-[1rem]">
                        <label>Modificar estado del ticket</label>
                        <select onChange={changeValue} name="status" className="appearance-none bg-white border border-gray-300 rounded mt-[.5rem] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 w-[95%]">
                            <option className="bg-orange-200 text-orange-500" value={stateMachine.enCola}>En cola</option>
                            <option className="bg-yellow-200 text-purple-500" value={stateMachine.enRevisión}>En revisión</option>
                            <option className="bg-purple-200 text-purple-800" value={stateMachine.presupuestado}>Presupuestado</option>
                            <option className="bg-brown-700 text-brown-800" value={stateMachine.enProceso}>En proceso</option>
                            <option className="bg-green-200 text-green-700" value={stateMachine.finalizado}>Finalizado</option>
                            <option className="bg-blue-200 text-blue-500" value={stateMachine.retirado}>Retirado</option>
                            <option className="bg-red-200 text-red-500" value={stateMachine.cancelado}>Cancelado</option>
                        </select>
                    </div>
                </form>
                <div className="flex justify-end mt-[3rem]">
                    <button className="h-10 w-96 rounded-lg text-[#FFFFFF] text-l tracking-wide bg-default-btn ml-[1rem] mr-[1rem]" onClick={cancelSubmit}>Cancelar</button>
                    <button className="h-10 w-96 rounded-lg text-[#FFFFFF] text-l tracking-wide bg-blue-ppal ml-[1rem] mr-[1rem]" type="submit">Editar ticket</button>
                </div>
            </div>
        </div>

    )
}

