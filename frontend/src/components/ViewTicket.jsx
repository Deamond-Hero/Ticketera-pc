import { Link } from "react-router-dom";
import statusMachine from "../utils/statusMachine.json"

const ViewTicket = () => {

    return (

        <div className="flex items-center justify-center w-full h-[fit-content]" style={{ background: 'linear-gradient(to right, #004562, #42B4C2)' }}>
            <div className="flex-col bg-white rounded-3xl p-8 max-w-lg w-[70rem] h-[fit-content] m-10">
                <h1 className="text-3xl font-bold mb-4 text-center">Seguimiento</h1>
                <h3 className="text-xl font-bold mb-4 text-center">Ticket 931242</h3>
                <div className="w-[70%]">
                    <ol class="relative border-s border-gray-200 dark:border-gray-700 ml-10 mt-20">
                        <li class="mb-10 ms-4">
                            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-300 dark:bg-gray-300"></div>
                            <h3 class="text-lg font-semibold text-gray-300 ">{statusMachine.retirado}</h3>
                            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2022</time>
                        </li>
                        <li class="mb-10 ms-4">
                            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-300 dark:bg-gray-300"></div>
                            <h3 class="text-lg font-semibold text-gray-300 ">{statusMachine.finalizado}</h3>
                            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">13/3/24 Su artículo esta listo para retirar</time>
                        </li>
                        <li class="mb-10 ms-4">
                            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-300 dark:bg-gray-300"></div>
                            <h3 class="text-lg font-semibold text-gray-300 ">{statusMachine.enProceso}</h3>
                            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">13/3/24 Su artículo esta listo para retirar</time>
                        </li>
                        <li class="mb-10 ms-4">
                            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-300 dark:bg-gray-300"></div>
                            <h3 class="text-lg font-semibold text-gray-300 ">{statusMachine.presupuestado}</h3>
                            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">13/3/24 Su artículo esta listo para retirar</time>
                        </li>
                        <li class="mb-10 ms-4">
                            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <h3 class="text-lg font-semibold text-gray-900 ">{statusMachine.enCola}</h3>
                            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">3/3/24 Revisaremos tu artículo</time>
                        </li>
                        <li class="ms-4">
                            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-300 dark:bg-gray-300"></div>
                            <h3 class="text-lg font-semibold text-gray-300 ">{statusMachine.enRevision}</h3>
                            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">1/3/24 Debes llevar tu artículo al local</time>
                        </li>

                    </ol>
                </div>
                <div className="flex flex-col items-center text mt-[4rem]">
                    <p>Si tienes alguna consulta o quieras contactar con el técnico por favor</p>
                    <Link to="/login" className="text-black text-xl  hover:text-blue-500">
        Inicia sesión
      </Link>
                </div>
            </div>
        </div>
    )
}


export default ViewTicket;