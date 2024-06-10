import { logger } from "../../config/logger.js";
import { createHash } from "../../config/utils/hash.js";
import User from "./schema.js";

export const getUsersService = async () => {
  logger.info("Buscando usuarios");
  const users = await User.find().populate("services", "tickets");
  if (!users) throw new Error("Usuarios no encontrados");
  return users;
};

export const getUserByIdService = async (id) => {
  logger.info("Buscando usuario por id");
  const user = await User.findById(id).populate("services", "tickets");
  if (!user) throw new Error("Usuario no encontrado");
  return user;
};

export const createUserService = async (user) => {
  if (!user) throw new Error("No se pudo crear el usuario");
  logger.info("Validando usuario");
  const existsUser = await User.findOne({ email: user.email });
  if (existsUser) throw new Error("El correo ya existe");
  logger.info("Creando usuario");
  user.password = createHash(user.password);
  const newUser = new User(user);
  if (!newUser) throw new Error("No se pudo crear el usuario");
  const savedUser = await newUser.save();
  if (!savedUser) throw new Error("No se pudo guardar el usuario");
  return savedUser;
};

export const updateUserByIdService = async (id, user) => {
  logger.info("Actualizando usuario");
  if (!user) throw new Error("No se pudo actualizar el usuario");
  if (user.password) user.password = createHash(user.password);
  if (user.token) delete user.token;
  const updatedUser = await User.findByIdAndUpdate(id, user, { new: true });
  if (!updatedUser) throw new Error("No se pudo actualizar el usuario");
  return updatedUser;
};

export const deleteUserService = async (id) => {
  logger.info("Eliminando usuario");
  const deletedUser = await User.findByIdAndDelete(id);
  if (!deletedUser) throw new Error("No se pudo eliminar el usuario");
  return deletedUser;
};

export const uploadAvatarService = async (id, filename) => {
  logger.info("Subiendo avatar");
  const updatedUser = await User.findByIdAndUpdate(id, { avatar: filename });
  if (!updatedUser) throw new Error("No se pudo subir el avatar");
  logger.info("Avatar subido con exito");
  return updatedUser;
};
