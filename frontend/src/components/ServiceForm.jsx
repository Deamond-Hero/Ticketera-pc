import { useEffect, useState } from "react"
import api from "../utils/Api"
import axios from "axios"
import { getAllAgents, getAllServices } from "../redux/ticket/actionsTicket"
import { useDispatch, useSelector } from "react-redux"

const ServiceForm = () => {

    const dispatch = useDispatch();
    const allAgents = useSelector(state => state.ticket.agentList)
    const [formNewService, setFormNewService] = useState({
        name: '',
        description: '',
        price: "",
        agent: ""
    })

    useEffect(()=>{
        dispatch(getAllAgents())
        console.log(allAgents)
    },[])

    
    useEffect(()=>{
        console.log(formNewService)
    },[formNewService])

    const createService = async (form) => {
        console.log(form)
        if (form) {
            try {
                const respose = await axios.post("http://localhost:8000/api/services", form)
                console.log(respose)
            } catch (error) {
                console.log(error)
            }
        }
    }

    const changeValue = (event) => {
        const { name, value } = event.target;
        setFormNewService((prevState) => (
            { ...prevState, [name]: value }))
    }

    const formSubmit = (event) => {
        event.preventDefault()
        console.log("boton presionado")

        if (formNewService.name &&
            formNewService.agent &&
            formNewService.description &&
            formNewService.price) {
            createService(formNewService)
            console.log("Se creó el servicio" + formNewService.name)
        } else {
            console.log("Faltan datos")
        }
    }

    return (
        <div className="flex items-center justify-center w-full ">
            <div className="flex-col bg-white rounded-3xl p-8 max-w-lg w-[70rem] h-[fit-content]">
                <h1 className="text-xl font-bold mb-4 text-center">Nuevo servicio</h1>
                <form className="flex flex-col mb-4 justify-center ml-[1rem]">

                    <div className="flex mt-[2rem]">
                        <div className="flex flex-col">
                            <label>Nombre</label>
                            <input
                                className="appearance-none bg-white border border-gray-300 rounded mt-[.1rem] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 w-[90%]"
                                type="text"
                                name="name"
                                value={formNewService.name}
                                onChange={changeValue}
                                placeholder="Baño químico"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col mt-[1rem]">
                        <label>Precio</label>
                        <input
                            className="appearance-none bg-white border border-gray-300 rounded mt-[.1rem] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 w-[95%]"

                            type="number"
                            name="price"
                            value={formNewService.price}
                            onChange={changeValue}
                            placeholder="1000"
                        />
                    </div>
                    <div className="flex flex-col mt-[1rem]">
                        <label>Descripción</label>
                        <input
                            className="appearance-none bg-white border border-gray-300 rounded mt-[.1rem] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 w-[95%]"

                            type="text"
                            name="description"
                            value={formNewService.description}
                            onChange={changeValue}
                            placeholder="Sumergimiento de componentes en alcohol isopropilico."
                        />
                    </div>

                    <div className="flex flex-col mt-[1rem]">
                        <label>Selecciona un Técnico</label>
                        <select>
                            {allAgents?.map(agent => (
                                <option key={agent._id} value={agent._id}>{agent.firstName} {agent.lastName}</option>
                            ))}
]
                        </select>
                    </div>
                </form>
                <div className="flex justify-center mt-[3rem]">

                    <button className="h-10 w-96 rounded-lg text-[#FFFFFF] text-l tracking-wide bg-blue-ppal ml-[1rem] mr-[1rem]" type="submit" onClick={formSubmit}>Crear servicio</button>

                </div>
            </div>
        </div>
    )

}


export default ServiceForm