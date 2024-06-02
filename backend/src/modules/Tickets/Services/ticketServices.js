import Tickets from "../Schemas/ticketSchema.js";

export const getTicketAll = async () => {
    try {
      const Ticket = await Tickets.find();
  
      if (!Ticket) {
        throw new Error("Error al buscar el ticket.");
      }
  
      return Ticket;
    } catch (error) {
      throw error;
    }
  };

export const getTicketById = async (id) => {
  try {
    const Ticket = await Tickets.findById(id);

    if (!Ticket) {
      throw new Error("Error al buscar el ticket.");
    }

    return Ticket;
  } catch (error) {
    throw error;
  }
};

export const createTickets = async (dataTicket) => {
  try {
    if (!dataTicket) {
      throw new Error("Falta informacion.");
    }

    const newData = new Tickets({
        subject: dataTicket.subject,
        description: dataTicket.description,
        status: dataTicket.status || "En curso",
        user: dataTicket.user,
        firsName: dataTicket.firsName || "",
        lastName: dataTicket.lastName || "",
        phone: dataTicket.phone || "",
        agent: dataTicket.agent,
        service: dataTicket.service,
    });
    const newTicket = await Tickets.create(newData);

    if (!newTicket) {
      throw new Error("Error al crear el tiecket.");
    }

    return newTicket;
  } catch (error) {
    throw error;
  }
};

export const updateTickets = async (dataTicket) => {
  try {
    const query = { _id: dataTicket.id };
    const update = {
      $set: {
        subject: dataTicket.subject,
        description: dataTicket.description,
        status: dataTicket.status,
        user: dataTicket.user,
        firsName: dataTicket.firsName,
        lastName: dataTicket.lastName,
        phone: dataTicket.phone,
        agent: dataTicket.agent,
        service: dataTicket.service,
      },
    };
    const ticket = await Tickets.updateOne(query, update);
    if (!ticket) {
      throw new Error("Ticket no actualizado.");
    }

    return ticket;
  } catch (error) {
    throw error;
  }
};

export const deleteTickets = async (id) => {
  try {
    const query = { _id: id };
    const deletedTicket = await Tickets.deleteOne(query);
    if (!deletedTicket) {
      throw new Error("Ticket no se pudo eliminar.");
    }
    return deletedTicket;
  } catch (error) {
    throw error;
  }
};
