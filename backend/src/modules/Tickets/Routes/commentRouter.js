import express from "express";
import {
  createCommentTicket,
  deleteCommentTicket,
  getCommentTicket,
  updateCommentTicket,
} from "../Controllers/commentController.js";

const commentRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: Comments
 *   description: Comments API
 */

/**
 * @swagger
 * /api/comments:
 *   get:
 *     summary: Get comments
 *     tags: [Comments]
 *     parameters:
 *       - in: query
 *         name: idComment
 *         schema:
 *           type: string
 *         description: The comment ID
 *       - in: query
 *         name: idTicket
 *         schema:
 *           type: string
 *         description: The ticket ID
 *     responses:
 *       200:
 *         description: A list of comments
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CommentListResponse'
 *       400:
 *         description: Error in the request
 */
commentRouter.get("/", getCommentTicket);

/**
 * @swagger
 * /api/comments:
 *   post:
 *     summary: Create a new comment
 *     tags: [Comments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Comment'
 *     responses:
 *       200:
 *         description: Comment created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CommentResponse'
 *       400:
 *         description: Error in the request
 */
commentRouter.post("/", createCommentTicket);

/**
 * @swagger
 * /api/comments:
 *   put:
 *     summary: Update a comment
 *     tags: [Comments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Comment'
 *     responses:
 *       200:
 *         description: Comment updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CommentResponse'
 *       400:
 *         description: Error in the request
 */
commentRouter.put("/", updateCommentTicket);

/**
 * @swagger
 * /api/comments:
 *   delete:
 *     summary: Delete a comment
 *     tags: [Comments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *                 description: The comment ID
 *                 example: 60c72b2f9b1d8b3b4c8a5e8e
 *     responses:
 *       200:
 *         description: Comment deleted successfully
 *       400:
 *         description: Error in the request
 */
commentRouter.delete("/", deleteCommentTicket);

export default commentRouter;
