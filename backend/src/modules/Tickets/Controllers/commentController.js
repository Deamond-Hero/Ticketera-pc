import { resSuccess, resFail } from "../../../config/utils/response.js";
import {
  getCommentsTicketAll,
  getCommentsTicketById,
  createCommentsTicket,
  updateCommentsTicket,
  deleteCommentsTicket,
} from "../Services/commentServices.js";

export const getCommentTicket = async (req, res) => {
  try {
    let result;
    const { idComment, idTicket } = req.query;
    if (idComment) {
      result = await getCommentsTicketById(idComment); // id del comentario
      resSuccess(res, 200, `Comentario con id: ${idComment} :`, result);
    } else if (idTicket) {
      result = await getCommentsTicketAll(idTicket); // id del ticket
      resSuccess(res, 200, `Lista total de Comentarios del ticket: ${idTicket}`, result);
    } else {
      result = await getCommentsAll(); // id del ticket
      resSuccess(res, 200, "Lista total de Comentarios:", result);
    }
  } catch (error) {
    resFail(res, 400, "El comentario no existe. Verifique el id.", error);
  }
};

export const createCommentTicket = async (req, res) => {
  try {
    const newComment = req.body;
    const result = await createCommentsTicket(newComment);
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
    const { id } = req.body;
    const result = await deleteCommentsTicket(id);
    resSuccess(res, 200, `Comentario con id: ${id} fue eliminado exitosamente.`, result);
  } catch (error) {
    resFail(res, 400, error.message, error);
  }
};
