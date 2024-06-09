import express from "express";
import upload from "../../config/multer.js";
import { createUserValidation, validate } from "../../config/validations/userValidations.js";
import { authenticate } from "../../middlewares/auth.js";
import {
  createUser,
  deleteMyUser,
  deleteUser,
  getAllUsers,
  getMyUser,
  getUserById,
  updateMyUser,
  updateUserById,
  uploadAvatar,
} from "./controller.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Users API
 */

/**
 * @swagger
 * /api/users/me/upload-avatar:
 *   post:
 *     tags: [Users]
 *     summary: Upload user avatar
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               avatar:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Avatar del usuario modificado con exito
 *       400:
 *         description: Error en la solicitud
 *     security:
 *       - bearerAuth: []
 */
router.post("/me/upload-avatar", authenticate, upload.single("avatar"), uploadAvatar);

/**
 * @swagger
 * /api/users/me:
 *   get:
 *     tags: [Users]
 *     summary: Get my user information
 *     responses:
 *       200:
 *         description: Usuario encontrado con exito
 *       400:
 *         description: Error en la solicitud
 *     security:
 *       - bearerAuth: []
 */
router.get("/me", authenticate, getMyUser);

/**
 * @swagger
 * /api/users/me/update:
 *   put:
 *     tags: [Users]
 *     summary: Update my user information
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Usuario modificado con exito
 *       400:
 *         description: Error en la solicitud
 *     security:
 *       - bearerAuth: []
 */
router.put("/me/update", authenticate, updateMyUser);

/**
 * @swagger
 * /api/users/me/delete:
 *   delete:
 *     tags: [Users]
 *     summary: Delete my user account
 *     responses:
 *       200:
 *         description: Usuario eliminado con exito
 *       400:
 *         description: Error en la solicitud
 *     security:
 *       - bearerAuth: []
 */
router.delete("/me/delete", authenticate, deleteMyUser);

/**
 * @swagger
 * /api/users/:
 *   post:
 *     tags: [Users]
 *     summary: Create a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: Usuario creado con exito
 *       400:
 *         description: Error en la solicitud
 */
router.post("/", createUserValidation, validate, createUser);

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     tags: [Users]
 *     summary: Get user by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Usuario encontrado con exito
 *       400:
 *         description: Error en la solicitud
 */
router.get("/:id", getUserById);

/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     tags: [Users]
 *     summary: Update user by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Usuario modificado con exito
 *       400:
 *         description: Error en la solicitud
 */
router.put("/:id", updateUserById);

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     tags: [Users]
 *     summary: Delete user by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Usuario eliminado con exito
 *       400:
 *         description: Error en la solicitud
 */
router.delete("/:id", deleteUser);

/**
 * @swagger
 * /api/users/:
 *   get:
 *     tags: [Users]
 *     summary: Get all users
 *     responses:
 *       200:
 *         description: Usuarios encontrados con exito
 *       400:
 *         description: Error en la solicitud
 */
router.get("/", getAllUsers);

export default router;
