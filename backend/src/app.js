import bodyParser from "body-parser";
import cors from "cors";
import { configDotenv } from "dotenv";
import express from "express";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { addLogger, logger } from "./config/logger.js";
import { connectDb } from "./config/mongoConnect.js";
import { resFail } from "./config/utils/response.js";
import servicesRouter from "./modules/Services/router.js";
import commentRouter from "./modules/Tickets/Routes/commentRouter.js";
import ticketsRouter from "./modules/Tickets/Routes/ticketRouter.js";
import authRouter from "./modules/Users/Auth/router.js";
import usersRouter from "./modules/Users/router.js";

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
    origin: "*",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
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
    tags: [
      {
        name: "Auth",
        description: "Authentication API",
      },
      {
        name: "Users",
        description: "Users API",
      },
      {
        name: "Tickets",
        description: "Tickets API",
      },
      {
        name: "Comments",
        description: "Comments API",
      },
      {
        name: "Services",
        description: "Services API",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
      schemas: {
        User: {
          type: "object",
          properties: {
            avatar: {
              type: "string",
              description: "Avatar del usuario",
            },
            email: {
              type: "string",
              description: "Correo electrónico del usuario",
            },
            password: {
              type: "string",
              description: "Contraseña del usuario",
            },
            firstName: {
              type: "string",
              description: "Nombre del usuario",
            },
            lastName: {
              type: "string",
              description: "Apellido del usuario",
            },
            phone: {
              type: "string",
              description: "Teléfono del usuario",
            },
            role: {
              type: "string",
              description: "Rol del usuario",
              enum: ["Cliente", "Tecnico", "Administrador"],
            },
            services: {
              type: "array",
              items: {
                type: "string",
              },
              description: "Servicios del usuario",
            },
            tickets: {
              type: "array",
              items: {
                type: "string",
              },
              description: "Tickets del usuario",
            },
            emailToken: {
              type: "string",
              description: "Token de correo electrónico",
            },
          },
        },
        RegisterUser: {
          type: "object",
          required: ["email", "password"],
          properties: {
            email: {
              type: "string",
              description: "The user's email",
              example: "johndoe@example.com",
            },
            password: {
              type: "string",
              description: "The user's password",
              example: "secret",
            },
          },
        },
        LoginUser: {
          type: "object",
          required: ["email", "password"],
          properties: {
            email: {
              type: "string",
              description: "The user's email",
              example: "johndoe@example.com",
            },
            password: {
              type: "string",
              description: "The user's password",
              example: "secret",
            },
          },
        },
        PasswordChangeRequest: {
          type: "object",
          required: ["email"],
          properties: {
            email: {
              type: "string",
              description: "User Email",
              example: "johndoe@example.com",
            },
          },
        },
        ChangePassword: {
          type: "object",
          required: ["newPassword"],
          properties: {
            newPassword: {
              type: "string",
              description: "New user password",
              example: "newpassword123",
            },
          },
        },
        UserResponse: {
          type: "object",
          properties: {
            _id: {
              type: "string",
              description: "The user's ID",
              example: "60c72b2f9b1d8b3b4c8a5e8e",
            },
            email: {
              type: "string",
              description: "The user's email",
              example: "johndoe@example.com",
            },
            password: {
              type: "string",
              description: "The user's hashed password",
              example: "$2b$10$...",
            },
            role: {
              type: "string",
              description: "The user's role",
              example: "Cliente",
            },
          },
        },
        UserResponseWithToken: {
          allOf: [
            { $ref: "#/components/schemas/UserResponse" },
            {
              type: "object",
              properties: {
                token: {
                  type: "string",
                  description: "JWT token",
                  example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
                },
              },
            },
          ],
        },
        Service: {
          type: "object",
          properties: {
            name: {
              type: "string",
              description: "The name of the service",
            },
            description: {
              type: "string",
              description: "The description of the service",
            },
            price: {
              type: "number",
              description: "The price of the service",
            },
            agent: {
              type: "array",
              items: {
                type: "string",
              },
              description: "The ID of the agent responsible for the service",
            },
          },
        },
        ServiceResponse: {
          type: "object",
          properties: {
            _id: {
              type: "string",
              description: "The service ID",
              example: "6659f8add7d1f2fdf4134936",
            },
            name: {
              type: "string",
              description: "The name of the service",
              example: "Repair",
            },
            description: {
              type: "string",
              description: "The description of the service",
              example: "Fixing household items",
            },
            price: {
              type: "number",
              description: "The price of the service",
              example: 100,
            },
            agent: {
              type: "array",
              items: {
                type: "string",
              },
              description: "The ID of the agent responsible for the service",
              example: "6657f8de8cb1fa4f813fa191",
            },
            createdAt: {
              type: "string",
              format: "date-time",
              description: "The creation date of the service",
              example: "2024-05-31T16:19:57.772Z",
            },
            updatedAt: {
              type: "string",
              format: "date-time",
              description: "The last update date of the service",
              example: "2024-05-31T16:19:57.772Z",
            },
            __v: {
              type: "number",
              description: "The version key",
              example: 0,
            },
          },
        },
        ServiceListResponse: {
          type: "object",
          properties: {
            success: {
              type: "boolean",
              description: "Indicates if the operation was successful",
              example: true,
            },
            message: {
              type: "string",
              description: "A message describing the result",
              example: "GET de servicios exitoso",
            },
            payload: {
              type: "array",
              items: {
                $ref: "#/components/schemas/ServiceResponse",
              },
            },
          },
        },
        Comment: {
          type: "object",
          properties: {
            ticket: {
              type: "array",
              items: {
                type: "string",
              },
              description: "The ticket ID",
            },
            text: {
              type: "string",
              description: "The comment text",
            },
            user: {
              type: "array",
              items: {
                type: "string",
              },
              description: "The user ID",
            },
          },
        },
        CommentResponse: {
          type: "object",
          properties: {
            _id: {
              type: "string",
              description: "The comment ID",
              example: "60c72b2f9b1d8b3b4c8a5e8e",
            },
            ticket: {
              type: "array",
              items: {
                type: "string",
              },
              description: "The ticket ID",
              example: "60c72b2f9b1d8b3b4c8a5e8e",
            },
            text: {
              type: "string",
              description: "The comment text",
              example: "This is a comment",
            },
            user: {
              type: "array",
              items: {
                type: "string",
              },
              description: "The user ID",
              example: "60c72b2f9b1d8b3b4c8a5e8e",
            },
            createdAt: {
              type: "string",
              format: "date-time",
              description: "The creation date of the comment",
              example: "2024-05-31T16:19:57.772Z",
            },
            updatedAt: {
              type: "string",
              format: "date-time",
              description: "The last update date of the comment",
              example: "2024-05-31T16:19:57.772Z",
            },
            __v: {
              type: "number",
              description: "The version key",
              example: 0,
            },
          },
        },
        CommentListResponse: {
          type: "object",
          properties: {
            success: {
              type: "boolean",
              description: "Indicates if the operation was successful",
              example: true,
            },
            message: {
              type: "string",
              description: "A message describing the result",
              example: "Lista total de Comentarios:",
            },
            payload: {
              type: "array",
              items: {
                $ref: "#/components/schemas/CommentResponse",
              },
            },
          },
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
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
