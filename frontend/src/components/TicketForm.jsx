import { useState } from "react";
import services from "../utils/services.json"

const techservices = services
const userData = JSON.parse(window.localStorage.getItem('user'))

const TicketForm = (ticket) => {

    const [formTicket, setFormTicket] = useState({
        subject: "",
        description: "",
        status: "",
        user: userData._id,
        firstName: "",
        lastName: "",
        phone: "",
        agent: "6661c79417513136088f4575",  // Como va a definir un agente el cliente?
        service: "Reballing", // De donde me traigo las lista de servicios?
    })

    console.log (userData)

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
        <div className="flex items-center justify-center w-full ">
            <div className="flex-col bg-white rounded-3xl p-8 max-w-lg w-[70rem] h-[fit-content]">
                <h1 className="text-xl font-bold mb-4 text-center">Nuevo ticket</h1>
                <form className="flex flex-col mb-4 justify-center ml-[1rem] " onSubmit={ticketSubmit}>


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
                        <label>Tipo de servicio</label>
                        {techservices && techservices.map((serv) => (
                            <div className="flex">
                                <input type="checkbox" name={serv.name}
                                    value={serv.name} className="rounded-full"
                                />
                                <p className="ml-[1rem]">{serv.name}</p>
                            </div>))
                        }
                    </div>

                    <div className="flex flex-col mt-[1rem]">
                        <label>Ampliá tu caso en observaciones (opcional)</label>
                        <textarea
                            className="appearance-none bg-white border border-gray-300 rounded mt-[.1rem] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 w-[95%]"
                            maxLength={250}
                            onChange={changeValue}
                            name="description"
                            value={formTicket.description}
                            placeholder={ticket?.description ? ticket.description : ""}
                        />
                    </div>
                </form>
                <div className="flex justify-center mt-[3rem]">

                    <button className="h-10 w-96 rounded-lg text-[#FFFFFF] text-l tracking-wide bg-blue-ppal ml-[1rem] mr-[1rem]" type="submit">Crear ticket</button>
                </div>
            </div>
        </div>

    )
}

export default TicketForm;
