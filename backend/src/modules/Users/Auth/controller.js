import { resSuccess, resFail } from "../../../config/utils/response.js";
import { createUserService } from "./services.js";
import { logger } from "../../../config/logger.js";
// Importar service

export const login = async (req, res) => {

};

export const register = async (req, res) => {
    try {
        const { email, password } = req.body;
        const result = await createUserService({ email, password });
        resSuccess(res, 200, "User created successfully", result);
    } catch (error) {
        logger.error(error);
        resFail(res, 400, error.message, error);
    }
};

export const logout = async (req, res) => {

};
