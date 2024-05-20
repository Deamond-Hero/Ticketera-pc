import { logger } from "../../../config/logger.js";
import User from "../schema.js";
import { UserDTO } from "../dto.js";

export const createUserService = async ({ email, password }) => {
    try {
        if (!email || !password) {
            throw new Error("Campos Faltantes.");
        }

        const existsUser = await User.findOne({ email });

        if (existsUser) {
            throw new Error("El correo electrónico ya está registrado");
        }

        const newUser = await User.create(new UserDTO({ email, password }));

        return { status: "Success", mensaje: "Usuario creado con éxito", newUser };
    } catch (error) {
        logger.error(`Error al crear el usuario: ${error.message}`);
        throw error;
    }
};