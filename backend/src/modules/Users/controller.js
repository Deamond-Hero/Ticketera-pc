import { resSuccess, resFail } from "../../config/utils/response.js";
import { logger } from "../../config/logger.js";
import { createUserService } from "./services.js";

export const createUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await createUserService({ email, password });
    resSuccess(res, 200, "User created successfully", result);
  } catch (error) {
    logger.error(error);
    resFail(res, 400, error.message, error);
  }
};

export const getUser = async (req, res) => {};

export const updateUser = async (req, res) => {};

export const deleteUser = async (req, res) => {};
