import { check, validationResult } from "express-validator";
import { resFail } from "../utils/response.js";

export const ticketValidation = [
  check("subject").isString().isLength({ min: 10 }).withMessage("Subject es un campo obligatorio."),
  check("description").isString().isLength({ min: 10 }).withMessage("Descripcion debe contener mas informacion."),
  check("status").isString().isLength({ min: 7, max: 10 }).withMessage("El dato estado, no corresponde con lo establecido."),
  check("user").isString().isLength({ min: 2 }).withMessage("Usuario es un campo obligatorio"),
  check("firsName").isString().isLength({ min: 2 }).withMessage("Ls 8 caracteres"),
  check("lastName").isString().isLength({ min: 2 }).withMessage("Debe ser un correo válido"),
  check("phone").isInt().isLength({ min: 20 }).withMessage("Debe ser un telefono válido"),
  check("agent").isString().isLength({ min: 20 }).withMessage("Agente es un campo obligatorio"),
  check("service").isString().isLength({ min: 10 }).withMessage("El dato servicio, no corresponde con lo establecido."),
];

export const getTicketValidation = [
  check("id").isString().isLength({ min: 20 }).withMessage("Debe ser un id válido"),
];

export const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return resFail(res, 400, errors.array());
  }
  next();
};
