import express from "express";
import { ticketValidation, validate } from "../../../config/validations/ticketsValidations.js";
import {
  createTicket,
  deleteTicket,
  getAllTickets,
  getTicket,
  getTicketByAgent,
  getTicketByUser,
  updateTicket,
} from "../Controllers/ticketController.js";

const ticketRouter = express.Router();

// Rutas de endpoints para modelo Tickets

/**
 * @swagger
 * tags:
 *   name: Tickets
 *   description: Tickets API.
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Tickets:
 *       type: object
 *       properties:
 *         subject:
 *           type: string
 *           description: El asunto del ticket
 *         description:
 *           type: string
 *           description: La descripción del ticket
 *         status:
 *           type: string
 *           description: El estado del ticket
 *         user:
 *           type: string
 *           description: El ID del cliente
 *         firstName:
 *           type: string
 *           description: El nombre del cliente
 *         lastName:
 *           type: string
 *           description: El apellido del cliente
 *         phone:
 *           type: string
 *           description: El teléfono del cliente
 *         agent:
 *           type: string
 *           description: El ID del agente
 *         service:
 *           type: string
 *           description: El ID del servicio
 *       required:
 *         - subject
 *         - description
 *         - status
 *         - user
 *         - service
 *       example:
 *         id: 665dfaf446ec75f9c3587a12
 *         subject: Pantalla con manchas negras
 *         description: La pantalla tiene manchas en toda la pantalla.
 *         status: En cola
 *         user: 665cefc2d3baa44ede10a87f
 *         firstName: Luis
 *         lastName: Mora
 *         phone: 78006524
 *         agent: 665cf01bd3baa44ede10a88d
 *         service: 665cf103d3baa44ede10a890
 */

/**
 * @swagger
 * /api/tickets/{id}:
 *   get:
 *     summary: Obtener una lista de tickets por ID.
 *     description: Coloca solo un valor a la vez para probar el endpoint.
 *     tags: [Tickets]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: El ID del ticket.
 *         schema:
 *           type: string
 *         required: false
 *         example: 665cfdebb21b8fafa2382e2b
 *     responses:
 *       200:
 *         description: Lista de tickets.
 *       400:
 *         description: Error con el ID.
 *       500:
 *         description: Error interno del servidor.
 */

// consulta de datos de los tickets
ticketRouter.get("/:id", getTicket);

/**
 * @swagger
 * /api/tickets/:
 *   get:
 *     summary: Obtener una lista de tickets.
 *     description: Coloca solo un valor a la vez para probar el endpoint.
 *     tags: [Tickets]
 *     responses:
 *       200:
 *         description: Lista de tickets.
 *       400:
 *         description: Error con el ID.
 *       500:
 *         description: Error interno del servidor.
 */
ticketRouter.get("/", getAllTickets);

/**
 * @swagger
 * /api/tickets/agent/{id}:
 *   get:
 *     summary: Obtener una lista de tickets por usuario.
 *     description: Coloca solo un valor a la vez para probar el endpoint.
 *     tags: [Tickets]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: El ID del ticket.
 *         schema:
 *           type: string
 *         required: false
 *         example: 665cfdebb21b8fafa2382e2b
 *     responses:
 *       200:
 *         description: Lista de tickets.
 *       400:
 *         description: Error con el ID.
 *       500:
 *         description: Error interno del servidor.
 */

// consulta de datos de los tickets
ticketRouter.get("/agent/:id", getTicketByAgent);

/**
 * @swagger
 * /api/tickets/user/{id}:
 *   get:
 *     summary: Obtener una lista de tickets por usuario.
 *     description: Coloca solo un valor a la vez para probar el endpoint.
 *     tags: [Tickets]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: El ID del ticket.
 *         schema:
 *           type: string
 *         required: false
 *         example: 665cfdebb21b8fafa2382e2b
 *     responses:
 *       200:
 *         description: Lista de tickets.
 *       400:
 *         description: Error con el ID.
 *       500:
 *         description: Error interno del servidor.
 */

// consulta de datos de los tickets
ticketRouter.get("/user/:id", getTicketByUser);

