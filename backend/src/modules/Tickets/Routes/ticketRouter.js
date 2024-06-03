import express from "express";
import { getTicket, createTicket, updateTicket, deleteTicket } from "../Controllers/ticketController.js";
import { ticketValidation, getTicketValidation, validate } from "../../../config/validations/ticketsValidations.js";

const ticketRouter = express.Router();

// Rutas de los endpoints para modelo Tickets

ticketRouter.get("/", getTicketValidation, validate, getTicket);
ticketRouter.get("/:id", getTicketValidation, validate, getTicket);
ticketRouter.post("/", ticketValidation, validate, createTicket);
ticketRouter.put("/", ticketValidation, validate, updateTicket);
ticketRouter.delete("/", deleteTicket);

export default ticketRouter;
