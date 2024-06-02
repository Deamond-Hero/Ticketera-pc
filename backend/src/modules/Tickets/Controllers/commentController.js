import { resSuccess, resFail } from "../../../config/utils/response.js";
import { getCommentTicketAll, getCommentTicketById, createCommentTicket, updateCommentTicket, deleteCommentTicket  } from "../Services/commentServices.js";

export const getCommentTicket = async (req, res) => {
    try {
        let result;
        const { idComment, idTicket } = req.query;
        if(idComment){        
            result = await getCommentTicketById(idComment); // id del comentario
            resSuccess(res, 200, `Comentario con id: ${id} :`, result);
        }else{
            result = await getCommentTicketAll(idTicket); // id del ticket
            resSuccess(res, 200, `Lista total de Comentarios del ticket: ${idTicket}`, result);
        }    
                
        resFail(res, 400, "El comentario no existe. Verifique el id.", "Id incorrecto");
    } catch (error) {
        resFail(res, 400, "El comentario no existe. Verifique el id.", error);
    }
};

export const createCommentTicket = async (req, res) => {
    try {
        // const token = req.header("Authorization").replace("Bearer ", "");
        const newComment = req.body        
        const result = await createCommentTicket(newComment);
        resSuccess(res, 200, "Comentario creado con éxito", result);
    } catch (error) {
        resFail(res, 400, error.message, error);
    }
};

export const updateCommentTicket = async (req, res) => {    
    try {
        /* const token = req.header("Authorization").replace("Bearer ", "");
        if(!token){
            resFail(res, 400, "Logout fallido", error);
        }*/
        const updateComment = req.body
            const result = await updateCommentTicket(updateComment);
            resSuccess(res, 200, "Comentario actualizado con éxito", result);
    } catch (error) {
        resFail(res, 400, error.message, error);        
    }
};

export const deleteCommentTicket = async (req, res) => {    
    try {
        const { id } = req.query;    
        const result = await deleteCommentTicket(id);        
        resSuccess(res, 200, `Comentario con id: ${id} fue eliminado exitosamente.`, result);
    } catch (error) {
        resFail(res, 400, error.message, error);
    }
};
