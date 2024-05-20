import express from "express";
import { createUser, getUser, updateUser, deleteUser } from "./controller.js";

const router = express.Router();

// Rutas para los diferentes endpoints
router.post("/", createUser);
router.get("/:id", getUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
