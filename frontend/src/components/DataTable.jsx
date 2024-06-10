import React, { useEffect, useState } from "react";
import { useModal } from "../hooks/useModal";
import { ModalTicket } from "../utils/ModalTicket";
import data from "../utils/tickets.json";

export const DataTable = () => {
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [isOpen, openModal, closeModal] = useModal();

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const ticketsPerPage = 10;

  const tickets = data;

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
      return a.id - b.id;
    } else {
      return b.id - a.id;
    }
  });

  const filteredTickets = sortedTickets.filter((ticket) =>
    ticket.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastTicket = currentPage * ticketsPerPage;
  const indexOfFirstTicket = indexOfLastTicket - ticketsPerPage;
  const currentTickets = filteredTickets.slice(
    indexOfFirstTicket,
    indexOfLastTicket
  );

  const getStatusClasses = (status) => {
    switch (status) {
      case 'En Revisión':
        return 'bg-yellow-500 text-violet-600 rounded-md';
      case 'Presupuestado':
        return 'bg-purple-500 text-purple-700 rounded-md';
      case 'En Cola':
        return 'bg-peachpuff text-Amber-700 rounded-md';
      case 'En Proceso':
        return 'bg-amber-200 text-amber-700 rounded-md';
      case 'Finalizado':
        return 'bg-green-200 text-green-700 rounded-md';
      case 'Retirado':
        return 'bg-blue-200 text-blue-700 rounded-md';
      case 'Cancelado':
        return 'bg-red-200 text-red-700 rounded-md';
      default:
        return '';
    }
  };

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
  for (
    let i = 1;
    i <= Math.ceil(filteredTickets.length / ticketsPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex items-end">
      <div className="overflow-x-auto w-full mr-[2rem] ml-[2rem] border-[1px] border-black-250 shadow-md">
        <div className="py-2 inline-block min-w-full sm:px-4 lg:px-4">
          <div className="overflow-hidden">
            <div>
              <input
                type="text"
                placeholder="Buscar..."
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
                    key={ticket.id}
                    className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                  >
                    <td className="px-4 py-2 whitespace-nowrap text-xs font-medium text-gray-900">
                      {ticket.id}
                    </td>
                    <td className="text-xs text-gray-900 font-light px-4 py-2 whitespace-nowrap">
                      {ticket.agent}
                    </td>
                    <td className="text-xs text-gray-900 font-light px-4 py-2 whitespace-nowrap">
                      {ticket.service}
                    </td>
                    <td >
                      <div className={`text-xs font-light text-center inline-flex items-center justify-center whitespace-nowrap p-[.1rem] rounded-md ${getStatusClasses(ticket.status)}`}>
                        {ticket.status}
                      </div>

                    </td>
                    <td className="text-xs text-gray-900 font-light px-4 py-2 whitespace-nowrap">{ticket.date}

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
                  className={`px-4 py-2 ${currentPage === number
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
      {
        isOpen && (
          <ModalTicket closeModal={closeModal} ticket={selectedTicket} />
        )
      }
    </div >
  );
};
