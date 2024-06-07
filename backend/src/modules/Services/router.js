import express from "express";
import { serviceValidation, validate } from "../../config/validations/servicesValidations.js";
import {
  createService,
  deleteService,
  getService,
  getServiceById,
  updateService,
} from "./controller.js";

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
 *             $ref: '#/components/schemas/Service'
 *     responses:
 *       200:
 *         description: Service created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ServiceResponse'
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
 *               $ref: '#/components/schemas/ServiceListResponse'
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
 *               $ref: '#/components/schemas/ServiceResponse'
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
 *             $ref: '#/components/schemas/Service'
 *     responses:
 *       200:
 *         description: Service updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ServiceResponse'
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
