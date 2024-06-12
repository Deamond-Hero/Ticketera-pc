import Tickets from "../Schemas/ticketSchema.js";

export const getTicketAll = async () => {
  const Ticket = await Tickets.find().populate("user").populate("agent").populate("service");

  if (!Ticket) {
    throw new Error("Error al buscar el ticket.");
  }

  return Ticket;
};

export const getTicketAllByAgent = async (id) => {
  const query = { agent: id };
  const Ticket = await Tickets.find(query).populate("user").populate("agent").populate("service");

  if (!Ticket) {
    throw new Error("Error al buscar los tickets.");
  }

  return Ticket;
};

export const getTicketAllByUser = async (id) => {
  const query = { user: id };
  const Ticket = await Tickets.find(query).populate("agent").populate("service");

  if (!Ticket) {
    throw new Error("Error al buscar los tickets.");
  }

  return Ticket;
};

export const getTicketById = async (id) => {
  const Ticket = await Tickets.findById(id).populate("agent").populate("service").populate("comments");

  if (!Ticket) {
    throw new Error("Error al buscar el ticket.");
  }

  return Ticket;
};

export const createTickets = async (dataTicket) => {
  if (!dataTicket) {
    throw new Error("Falta informacion.");
  }

  const newData = new Tickets({
    subject: dataTicket.subject,
    description: dataTicket.description,
    status: dataTicket.status || "Pendiente",
    user: dataTicket.user,
    firstName: dataTicket.firstName || "",
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
};

export const updateTickets = async (dataTicket) => {
  const query = { _id: dataTicket.id };
  const update = {
    $set: {
      subject: dataTicket.subject,
      description: dataTicket.description,
      status: dataTicket.status,
      user: dataTicket.user,
      firstName: dataTicket.firstName,
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
};

export const deleteTickets = async (id) => {
  const query = { _id: id };
  const deletedTicket = await Tickets.deleteOne(query);
  if (!deletedTicket) {
    throw new Error("Ticket no se pudo eliminar.");
  }
  return deletedTicket;
};
