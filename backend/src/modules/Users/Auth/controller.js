import { resSuccess, resFail } from "../../../config/utils/response.js";
import { logger } from "../../config/logger.js";
import { loginService } from "./services.js";

export const login = async (req, res) => {
  try {
    const result = await loginService(req.body);
    resSuccess(res, 200, "Inicio de sesion exitoso", result);
  } catch (error) {
    logger.error(error);
    resFail(res, 400, "Inicio de sesion fallido", error);
  }
};

export const register = async (req, res) => {
  
};

export const logout = async (req, res) => {
  
};
