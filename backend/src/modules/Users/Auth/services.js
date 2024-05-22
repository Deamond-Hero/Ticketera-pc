import { logger } from "../../../config/logger.js";
import User from "../schema.js";
import { UserDTO } from "../dto.js";
import { isValidPassword } from "../../../config/utils/hash.js";
import { generateToken, verifyToken } from "../../../config/utils/jwt.js";
import client from "../../../config/redisClient.js";

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

    if (!newUser) {
      throw new Error("Error al crear el usuario");
    }

    logger.info(`Usuario creado ${newUser.email}`);
    return newUser;
  } catch (error) {
    logger.error(`Error al crear el usuario: ${error.message}`);
    throw error;
  }
};

export const loginService = async ({ email, password }) => {
  try {
    logger.info(`Intentando iniciar sesión para el correo: ${email}`);
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("Usuario no encontrado");
    }
    if (!isValidPassword(user, password)) {
      throw new Error("Contraseña incorrecta");
    }

    const token = generateToken({ id: user._id, email: user.email, role: user.role });

    logger.info(`Inicio de sesión exitoso para el usuario: ${user.email}`);
    return { user, token };
  } catch (error) {
    logger.error(`Error al iniciar sesión: ${error.message}`);
    throw error;
  }
};

export const logoutService = (token) => {
  const decoded = verifyToken(token);
  const expirationTime = decoded.exp - Math.floor(Date.now() / 1000);

  client.setEx(token, expirationTime, "blacklisted", (err) => {
    if (err) {
      throw new Error("Failed to blacklist token");
    }
  });
};
