import client from "../config/redisClient.js";
import jwt from "jsonwebtoken";
import { resFail } from "../config/utils/response.js";
import { configDotenv } from "dotenv";

configDotenv();

const SECRET_KEY = process.env.JWT_SECRET;

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
  const token = req.header("Authorization").replace("Bearer ", "");

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
