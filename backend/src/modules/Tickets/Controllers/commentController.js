import { resFail, resSuccess } from "../../../config/utils/response.js";
import { commentsEmail } from "../../Mailer/controller.js";
import {
  createCommentsTicket,
  deleteCommentsTicket,
  getCommentsAll,
  getCommentsTicketById,
  updateCommentsTicket,
} from "../Services/commentServices.js";

export const getCommentTicket = async (req, res) => {
  try {
    let result;
    const { id } = req.params;
    if (id != "{id}") {
      result = await getCommentsTicketById(id); // id del comentario
      resSuccess(res, 200, `Comentario con id: ${id} :`, result);
    } else {
      result = await getCommentsAll(); // todos los comentarios existentes
      resSuccess(res, 200, "Lista total de Comentarios:", result);
    }
  } catch (error) {
    resFail(res, 400, "El comentario no existe. Verifique el id.", error);
  }
};

export const createCommentTicket = async (req, res) => {
  try {
    const { newComment, role } = req.body;
    const result = await createCommentsTicket(newComment);
    await commentsEmail(result.id, role);
    resSuccess(res, 200, "Comentario creado con éxito", result);
  } catch (error) {
    resFail(res, 400, error.message, error);
  }
};

export const updateCommentTicket = async (req, res) => {
  try {
    const updateComment = req.body;
    const result = await updateCommentsTicket(updateComment);
    resSuccess(res, 200, "Comentario actualizado con éxito", result);
  } catch (error) {
    resFail(res, 400, error.message, error);
  }
};

export const deleteCommentTicket = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await deleteCommentsTicket(id);
    resSuccess(res, 200, `Comentario con id: ${id} fue eliminado exitosamente.`, result);
  } catch (error) {
    resFail(res, 400, error.message, error);
  }
};
