import { resSuccess, resFail } from "../../../config/utils/response.js";
import {
  getTicketById,
  getTicketAll,
  getTicketAllByUser,
  getTicketAllByAgent,
  createTickets,
  updateTickets,
  deleteTickets,
} from "../Services/ticketServices.js";

export const getTicket = async (req, res) => {
  try {
    const { id } = req.params;
    let result;

    if (id!="{id}") {
      result = await getTicketById(id);
      resSuccess(res, 200, `Ticket con id: ${id}`, result);
    } else {
      result = await getTicketAll();
      resSuccess(res, 200, "Lista total de tickets:", result);
    }
  } catch (error) {
    resFail(res, 400, "El ticket no existe. Verifique el id.", error);
  }
};

export const getTicketByUser = async (req, res) => {
  try {
    console.log(req.params, "xuser")
    const { id } = req.params;
    let result;

    if (id!="{id}") {
      result = await getTicketAllByUser(id);
      resSuccess(res, 200, `Tickets del usuario con id: ${id}`, result);
    } else {
      result = await getTicketAll();
      resSuccess(res, 200, "Lista total de tickets:", result);
    }
  } catch (error) {
    resFail(res, 400, "El ticket no existe. Verifique el id.", error);
  }
};

export const getTicketByAgent = async (req, res) => {
  try {
    const { id } = req.params;
    let result;

    if (id!="{id}") {
      result = await getTicketAllByAgent(id);
      resSuccess(res, 200, `Tickets del agente con id: ${id}`, result);
    } else {
      result = await getTicketAll();
      resSuccess(res, 200, "Lista total de tickets:", result);
    }
  } catch (error) {
    resFail(res, 400, "El ticket no existe. Verifique el id.", error);
  }
};

export const createTicket = async (req, res) => {
  try {
    const newTicket = req.body;
    const result = await createTickets(newTicket);
    resSuccess(res, 200, "Ticket creado con éxito", result);
  } catch (error) {
    resFail(res, 400, error.message, error);
  }
};

export const updateTicket = async (req, res) => {
  try {
    const updateTicket = req.query;
    const result = await updateTickets(updateTicket);
    resSuccess(res, 200, "Ticket actualizado con éxito", result);
  } catch (error) {
    resFail(res, 400, error.message, error);
  }
};

export const deleteTicket = async (req, res) => {
  try {
    const { id } = req.query;
    const result = await deleteTickets(id);
    resSuccess(res, 200, `Ticket con id: ${id} fue eliminado exitosamente.`, result);
  } catch (error) {
    resFail(res, 400, error.message, error);
  }
};
