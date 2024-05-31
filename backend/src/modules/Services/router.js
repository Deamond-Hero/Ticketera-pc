import express from "express";
import { getService, getServiceById, createService, updateService, deleteService } from "./controller.js";
import { serviceValidation, validate } from "../../config/validations/servicesValidations.js";

const router = express.Router();

router.post("/", serviceValidation, validate, createService);
router.get("/", getService);
router.get("/:id", getServiceById);
router.put("/:id", serviceValidation, validate, updateService);
router.delete("/:id", deleteService);

export default router;