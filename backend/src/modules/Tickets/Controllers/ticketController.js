import { resSuccess, resFail } from "../../../config/utils/response.js";
import { getTicketById, getTicketAll, createTickets, updateTickets, deleteTickets  } from "../Services/ticketServices.js";

export const getTicket = async (req, res) => {
    try {
        const { id } = req.query;
        let result;
        if(id){        
            result = await getTicketById(id);        
            resSuccess(res, 200, `Ticket con id: ${id}`, result);
        }else{
            result = await getTicketAll(); 
            resSuccess(res, 200, `Lista total de tickets:`, result);
        }    
                
        resFail(res, 400, "El comentario no existe. Verifique el id.", "Id incorrecto");
    } catch (error) {
        resFail(res, 400, "El ticket no existe. Verifique el id.", error);
    }
};

export const createTicket = async (req, res) => {
    try {
        // const token = req.header("Authorization").replace("Bearer ", "");
        const newTicket = req.body        
        const result = await createTickets(newTicket);
        resSuccess(res, 200, "Ticket creado con éxito", result);
    } catch (error) {
        resFail(res, 400, error.message, error);
    }
};

export const updateTicket = async (req, res) => {    
    try {
        /* const token = req.header("Authorization").replace("Bearer ", "");
        if(!token){
            resFail(res, 400, "Logout fallido", error);
        }*/
        const updateTicket = req.body
            const result = await updateTickets(updateTicket);
            resSuccess(res, 200, "Ticket actualizado con éxito", result);
    } catch (error) {
        resFail(res, 400, error.message, error);        
    }
};

export const deleteTicket = async (req, res) => {    
    try {
        const { id } = req.query;    
        const result = await deleteTickets(id);        
        resSuccess(res, 200, `Ticket con id: ${id} fue eliminado exitosamente.`, result);
    } catch (error) {
        resFail(res, 400, error.message, error);
    }
};
