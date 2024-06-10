import { decode, encode } from "base64-url";
import { logger } from "../../../config/logger.js";
import client from "../../../config/redisClient.js";
import {
  createHash,
  generateEmailToken,
  isValidPassword,
} from "../../../config/utils/hash.js";
import { generateToken, verifyToken } from "../../../config/utils/jwt.js";
import { UserDTO } from "../dto.js";
import User from "../schema.js";

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

export const passwordChangeRequestService = async ({ email, password }) => {
  logger.info(`Buscando usuario asociado al correo: ${email}`);
  const user = await User.findOne({ email });

  if (!user) {
    logger.error(`Usuario no encontrado`);
    return new Error("Usuario no encontrado");
  }

  if (!isValidPassword(user, password)) {
    logger.error(`Contraseña incorrecta`);
    return new Error("Contraseña incorrecta");
  }

  logger.info(`Usuario encontrado`);
  const emailToken = await generateEmailToken();

  logger.info(`Token generado ${emailToken}`);
  user.emailToken = emailToken;
  await user.save();

  logger.info(`Token guardado`);

  const encodedEmail = encode(email);

  logger.info(`Sifrado`);

  const magicLink = `https://tu-dominio.com/reset-password?emailToken=${emailToken}&encodedEmail=${encodedEmail}`;
  return magicLink;
};

export const changePasswordService = async ({ emailToken, newPassword, encodedEmail }) => {
  const email = decode(encodedEmail);
  logger.info(email);

  const user = await User.findOne({ email, emailToken });

  if (!user) {
    logger.error(`Usuario no encontrado o token inválido`);
    return new Error("Usuario no encontrado o token inválido");
  }

  user.password = createHash(newPassword);
  user.emailToken = "";
  await user.save();
  logger.info(user);
  return;
};
