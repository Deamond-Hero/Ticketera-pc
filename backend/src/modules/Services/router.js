import express from "express";
import { getService, getServiceById, createService, updateService, deleteService } from "./controller.js";

const router = express.Router();

router.post("/", createService);
router.get("/", getService);
router.get("/:id", getServiceById);
router.put("/:id", updateService);
router.delete("/:id", deleteService);

export default router;