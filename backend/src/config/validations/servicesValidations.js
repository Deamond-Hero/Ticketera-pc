import { check, validationResult } from "express-validator";
import { resFail } from "../utils/response.js";

export const serviceValidation = [
  check("name")
    .isString()
    .withMessage("El nombre debe ser un string")
    .isLength({ min: 5 })
    .withMessage("El nombre debe tener al menos 5 caracteres")
    .notEmpty(),
  check("description")
    .isString()
    .withMessage("La descripción debe ser un string")
    .isLength({ min: 10 })
    .withMessage("La descripción debe tener al menos 10 caracteres")
    .notEmpty(),
  check("price").isInt().withMessage("El precio debe ser un numero").notEmpty(),
  // check("agent").isUUID().withMessage("El técnico debe ser un UUID").notEmpty(),
];

export const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return resFail(res, 400, errors.array());
  }
  next();
};
