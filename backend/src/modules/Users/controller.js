import { logger } from "../../config/logger.js";
import { resFail, resSuccess } from "../../config/utils/response.js";
import {
  createUserService,
  deleteUserService,
  getUserByIdService,
  getUsersService,
  updateUserByIdService,
  uploadAvatarService,
} from "./services.js";

export const createUser = async (req, res) => {
  try {
    const result = await createUserService(req.body);
    resSuccess(res, 201, "Usuario creado con exito", result);
  } catch (error) {
    logger.error(error);
    resFail(res, 400, error.message, error);
  }
};

export const getMyUser = async (req, res) => {
  try {
    const { _id: id } = req.user;
    const result = await getUserByIdService(id);
    resSuccess(res, 200, "Usuario encontrado con exito", result);
  } catch (error) {
    logger.error(error);
    resFail(res, 400, error.message, error);
  }
};

export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await getUserByIdService(id);
    resSuccess(res, 200, "Usuario encontrado con exito", result);
  } catch (error) {
    logger.error(error);
    resFail(res, 400, error.message, error);
  }
};

export const updateUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await updateUserByIdService(id, req.body);
    resSuccess(res, 200, "Usuario modificado con exito", result);
  } catch (error) {
    logger.error(error);
    resFail(res, 400, error.message, error);
  }
};

export const updateMyUser = async (req, res) => {
  try {
    const { id } = req.user._id;
    const result = await updateUserByIdService(id, req.body);
    resSuccess(res, 200, "Usuario modificado con exito", result);
  } catch (error) {
    logger.error(error);
    resFail(res, 400, error.message, error);
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await deleteUserService(id);
    resSuccess(res, 200, "Usuario eliminado con exito", result);
  } catch (error) {
    logger.error(error);
    resFail(res, 400, error.message, error);
  }
};

export const deleteMyUser = async (req, res) => {
  try {
    const { id } = req.user._id;
    const result = await deleteUserService(id);
    resSuccess(res, 200, "Usuario eliminado con exito", result);
  } catch (error) {
    logger.error(error);
    resFail(res, 400, error.message, error);
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const result = await getUsersService();
    resSuccess(res, 200, "Usuarios encontrados con exito", result);
  } catch (error) {
    logger.error(error);
    resFail(res, 400, error.message, error);
  }
};

export const uploadAvatar = async (req, res) => {
  try {
    const { filename } = req.file;
    const { id } = req.user._id;
    const result = await uploadAvatarService(id, filename);
    resSuccess(res, 200, "Avatar del usuario modificado con exito", result);
  } catch (error) {
    logger.error(error);
    resFail(res, 400, error.message, error);
  }
};
