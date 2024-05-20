import { resSuccess, resFail } from "../../config/utils/response.js";
import { logger } from "../../config/logger.js";
import { createUserService } from "./services.js";

export const createUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const result = await createUserService({ email, password });
        return res.status(200).json(result);
    } catch (error) {
        return res.status(400).json({
            status: "Error",
            mensaje: error.message,
            error: error,
        });
    }
};

export const getUser = async (req, res) => {

};

export const updateUser = async (req, res) => {

};

export const deleteUser = async (req, res) => {

};