import { configDotenv } from "dotenv";
import express from "express";
import { connectDb } from "./config/mongoConnect.js";
import { addLogger, logger } from "./config/logger.js";
import cors from "cors";
import { resFail } from "./config/utils/response.js";
import usersRouter from "./modules/Users/router.js";
import authRouter from "./modules/Users/Auth/router.js";
import ticketsRouter from "./modules/Tickets/Routes/ticketRouter.js";
import commentRouter from "./modules/Tickets/Routes/commentRouter.js";
import servicesRouter from "./modules/Services/router.js";
import bodyParser from "body-parser";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

configDotenv();

// Inicio de la aplicación
logger.info("Starting app");

// Configuración de MongoDB
logger.info("Connecting to MongoDB");
connectDb();

const PORT = process.env.PORT || 3000;
const app = express();

// Configuración de CORS
logger.info("Configuring CORS");
app.use(
  cors({
    origin: true,
    credentials: true, // Credentials are true to allow sending cookies with requests
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

app.set("trust proxy", 1);

// Configuracion de Middlewares
app.use(express.static("public"));
app.use(addLogger);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Middleware para manejar JSON inválido
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    logger.warn("Invalid JSON received");
    resFail(res, 400, "Invalid JSON received");
  } else {
    next(err);
  }
});

// Middleware para capturar todos los errores
app.use((err, req, res, next) => {
  logger.error(err.stack);
  resFail(res, 500, "Internal server error");
  next();
});

// Configuración de rutas
app.use("/api/users", usersRouter);
app.use("/api/auth", authRouter);
app.use("/api/tickets", ticketsRouter);
app.use("/api/comments", commentRouter);
app.use("/api/services", servicesRouter);

// Configuración de Swagger
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "s15-09-ft-node-react API",
      version: "1.0.0",
      description: "API del grupo s15-09-ft-node-react de No Country",
    },
  },
  apis: ["./src/modules/**/**/*.js"], 
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Configuración de servidor
logger.info("Starting server");

app.listen(PORT, () => {
  console.log("listening on port: " + PORT);
});
