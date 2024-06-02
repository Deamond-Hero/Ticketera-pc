import express from "express";
import { getCommentTicket, createCommentTicket, updateCommentTicket, deleteCommentTicket } from "../Controllers/commentController.js";

const commentRouter = express.Router();

// Rutas de los endpoints para modelo Tickets

commentRouter.get("/:id", getCommentTicket);
commentRouter.get("/comments/:id", getCommentTicket);
commentRouter.post("/", createCommentTicket);
commentRouter.put("/", updateCommentTicket);
commentRouter.delete("/", deleteCommentTicket);

export default commentRouter;
