import express from "express";
import { getService, getServiceById, createService, updateService, deleteService } from "./controller.js";
import { serviceValidation, validate } from "../../config/validations/servicesValidations.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Services
 *   description: Services API
 */

/**
 * @swagger
 * /api/services:
 *   post:
 *     summary: Create a new service
 *     tags: [Services]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the service
 *                 example: Repair
 *               description:
 *                 type: string
 *                 description: The description of the service
 *                 example: Fixing household items
 *               price:
 *                 type: number
 *                 description: The price of the service
 *                 example: 100
 *               agent:
 *                 type: string
 *                 description: The ID of the agent responsible for the service
 *                 example: 6657f8de8cb1fa4f813fa191
 *     responses:
 *       200:
 *         description: Service created succesfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Indicates if the operation was successful
 *                   example: true
 *                 message:
 *                   type: string
 *                   description: A message describing the result
 *                   example: El Servicio fue creado con éxito
 *                 payload:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         description: The service ID
 *                         example: 6659f8add7d1f2fdf4134936
 *                       name:
 *                         type: string
 *                         description: The name of the service
 *                         example: Prueba
 *                       description:
 *                         type: string
 *                         description: The description of the service
 *                         example: Descripcion Prueba
 *                       price:
 *                         type: number
 *                         description: The price of the service
 *                         example: 50
 *                       agent:
 *                         type: string
 *                         description: The ID of the agent responsible for the service
 *                         example: 6657f8de8cb1fa4f813fa191
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                         description: The creation date of the service
 *                         example: 2024-05-31T16:19:57.772Z
 *                       updatedAt:
 *                         type: string
 *                         format: date-time
 *                         description: The last update date of the service
 *                         example: 2024-05-31T16:19:57.772Z
 *                       __v:
 *                         type: number
 *                         description: The version key
 *                         example: 0
 *       404:
 *         description: Invalid input
 *       500:
 *         description: Internal server error
 */
router.post("/", serviceValidation, validate, createService);

/**
 * @swagger
 * /api/services:
 *   get:
 *     summary: Get all services
 *     tags: [Services]
 *     responses:
 *       200:
 *         description: A list of services
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Indicates if the operation was successful
 *                   example: true
 *                 message:
 *                   type: string
 *                   description: A message describing the result
 *                   example: GET de servicios exitoso
 *                 payload:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         description: The service ID
 *                         example: 6659f8add7d1f2fdf4134936
 *                       name:
 *                         type: string
 *                         description: The name of the service
 *                         example: Prueba
 *                       description:
 *                         type: string
 *                         description: The description of the service
 *                         example: Descripcion Prueba
 *                       price:
 *                         type: number
 *                         description: The price of the service
 *                         example: 50
 *                       agent:
 *                         type: string
 *                         description: The ID of the agent responsible for the service
 *                         example: 6657f8de8cb1fa4f813fa191
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                         description: The creation date of the service
 *                         example: 2024-05-31T16:19:57.772Z
 *                       updatedAt:
 *                         type: string
 *                         format: date-time
 *                         description: The last update date of the service
 *                         example: 2024-05-31T16:19:57.772Z
 *                       __v:
 *                         type: number
 *                         description: The version key
 *                         example: 0
 *       500:
 *         description: Internal server error
 */
router.get("/", getService);

/**
 * @swagger
 * /api/services/{id}:
 *   get:
 *     summary: Get a service by ID
 *     tags: [Services]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The service ID
 *     responses:
 *       200:
 *         description: The service data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: The service ID
 *                   example: 60c72b2f9b1d8b3b4c8a5e8e
 *                 name:
 *                   type: string
 *                   description: The name of the service
 *                   example: Repair
 *                 description:
 *                   type: string
 *                   description: The description of the service
 *                   example: Fixing household items
 *                 price:
 *                   type: number
 *                   description: The price of the service
 *                   example: 100
 *                 agent:
 *                   type: string
 *                   description: The ID of the agent responsible for the service
 *                   example: 60c72b2f9b1d8b3b4c8a5e8e
 *       404:
 *         description: Service not found
 *       500:
 *         description: Internal server error
 */
router.get("/:id", getServiceById);

/**
 * @swagger
 * /api/services/{id}:
 *   put:
 *     summary: Update a service by ID
 *     tags: [Services]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The service ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the service
 *                 example: Repair
 *               description:
 *                 type: string
 *                 description: The description of the service
 *                 example: Fixing household items
 *               price:
 *                 type: number
 *                 description: The price of the service
 *                 example: 100
 *               agent:
 *                 type: string
 *                 description: The ID of the agent responsible for the service
 *                 example: 6657f8de8cb1fa4f813fa191
 *     responses:
 *       200:
 *         description: Service updated succesfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Indicates if the operation was successful
 *                   example: true
 *                 message:
 *                   type: string
 *                   description: A message describing the result
 *                   example: Se editó el servicio correctamente
 *                 payload:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         description: The service ID
 *                         example: 6659f8add7d1f2fdf4134936
 *                       name:
 *                         type: string
 *                         description: The name of the service
 *                         example: Prueba
 *                       description:
 *                         type: string
 *                         description: The description of the service
 *                         example: Descripcion Prueba
 *                       price:
 *                         type: number
 *                         description: The price of the service
 *                         example: 50
 *                       agent:
 *                         type: string
 *                         description: The ID of the agent responsible for the service
 *                         example: 6657f8de8cb1fa4f813fa191
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                         description: The creation date of the service
 *                         example: 2024-05-31T16:19:57.772Z
 *                       updatedAt:
 *                         type: string
 *                         format: date-time
 *                         description: The last update date of the service
 *                         example: 2024-05-31T16:19:57.772Z
 *                       __v:
 *                         type: number
 *                         description: The version key
 *                         example: 0
 *       400:
 *         description: Service not found
 *       404:
 *         description: Invalid input
 *       500:
 *         description: Internal server error
 */
router.put("/:id", serviceValidation, validate, updateService);

/**
 * @swagger
 * /api/services/{id}:
 *   delete:
 *     summary: Delete a service by ID
 *     tags: [Services]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The service ID
 *     responses:
 *       200:
 *         description: Service deleted successfully
 *       404:
 *         description: Invalid input
 *       500:
 *         description: Internal server error
 */
router.delete("/:id", deleteService);

export default router;