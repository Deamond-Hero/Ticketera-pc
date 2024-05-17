import express from "express";
import { connectDb } from "./config/mongoConnect.js";
import { addLogger, logger } from "./Config/logger.js";

connectDb();
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(addLogger);

app.use(
    cors({
        origin: true,
        credentials: true, // Credentials are true to allow sending cookies with requests
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
    }),
);

// Middleware para manejar JSON inválido
app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
      logger.warn('Invalid JSON received');
      res.status(400).json({ error: 'Invalid JSON' });
    } else {
      next(err);
    }
 });
  
 // Middleware para capturar todos los errores
 app.use((err, req, res, next) => {
    logger.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(PORT, () => {
    console.log("listening on port: " + PORT);
  });