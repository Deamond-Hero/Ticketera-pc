import { logger } from "../../config/logger.js";
import User from "../schema.js";
import { isValidPassword } from "../../../config/utils/hash.js";

export const loginService = async (email, password) => {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("Usuario no encontrado");
    }
    if (!isValidPassword(user, password)) {
      throw new Error("Contraseña incorrecta");
    }
    return user;
  } catch (error) {
    logger.error("Error al iniciar sesión: " + error);
    throw error;
  }
};
