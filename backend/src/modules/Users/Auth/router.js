import express from "express";
import { register, login, logout } from "./controller.js";
const router = express.Router();

router.post("/", register);
router.get("/");
router.put("/");
router.delete("/");

export default router;