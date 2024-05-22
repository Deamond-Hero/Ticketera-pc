import express from "express";
import { register, login, logout } from "./controller.js";
import {
  registerValidation,
  loginValidation,
  validate,
} from "../../../config/validations/authValidations.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Authentication API
 */

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: The user's email
 *                 example: johndoe@example.com
 *               password:
 *                 type: string
 *                 description: The user's password
 *                 example: secret
 *     responses:
 *       200:
 *         description: User created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: The user's ID
 *                   example: 60c72b2f9b1d8b3b4c8a5e8e
 *                 email:
 *                   type: string
 *                   description: The user's email
 *                   example: johndoe@example.com
 *                 password:
 *                   type: string
 *                   description: The user's hashed password
 *                   example: $2b$10$...
 *                 role:
 *                   type: string
 *                   description: The user's role
 *                   example: Cliente
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Internal server error
 */
router.post("/register", registerValidation, validate, register);

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login a user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: The user's email
 *                 example: johndoe@example.com
 *               password:
 *                 type: string
 *                 description: The user's password
 *                 example: secret
 *     responses:
 *       200:
 *         description: Successful login
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: The user's ID
 *                   example: 60c72b2f9b1d8b3b4c8a5e8e
 *                 email:
 *                   type: string
 *                   description: The user's email
 *                   example: johndoe@example.com
 *                 password:
 *                   type: string
 *                   description: The user's hashed password
 *                   example: $2b$10$...
 *                 role:
 *                   type: string
 *                   description: The user's role
 *                   example: Cliente
 *                 token:
 *                   type: string
 *                   description: JWT token
 *                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
 *       400:
 *         description: Invalid credentials
 *       500:
 *         description: Internal server error
 */
router.post("/login", loginValidation, validate, login);

/**
 * @swagger
 * /api/auth/logout:
 *   post:
 *     summary: Logout a user
 *     tags: [Auth]
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         schema:
 *           type: string
 *         required: true
 *         description: Bearer token
 *     responses:
 *       200:
 *         description: Successful logout
 *       400:
 *         description: Logout failed
 *       500:
 *         description: Internal server error
 */
router.post("/logout", logout);

export default router;
