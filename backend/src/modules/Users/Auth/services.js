import { logger } from "../../../config/logger.js";
import User from "../schema.js";
import { UserDTO } from "../dto.js";
import { isValidPassword } from "../../../config/utils/hash.js";
import jwt from "jsonwebtoken";
import { configDotenv } from "dotenv";
import { redisClient } from "../../../config/redisClient.js";

configDotenv();

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

export const loginService = async ({ email, password }) => {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("Usuario no encontrado");
    }
    if (!isValidPassword(user, password)) {
      throw new Error("Contraseña incorrecta");
    }

    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role },
      process.env.JWT_SECRET
    );

    return { user, token };
  } catch (error) {
    logger.error("Error al iniciar sesión: " + error);
    throw error;
  }
};

export const logoutService = (token) => {
  const decoded = jwt.verify(token, secretKey);
  const expirationTime = decoded.exp - Math.floor(Date.now() / 1000);

  redisClient.setex(token, expirationTime, "blacklisted", (err) => {
    if (err) {
      throw new Error("Failed to blacklist token");
    }
  });
};
