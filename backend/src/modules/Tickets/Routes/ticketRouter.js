import express from "express";
import { getTicket, createTicket, updateTicket, deleteTicket } from "../Controllers/ticketController.js";
import { ticketValidation, validate } from "../../../config/validations/ticketsValidations.js";

const ticketRouter = express.Router();

// Rutas de los endpoints para modelo Tickets

ticketRouter.get("/", getTicket);
ticketRouter.post("/", ticketValidation, validate, createTicket);
ticketRouter.put("/", ticketValidation, validate, updateTicket);
ticketRouter.delete("/", deleteTicket);

export default ticketRouter;
