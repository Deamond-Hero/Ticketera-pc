import { configDotenv } from "dotenv";
import { addColors, createLogger, format, transports } from "winston";

configDotenv();
const { combine, printf } = format;
export let logger;

const myCustomLevels = {
  levels: {
    debug: 5,
    http: 4,
    info: 3,
    warn: 2,
    error: 1,
    fatal: 0,
  },
  colors: {
    debug: "green",
    http: "bold blue",
    info: "gray",
    warn: "yellow",
    error: "red",
    fatal: "redBG grey",
  },
};

const myFormat = printf(({ level, message }) => {
  const now = new Date();
  const options = {
    weekday: "long",
    day: "numeric",
    month: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  const formattedDate = now.toLocaleString("en-GB", options);
  return `[${formattedDate}] [${level}]: ${message}`;
});

const myFormatFile = printf(({ level, message }) => {
  const now = new Date();
  const options = {
    weekday: "long",
    day: "numeric",
    month: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  const formattedDate = now.toLocaleString("en-GB", options);
  return `[${formattedDate}] [${level.toLocaleUpperCase()}]: ${message}`;
});

addColors(myCustomLevels.colors);

switch (process.env.ENVIRONMENT) {
  case "DEVELOPMENT":
    logger = createLogger({
      levels: myCustomLevels.levels,
      transports: [
        new transports.Console({
          level: "debug",
          format: combine(format.colorize({ all: true }), myFormat),
        }),
        new transports.File({
          filename: "./dev.errors.logs",
          level: "error",
          format: myFormatFile,
          maxsize: 5242880, // 5MB
          maxFiles: 5,
        }),
      ],
    });
    break;
  case "PRODUCTION":
    logger = createLogger({
      levels: myCustomLevels.levels,
      transports: [
        new transports.Console({
          level: "info",
          format: combine(format.colorize({ all: true }), myFormat),
        }),

        new transports.File({
          filename: "./errors.logs",
          level: "error",
          format: myFormatFile,
          maxsize: 5242880, // 5MB
          maxFiles: 5,
        }),
      ],
    });
    break;
  default:
    break;
}

export const addLogger = (req, res, next) => {
  req.logger = logger;
  const ipClient = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  const start = Date.now();

  res.on("finish", () => {
    const end = Date.now();
    const duration = end - start;
    req.logger.http(
      `${req.method} Method hit on ${req.originalUrl} from [${ipClient}] - ${duration}ms`
    );
  });

  next();
};
