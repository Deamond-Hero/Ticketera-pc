import { resFail, resSuccess } from "../../../config/utils/response.js";
import { statusEmail } from "../../Mailer/controller.js";
import {
  createTickets,
  deleteTickets,
  getTicketAll,
  getTicketAllByAgent,
  getTicketAllByUser,
  getTicketById,
  updateTickets,
} from "../Services/ticketServices.js";

export const getTicket = async (req, res) => {
  try {
    const { id } = req.params;
    let result;

    if (id != "{id}") {
      result = await getTicketById(id);
      resSuccess(res, 200, `Ticket con id: ${id}`, result);
    }
  } catch (error) {
    resFail(res, 400, "El ticket no existe. Verifique el id.", error);
  }
};

export const getAllTickets = async (req, res) => {
  try {
    const response = await getTicketAll();
    resSuccess(res, 200, "Lista total de tickets:", response);
  } catch (error) {
    resFail(res, 400, "Error al obtener todos los tickets", error);
  }
};

export const getTicketByUser = async (req, res) => {
  try {
    const { id } = req.params;
    let result;

    if (id != "{id}") {
      result = await getTicketAllByUser(id);
      resSuccess(res, 200, `Tickets del usuario con id: ${id}`, result);
    }
  } catch (error) {
    resFail(res, 400, "El ticket no existe. Verifique el id.", error);
  }
};

export const getTicketByAgent = async (req, res) => {
  try {
    const { id } = req.params;
    let result;

    if (id != "{id}") {
      result = await getTicketAllByAgent(id);
      resSuccess(res, 200, `Tickets del agente con id: ${id}`, result);
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
    const { updateTicket, role } = req.body;
    const result = await updateTickets(updateTicket);
    await statusEmail(result.id, role);
    resSuccess(res, 200, "Ticket actualizado con éxito", result);
  } catch (error) {
    resFail(res, 400, error.message, error);
  }
};

export const deleteTicket = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await deleteTickets(id);
    resSuccess(res, 200, `Ticket con id: ${id} fue eliminado exitosamente.`, result);
  } catch (error) {
    resFail(res, 400, error.message, error);
  }
};
