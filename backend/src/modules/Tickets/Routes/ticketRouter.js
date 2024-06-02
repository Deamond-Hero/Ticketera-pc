import express from "express";
import { getTicket, createTicket, updateTicket, deleteTicket } from "../Controllers/ticketController.js";

const ticketRouter = express.Router();

// Rutas de los endpoints para modelo Tickets

ticketRouter.get("/", getTicket);
ticketRouter.get("/:id", getTicket);
ticketRouter.post("/", createTicket);
ticketRouter.put("/", updateTicket);
ticketRouter.delete("/", deleteTicket);

export default ticketRouter;
