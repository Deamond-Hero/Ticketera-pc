import { resSuccess, resFail } from "../../../config/utils/response.js";
import { createUserService, loginService, logoutService, passwordChangeRequestService,changePasswordService } from "./services.js";
import { logger } from "../../../config/logger.js";
import { sendMail } from "../../Mailer/services.js";

export const login = async (req, res) => {
    const { email, password } = req.body;
    logger.info(`Datos recibidos: email=${email}, password=${password}`);
    try {
        const { user, token } = await loginService({ email, password });
        resSuccess(res, 200, "Inicio de sesión exitoso", { user, token });
    } catch (error) {
        logger.error(error);
        resFail(res, 400, "Inicio de sesión fallido", error);
    }
};

export const register = async (req, res) => {
    try {
        const { email, password } = req.body;
        const result = await createUserService({ email, password });
        resSuccess(res, 200, "Usuario creado con éxito", result);
    } catch (error) {
        logger.error(error);
        resFail(res, 400, error.message, error);
    }
};

export const logout = async (req, res) => {
    const token = req.header("Authorization").replace("Bearer ", "");
    try {
        logoutService(token);
        resSuccess(res, 200, "Logout exitoso");
    } catch (error) {
        logger.error(error);
        resFail(res, 400, "Logout fallido", error);
    }
};

export const changePassword = async (req, res) => {
    try {
        const { token, email } = req.query;
        const { newPassword } = req.body;

        changePasswordService({token, newPassword, email});
        resSuccess(res, 200, "Cambio de contraseña exitoso");
    } catch (error) {
        logger.error(error);
        resFail(res, 400, "Cambio de contraseña fallido", error);
    }
};

export const passwordChangeRequest = async (req, res) => {
    try {
        const { email, password } = req.body;
        logger.info(email);
        logger.info(password);
        const magicLink = await passwordChangeRequestService({email, password});
        logger.info(magicLink);
        await sendMail(
            email,
            "Restablecimiento de Contraseña",
/*html*/    `<p>Hemos recibido una solicitud para restablecer la contraseña de tu cuenta en [Nombre del Sitio o Aplicación]. Si no realizaste esta solicitud, por favor ignora este correo electrónico. De lo contrario, puedes cambiar tu contraseña utilizando el siguiente enlace:</p>
            <p>Para verificar tu dirección de correo electrónico, por favor haz clic en el siguiente 
            <a href="${magicLink}">enlace</a>.</p>
            
            <p>Si tienes alguna pregunta o necesitas asistencia adicional, no dudes en contactarnos en [Correo de soporte] o visitar nuestro [Sitio web de soporte].</p>
            <p>Gracias por utilizar [Nombre del Sitio o Aplicación].</p>
            <p>Saludos cordiales,
            El equipo de [Nombre del Sitio o Aplicación]</p>`,
        );
        resSuccess(res, 200, "Solicitud de cambio de contraseña exitoso");
    } catch (error) {
        logger.error(error);
        resFail(res, 400, "Solicitud de cambio de contraseña fallido", error);
    }
};
