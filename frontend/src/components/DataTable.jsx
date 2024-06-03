import { useEffect, useState } from "react";

export const DataTable = () => {
  const [dataTickets, setDataTickets] = useState({});

  useEffect(() => {}, []);

  const data = [
    {
      orderNumber: 1,
      technical: "Juan",
      service: "reparación",
      state: "En proceso",
      date: "2024-05-01",
    },
    {
      orderNumber: 2,
      technical: "Juan",
      service: "Cambio hardware",
      state: "Finalizado",
      date: "2024-04-28",
    },
    {
      orderNumber: 3,
      technical: "Juan",
      service: "Cambio SO",
      state: "En proceso",
      date: "2024-04-27",
    },
  ];

  return (
    // <div>
    //     <table>
    //     <thead>
    //         <tr>
    //         <th>Numero de orden</th>
    //         <th>Técnico</th>
    //         <th>Servicio</th>
    //         <th>Estado</th>
    //         <th>Fecha</th>
    //         </tr>
    //     </thead>
    //     <tbody>
    //         {
    //             data.map(item => (
    //                 <tr key={item.orderNumber}>
    //                     <td>{item.orderNumber}</td>
    //                     <td>{item.technical}</td>
    //                     <td>{item.service}</td>
    //                     <td>{item.state}</td>
    //                     <td>{item.date}</td>
    //                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
    //                         <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
    //                     </svg>
    //                 </tr>
    //             ))
    //         }
    //     </tbody>
    //     </table>
    // </div>

    <div className="flex flex-col">
      <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-gray-200 border-b">
                <tr>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Numero de orden
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Técnico
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Servicio
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Estado
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Fecha
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    5
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    Ted
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    Obama
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    @fat
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    @fat
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
