import express from "express";
import { createUser, updateUserById, deleteUser, uploadAvatar, getUserById, getAllUsers, getMyUser, updateMyUser, deleteMyUser } from "./controller.js";
import upload from "../../config/multer.js";
import { createUserValidation, validate } from "../../config/validations/userValidations.js";
import { authenticate } from "../../middlewares/auth.js";

const router = express.Router();

// Rutas usuario general
router.post("/me/upload-avatar", authenticate, upload.single("avatar"), uploadAvatar);
router.get("/me", authenticate, getMyUser);
router.put("/me/update", authenticate, updateMyUser);
router.delete("/me/delete", authenticate, deleteMyUser);

// Rutas usuario admin
router.post("/", createUserValidation, validate, createUser);
router.get("/:id", getUserById);
router.get("/", getAllUsers);
router.put("/:id", updateUserById);
router.delete("/:id", deleteUser);

export default router;
