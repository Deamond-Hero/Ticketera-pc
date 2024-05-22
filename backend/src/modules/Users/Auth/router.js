import express from "express";
import { register, login, logout } from "./controller.js";
import { registerValidation, loginValidation, validate } from "../../../config/validations/authValidations.js";

const router = express.Router();

router.post("/register", registerValidation, validate, register);
router.post("/login", loginValidation, validate, login);
router.post("/logout", logout);

export default router;
