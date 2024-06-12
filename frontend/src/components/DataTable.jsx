// import React, { useEffect, useState } from "react";
// import { useModal } from "../hooks/useModal";
// import { ModalTicket } from "../utils/ModalTicket";
// import axios from "axios";

// const baseURL = import.meta.env.VITE_PUBLIC_BACKEND_URL;

// export const getServices = async(id) => {
//   try {
//       const { data } = await axios.get(`${baseURL}/api/services`);
//       return data.payload;
//   } catch (error) {
      
//   } 
// }

// export const DataTable = () => {
//   const [selectedTicket, setSelectedTicket] = useState(null);
//   const [isOpen, openModal, closeModal] = useModal();
//   const [currentPage, setCurrentPage] = useState(1);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [sortOrder, setSortOrder] = useState("asc");
//   const ticketsPerPage = 15;  
//   const [tickets, setTickets] = useState([]);
//   const [services, setServices] = useState([]);

//   const user = JSON.parse(window.localStorage.getItem("user"));


//   const getData = async () => {
//     try {
//       const { data } = await axios.get(`${baseURL}/api/tickets/user/${user._id}`);
//       setTickets(data.payload);  
//       console.log(data.payload);
//     } catch (error) {
//       console.error(error);
//     }
//   };


//   useEffect(() => {
//     const fetchServices = async () => {
//       const servicesData = await getServices();
//       setServices(servicesData);
//     };

//     fetchServices();
//     getData();
//   }, []);

//   const getService = (id) => {
//     const service = services.find((servi) => servi._id === id);
//     return service;
//   }

//   console.log({"ticket" : getService("66629db4f2790274c5c55d96")})

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//     setCurrentPage(1);
//   };

//   const handleSortChange = (e) => {
//     setSortOrder(e.target.value);
//     setCurrentPage(1);
//   };

//   const sortedTickets = tickets.sort((a, b) => {
//     if (sortOrder === "asc") {
//       return a._id.localeCompare(b._id);
//     } else {
//       return b._id.localeCompare(a._id);
//     }
//   });

//   const filteredTickets = sortedTickets.filter((ticket) =>
//     ticket._id && ticket._id.includes(searchTerm)
//   );

//   const indexOfLastTicket = currentPage * ticketsPerPage;
//   const indexOfFirstTicket = indexOfLastTicket - ticketsPerPage;
//   const currentTickets = filteredTickets.slice(indexOfFirstTicket, indexOfLastTicket);

//   const handleOpenModal = (ticket) => {
//     setSelectedTicket(ticket);
//     openModal();
//   };

//   const nextPage = () => {
//     if (currentPage < Math.ceil(filteredTickets.length / ticketsPerPage)) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const prevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   const pageNumbers = [];
//   for (let i = 1; i <= Math.ceil(filteredTickets.length / ticketsPerPage); i++) {
//     pageNumbers.push(i);
//   }

