import express from "express";
import {
  createCommentTicket,
  deleteCommentTicket,
  getCommentTicket,
  updateCommentTicket,
} from "../Controllers/commentController.js";

const commentRouter = express.Router();

// Rutas de los endpoints para modelo Comments

/**
 * @swagger
 * tags:
 *   name: Comments
 *   description: Comments API.
 */

// Consultar comentarios

/**
 * @swagger
 * components:
 *   schemas:
 *     Comments:
 *       type: object
 *       properties:
 *         ticket:
 *           type: string
 *           description: El id del ticket
 *         tect:
 *           type: string
 *           description: El text del comentario
 *         user:
 *           type: string
 *           description: El ID del cliente o agente que realiza el comentario.
 *       required:
 *         - ticket
 *         - text
 *         - user
 *       example:
 *         ticket: 665dfaf446ec75f9c3587a12
 *         text: La pantalla comenzo a destellar cada 2s.
 *         user: 665cefc2d3baa44ede10a87f
 */

/**
 * @swagger
 * /api/comments/{id}:
 *   get:
 *     summary: Obtener una lista de comments, ya sea todos, por usuario o por agente.
 *     description: Se envia el id del comentario o sin params para la lista completa.
 *     tags: [Comments]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: El ID del ticket para ver todos sus comentarios.
 *         schema:
 *           type: string
 *         required: false
 *         example: 665cfdebb21b8fafa2382e2b
 *     responses:
 *       200:
 *         description: Lista de comentarios.
 *       400:
 *         description: Error con el ID.
 *       500:
 *         description: Error interno del servidor.
 */

commentRouter.get("/:id", getCommentTicket);

// Crear comentarios

/**
 * @swagger
 * /api/comments/:
 *   post:
 *     summary: Crear un nuevo comentario
 *     description: Todos los datos son obligatorios.
 *     tags: [Comments]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Comments'
 *       required: true
 *     parameters:
 *       - in: query
 *         name: idTicket
 *         description: El ID del ticket al que se le incluira el comentario.
 *         schema:
 *           type: string
 *         required: false
 *         example: 665cfdebb21b8fafa2382e2b
 *       - in: query
 *         name: text
 *         description: El texto del comentario.
 *         schema:
 *           type: string
 *         required: false
 *         example: La pantalla enciende y se apaga cada 2s.
 *       - in: query
 *         name: idUser
 *         schema:
 *           type: string
 *         description: El ID del usuario que ingresa el comentario.
 *         example: 665cefc2d3baa44ede10a87f
 *     responses:
 *       200:
 *         description: Nuevo comentario creado
 *       400:
 *         description: Error al crear el comentario
 *       500:
 *         description: Error interno del servidor
 */

commentRouter.post("/", createCommentTicket);

// Actualizar comentarios

/**
 * @swagger
 * /api/comments/:
 *   put:
 *     summary: Modificar un comentario existente
 *     description: Por medio del id del comentario y la informacion que se puede modificar el comentario deseado.
 *     tags: [Comments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Comments'
 *     parameters:
 *       - in: query
 *         name: idComment
 *         description: El ID del comentario que se quiere modificar.
 *         schema:
 *           type: string
 *         required: false
 *         example: 665cfdebb21b8fafa2382e2b
 *       - in: query
 *         name: idTicket
 *         description: El ID del ticket al que pertenece el comentario.
 *         schema:
 *           type: string
 *         required: false
 *         example: 665cfdebb21b8fafa2382e2b
 *       - in: query
 *         name: text
 *         description: El texto del comentario que se desea incluir o modificar.
 *         schema:
 *           type: string
 *         required: false
 *         example: La pantalla se calienta mucho en el centro.
 *       - in: query
 *         name: idUser
 *         schema:
 *           type: string
 *         description: El ID del usuario que ingresa el comentario.
 *         example: 665cefc2d3baa44ede10a87f
 *     responses:
 *       200:
 *         description: Comentario modificado con exito
 *       400:
 *         description: El comentario no existe
 *       500:
 *         description: Error interno del servidor
 */

commentRouter.put("/", updateCommentTicket);

// Eliminar Comentarios

/**
 * @swagger
 * /api/comments/{id}:
 *   delete:
 *     summary: Eliminar un comentario
 *     description: Por medio del Id del comentario se realiza su eliminacion.
 *     tags: [Comments]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: id del comentario que se desea eliminar.
 *         schema:
 *           type: string
 *         required: true
 *         example: 665dfaf446ec75f9c3587a12
 *     responses:
 *       200:
 *         description: Comentario eliminado con exito
 *       400:
 *         description: El comentario no existe
 *       500:
 *         description: Error interno del servidor
 */

commentRouter.delete("/:id", deleteCommentTicket);

export default commentRouter;