/**
 * @swagger
 * /api/tickets/:
 *   post:
 *     summary: Crear un nuevo ticket
 *     description: Los datos de firstName, lastName y phone pueden estar en blanco.
 *     tags: [Tickets]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Tickets'
 *       required: true
 *     parameters:
 *       - in: body
 *         name: subject
 *         description: Descripción breve del problema.
 *         schema:
 *           type: string
 *         required: true
 *         example: Pantalla con manchas negras
 *       - in: body
 *         name: description
 *         schema:
 *           type: string
 *         required: true
 *         description: Descripción más extensa del problema.
 *         example: La pantalla tiene manchas en toda la pantalla.
 *       - in: body
 *         name: status
 *         schema:
 *           type: string
 *           enum:
 *             - En cola
 *             - En proceso
 *             - Finalizado
 *             - Cancelado
 *             - Retirado
 *         required: true
 *         description: Estado del ticket, iniciando en cola.
 *         example: En cola
 *       - in: body
 *         name: user
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del cliente que genera el ticket.
 *         example: 665cefc2d3baa44ede10a87f
 *       - in: body
 *         name: firstName
 *         schema:
 *           type: string
 *         description: Nombre del cliente.
 *         example: Jose
 *       - in: body
 *         name: lastName
 *         schema:
 *           type: string
 *         description: Apellido del cliente.
 *         example: Rodriguez
 *       - in: body
 *         name: phone
 *         schema:
 *           type: string
 *         description: Teléfono del cliente.
 *         example: 76352098
 *       - in: body
 *         name: agent
 *         schema:
 *           type: string
 *         required: true
 *         description: Agente asignado al ticket.
 *         example: 665cf01bd3baa44ede10a88d
 *       - in: body
 *         name: service
 *         schema:
 *           type: string
 *         required: true
 *         description: Servicio contratado con el ticket.
 *         example: 665cf103d3baa44ede10a890
 *     responses:
 *       200:
 *         description: Nuevo ticket creado
 *       400:
 *         description: Error al crear el ticket
 *       500:
 *         description: Error interno del servidor
 */

// creacion de tickets
ticketRouter.post("/", ticketValidation, validate, createTicket);

/**
 * @swagger
 * /api/tickets/:
 *   put:
 *     summary: Modificar un ticket existente
 *     description: Por medio del id del ticket y la informacion que se puede modificar el ticket deseado.
 *     tags: [Tickets]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Tickets'
 *     parameters:
 *       - in: body
 *         name: id
 *         description: id del ticket que se desea modificar.
 *         schema:
 *           type: string
 *         required: true
 *         example: 665dfaf446ec75f9c3587a12
 *       - in: body
 *         name: subject
 *         description: Descripción breve del problema.
 *         schema:
 *           type: string
 *         required: true
 *         example: Pantalla con manchas negras
 *       - in: body
 *         name: description
 *         schema:
 *           type: string
 *         required: true
 *         description: Descripción más extensa del problema.
 *         example: La pantalla tiene manchas en toda la pantalla.
 *       - in: body
 *         name: status
 *         schema:
 *           type: string
 *           enum:
 *             - En cola
 *             - En proceso
 *             - Finalizado
 *             - Cancelado
 *             - Retirado
 *         required: true
 *         description: Estado del ticket, iniciando en cola.
 *         example: En cola
 *       - in: body
 *         name: user
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del cliente que genera el ticket.
 *         example: 665cefc2d3baa44ede10a87f
 *       - in: body
 *         name: firstName
 *         schema:
 *           type: string
 *         description: Nombre del cliente.
 *         example: Jose
 *       - in: body
 *         name: lastName
 *         schema:
 *           type: string
 *         description: Apellido del cliente.
 *         example: Rodriguez
 *       - in: body
 *         name: phone
 *         schema:
 *           type: string
 *         description: Teléfono del cliente.
 *         example: 76352098
 *       - in: body
 *         name: agent
 *         schema:
 *           type: string
 *         required: true
 *         description: Agente asignado al ticket.
 *         example: 665cf01bd3baa44ede10a88d
 *       - in: body
 *         name: service
 *         schema:
 *           type: string
 *         required: true
 *         description: Servicio contratado con el ticket.
 *         example: 665cf103d3baa44ede10a890
 *     responses:
 *       200:
 *         description: Ticket modificado con exito
 *       400:
 *         description: El ticket no existe
 *       500:
 *         description: Error interno del servidor
 */

// actualizacion de tickets
ticketRouter.put("/", ticketValidation, validate, updateTicket);

/**
 * @swagger
 * /api/tickets/{id}:
 *   delete:
 *     summary: Eliminar un ticket
 *     description: Por medio del Id del ticket se realiza su eliminacion.
 *     tags: [Tickets]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: id del ticket que se desea eliminar.
 *         schema:
 *           type: string
 *         required: true
 *         example: 665dfaf446ec75f9c3587a12
 *     responses:
 *       200:
 *         description: Ticket eliminado con exito
 *       400:
 *         description: El ticket no existe
 *       500:
 *         description: Error interno del servidor
 */

// eliminacion de tickets
ticketRouter.delete("/:id", deleteTicket);

export default ticketRouter;
