import { resSuccess, resFail } from "../../../config/utils/response.js";
import { createUserService, loginService, logoutService } from "./services.js";
import { logger } from "../../../config/logger.js";

export const login = async (req, res) => {
    const { email, password } = req.body;
    logger.info(`Datos recibidos: email=${email}, password=${password}`);
    try {
        const { user, token } = await loginService({ email, password });
        resSuccess(res, 200, "Inicio de sesion exitoso", { user, token });
    } catch (error) {
        logger.error(error);
        resFail(res, 400, "Inicio de sesion fallido", error);
    }
};

export const register = async (req, res) => {
    try {
        const { email, password } = req.body;
        const result = await createUserService({ email, password });
        resSuccess(res, 200, "Usuario creado con exito", result);
    } catch (error) {
        logger.error(error);
        resFail(res, 400, error.message, error);
    }
};

export const logout = async (req, res) => {
    const token = req.header("Authorization").replace("Bearer ", "");
    try {
        logoutService(token);
        resSuccess(res, 200, "Logout exitoso");
    } catch (error) {
        logger.error(error);
        resFail(res, 400, "Logout fallido" , error);
    }
};
