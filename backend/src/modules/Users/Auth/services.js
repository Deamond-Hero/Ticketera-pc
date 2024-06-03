import { logger } from "../../../config/logger.js";
import User from "../schema.js";
import { UserDTO } from "../dto.js";
import { isValidPassword } from "../../../config/utils/hash.js";
import { generateToken, verifyToken } from "../../../middlewares/auth.js";
import client from "../../../config/redisClient.js";
import { configDotenv } from "dotenv";
import crypto from "crypto";
import { encode, decode } from "base64-url";
import { createHash } from "../../../config/utils/hash.js";

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

    if (!token) {
      throw new Error("Error al generar el token");
    }

    logger.info(`Token generado ${token}`);
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

const generateEmailToken = () => {
  return crypto.randomBytes(32).toString("hex");
};

export const passwordChangeRequestService = async ({ email,password}) => {
  //logger.info(`Buscando usuario asociado al correo: ${email}`);
  const user = await User.findOne({ email });

  if (!user) {
   // logger.error(`Usuario no encontrado`);
    throw new Error("Usuario no encontrado");
  }
  
  if (!isValidPassword(user, password)) {
    //logger.error(`Contraseña incorrecta`);
    throw new Error("Contraseña incorrecta");
  }

  //logger.info(`Usuario encontrado`);
  const token = generateEmailToken();
  
  //logger.info(`Token generado ${token}`);
  user.token =token;
  await user.save();

  //logger.info(`Token guardado`);

  const encodedEmail = encode(email);

  //logger.info(`Sifrado`);

  const magicLink = `https://tu-dominio.com/reset-password?token=${token}&email=${encodedEmail}`;
  return magicLink;
};

export const changePasswordService = async ({ token, newPassword, email }) => {

  let decodedEmail;
  try {
    decodedEmail = decode(email);
  } catch (error) {
    throw new Error("Error al decodificar el email", error);
  }

  const user = await User.findOne({ email: decodedEmail, token });

  if (!user) {
    throw new Error("Usuario no encontrado o token inválido");
  }

  user.password = createHash(newPassword);
  user.token = "";
  await user.save();
  logger.info(user);
  return;
};