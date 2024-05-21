import redis from "redis";
import { logger } from "./logger.js";

const client = redis.createClient();

client.on("error", (err) => {
  logger.error(err);
});

client.on("connect", () => {
  logger.info("Redis client connected");
});

export default client;
