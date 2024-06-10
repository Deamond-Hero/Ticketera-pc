import { configDotenv } from "dotenv";
import jwt from "jsonwebtoken";
import client from "../config/redisClient.js";
import { resFail } from "../config/utils/response.js";
import { getUserByIdService } from "../modules/Users/services.js";

configDotenv();

const SECRET_KEY = process.env.JWT_SECRET;

export const generateToken = (payload) => {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
};

export const isTokenBlacklisted = (token, callback) => {
  client.get(token, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result !== null);
    }
  });
};

export const verifyToken = (req, res, next) => {
  const token = req.get("Authorization").replace("Bearer ", "");

  isTokenBlacklisted(token, (err, blacklisted) => {
    if (err) {
      resFail(res, 500, "Error interno del servidor", err);
    }
    if (blacklisted) {
      resFail(res, 401, "Token invalido", blacklisted);
    }
    try {
      const decoded = jwt.verify(token, SECRET_KEY);
      req.user = decoded;
      next();
    } catch (error) {
      resFail(res, 401, "Token invalido", error);
    }
  });
};

export const authenticate = async (req, res, next) => {
  const authHeader = req.get("Authorization");
  if (!authHeader) {
    resFail(res, 401, "Autenticacion requerida");
  }

  if (!authHeader.startsWith("Bearer ")) {
    resFail(res, 401, "Token invalido");
  }

  const token = authHeader.replace("Bearer ", "");
  console.log("Token:", token); // Log the token

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    const user = await getUserByIdService(decoded.id);
    if (!user) {
      throw new Error("Usuario no encontrado");
    }
    req.user = user;
    next();
  } catch (error) {
    resFail(res, 401, "Autenticacion fallida", error);
  }
};