//   if (tickets.length > 0) {
//     return (
//       <div className="flex items-end pt-[8rem] font-poppins">
//         <div className="overflow-x-auto w-full h-[70%] mr-[4rem] ml-[4rem] border-[1px] border-black-250 shadow-md">
//           <div className="py-2 inline-block min-w-full sm:px-4 lg:px-4">
//             <div className="overflow-hidden">
//               <div>
//                 <input
//                   type="text"
//                   placeholder="Buscar por ID..."
//                   value={searchTerm}
//                   onChange={handleSearchChange}
//                   className="border p-2 rounded"
//                 />
//                 <select
//                   value={sortOrder}
//                   onChange={handleSortChange}
//                   className="border p-2 rounded ml-3"
//                 >
//                   <option value="asc">Ascendente</option>
//                   <option value="desc">Descendente</option>
//                 </select>
//               </div>
//               <table className="min-w-full">
//                 <thead className="bg-white border-b">
//                   <tr>
//                     <th
//                       scope="col"
//                       className="text-xs font-medium text-gray-900 px-4 py-2 text-left"
//                     >
//                       Numero de orden
//                     </th>
//                     <th
//                       scope="col"
//                       className="text-xs font-medium text-gray-900 px-4 py-2 text-left"
//                     >
//                       Técnico
//                     </th>
//                     <th
//                       scope="col"
//                       className="text-xs font-medium text-gray-900 px-4 py-2 text-left"
//                     >
//                       Servicio
//                     </th>
//                     <th
//                       scope="col"
//                       className="text-xs font-medium text-gray-900 px-4 py-2 text-left"
//                     >
//                       Estado
//                     </th>
//                     <th
//                       scope="col"
//                       className="text-xs font-medium text-gray-900 px-4 py-2 text-left"
//                     >
//                       Fecha
//                     </th>
//                     <th
//                       scope="col"
//                       className="text-xs font-medium text-gray-900 px-4 py-2 text-center"
//                     >
//                       Editar
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {currentTickets.map((ticket) => (
//                     <tr
//                       key={ticket._id}
//                       className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
//                     >
//                       <td className="px-4 py-2 whitespace-nowrap text-xs font-medium text-gray-900">
//                         {ticket._id}
//                       </td>
//                       <td className="text-xs text-gray-900 font-light px-4 py-2 whitespace-nowrap">
//                         {ticket.agent}
//                       </td>
//                       <td className="text-xs text-gray-900 font-light px-4 py-2 whitespace-nowrap">
//                         {ticket.service}
//                         {/* {getService(ticket.service)} */}
//                       </td>
//                       <td className="text-xs text-gray-900 font-light px-4 py-2 whitespace-nowrap">
//                         {ticket.status}
//                       </td>
//                       <td className="text-xs text-gray-900 font-light px-4 py-2 whitespace-nowrap">
//                         {ticket.createdAt}
//                       </td>
//                       <td className="text-center pr-4">
//                         <button onClick={() => handleOpenModal(ticket)}>
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             strokeWidth="1.5"
//                             stroke="currentColor"
//                             className="w-4 h-4"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
//                             />
//                           </svg>
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//               <div className="flex justify-between mt-4">
//                 <button
//                   onClick={prevPage}
//                   disabled={currentPage === 1}
//                   className="px-4 py-2 bg-gray-200 text-gray-700 rounded"
//                 >
//                   Anterior
//                 </button>
//                 {pageNumbers.map((number) => (
//                   <button
//                     key={number}
//                     onClick={() => paginate(number)}
//                     className={`px-4 py-2 ${
//                       currentPage === number
//                         ? "bg-blue-500 text-white"
//                         : "bg-gray-200 text-gray-700"
//                     } rounded`}
//                   >
//                     {number}
//                   </button>
//                 ))}
//                 <button
//                   onClick={nextPage}
//                   disabled={
//                     currentPage ===
//                     Math.ceil(filteredTickets.length / ticketsPerPage)
//                   }
//                   className="px-4 py-2 bg-gray-200 text-gray-700 rounded"
//                 >
//                   Siguiente
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//         {isOpen && (
//           <ModalTicket closeModal={closeModal} ticket={selectedTicket} />
//         )}
//       </div>
//     );
//   } else {
//     return <div>No tickets found</div>;
//   }
// };


import React, { useEffect, useState } from "react";
import { useModal } from "../hooks/useModal";
import { ModalTicket } from "../utils/ModalTicket";
import axios from "axios";

const baseURL = import.meta.env.VITE_PUBLIC_BACKEND_URL;

export const getServices = async () => {
  try {
    const { data } = await axios.get(`${baseURL}/api/services`);
    return data.payload;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const DataTable = () => {
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [isOpen, openModal, closeModal] = useModal();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const ticketsPerPage = 15;
  const [tickets, setTickets] = useState([]);
  const [services, setServices] = useState([]);

  const user = JSON.parse(window.localStorage.getItem("user"));

  const getData = async () => {
    try {
      const { data } = await axios.get(`${baseURL}/api/tickets/user/${user._id}`);
      setTickets(data.payload);
      console.log(data.payload);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchServices = async () => {
      const servicesData = await getServices();
      setServices(servicesData);
    };

    fetchServices();
    getData();
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
    setCurrentPage(1);
  };

  const sortedTickets = tickets.sort((a, b) => {
    if (sortOrder === "asc") {
      return a._id.localeCompare(b._id);
    } else {
      return b._id.localeCompare(a._id);
    }
  });

  const filteredTickets = sortedTickets.filter((ticket) =>
    ticket._id && ticket._id.includes(searchTerm)
  );

  const indexOfLastTicket = currentPage * ticketsPerPage;
  const indexOfFirstTicket = indexOfLastTicket - ticketsPerPage;
  const currentTickets = filteredTickets.slice(indexOfFirstTicket, indexOfLastTicket);

  const handleOpenModal = (ticket) => {
    setSelectedTicket(ticket);
    openModal();
  };

  const nextPage = () => {
    if (currentPage < Math.ceil(filteredTickets.length / ticketsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredTickets.length / ticketsPerPage); i++) {
    pageNumbers.push(i);
  }

  if (tickets.length > 0) {
    return (
      <div className="flex items-end pt-[8rem] font-poppins">
        <div className="overflow-x-auto w-full h-[70%] mr-[4rem] ml-[4rem] border-[1px] border-black-250 shadow-md">
          <div className="py-2 inline-block min-w-full sm:px-4 lg:px-4">
            <div className="overflow-hidden">
              <div>
                <input
                  type="text"
                  placeholder="Buscar por ID..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="border p-2 rounded"
                />
                <select
                  value={sortOrder}
                  onChange={handleSortChange}
                  className="border p-2 rounded ml-3"
                >
                  <option value="asc">Ascendente</option>
                  <option value="desc">Descendente</option>
                </select>
              </div>
              <table className="min-w-full">
                <thead className="bg-white border-b">
                  <tr>
                    <th
                      scope="col"
                      className="text-xs font-medium text-gray-900 px-4 py-2 text-left"
                    >
                      Numero de orden
                    </th>
                    <th
                      scope="col"
                      className="text-xs font-medium text-gray-900 px-4 py-2 text-left"
                    >
                      Técnico
                    </th>
                    <th
                      scope="col"
                      className="text-xs font-medium text-gray-900 px-4 py-2 text-left"
                    >
                      Servicio
                    </th>
                    <th
                      scope="col"
                      className="text-xs font-medium text-gray-900 px-4 py-2 text-left"
                    >
                      Estado
                    </th>
                    <th
                      scope="col"
                      className="text-xs font-medium text-gray-900 px-4 py-2 text-left"
                    >
                      Fecha
                    </th>
                    <th
                      scope="col"
                      className="text-xs font-medium text-gray-900 px-4 py-2 text-center"
                    >
                      Editar
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currentTickets.map((ticket) => (
                    <tr
                      key={ticket._id}
                      className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                    >
                      <td className="px-4 py-2 whitespace-nowrap text-xs font-medium text-gray-900">
                        {ticket._id}
                      </td>
                      <td className="text-xs text-gray-900 font-light px-4 py-2 whitespace-nowrap">
                        {ticket.agent._id}
                      </td>
                      <td className="text-xs text-gray-900 font-light px-4 py-2 whitespace-nowrap">
                        {ticket.service[0].name}
                      </td>
                      <td className="text-xs text-gray-900 font-light px-4 py-2 whitespace-nowrap">
                        {ticket.status}
                      </td>
                      <td className="text-xs text-gray-900 font-light px-4 py-2 whitespace-nowrap">
                        {ticket.createdAt}
                      </td>
                      <td className="text-center pr-4">
                        <button onClick={() => handleOpenModal(ticket)}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-4 h-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                            />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex justify-between mt-4">
                <button
                  onClick={prevPage}
                  disabled={currentPage === 1}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded"
                >
                  Anterior
                </button>
                {pageNumbers.map((number) => (
                  <button
                    key={number}
                    onClick={() => paginate(number)}
                    className={`px-4 py-2 ${
                      currentPage === number
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-gray-700"
                    } rounded`}
                  >
                    {number}
                  </button>
                ))}
                <button
                  onClick={nextPage}
                  disabled={
                    currentPage ===
                    Math.ceil(filteredTickets.length / ticketsPerPage)
                  }
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded"
                >
                  Siguiente
                </button>
              </div>
            </div>
          </div>
        </div>
        {isOpen && (
          <ModalTicket closeModal={closeModal} ticket={selectedTicket} />
        )}
      </div>
    );
  } else {
    return <div>No tickets found</div>;
  }
};

