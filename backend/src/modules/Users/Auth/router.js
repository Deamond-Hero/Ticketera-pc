import express from "express";
import {
  loginValidation,
  registerValidation,
  validate,
} from "../../../config/validations/authValidations.js";
import {
  changePassword,
  login,
  logout,
  passwordChangeRequest,
  register,
} from "./controller.js";

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
 *             $ref: '#/components/schemas/RegisterUser'
 *     responses:
 *       200:
 *         description: User created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserResponse'
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
 *             $ref: '#/components/schemas/LoginUser'
 *     responses:
 *       200:
 *         description: Successful login
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserResponseWithToken'
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

/**
 * @swagger
 * /api/auth/passwordChangeRequest:
 *   post:
 *     summary: Request password change
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PasswordChangeRequest'
 *     responses:
 *       200:
 *         description: Password change request successful
 *       400:
 *         description: Password change request failed
 *       500:
 *         description: Internal Server Error
 */
router.post("/passwordChangeRequest", passwordChangeRequest);

/**
 * @swagger
 * /api/auth/changePassword:
 *   post:
 *     summary: Change a user's password
 *     tags: [Auth]
 *     parameters:
 *       - in: query
 *         name: emailToken
 *         schema:
 *           type: string
 *         required: true
 *         description: Password change token
 *       - in: query
 *         name: encodedEmail
 *         schema:
 *           type: string
 *         required: true
 *         description: User Email
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ChangePassword'
 *     responses:
 *       200:
 *         description: Password change successful
 *       400:
 *         description: Password change error
 *       500:
 *         description: Internal Server Error
 */
router.post("/changePassword", changePassword);

export default router;
