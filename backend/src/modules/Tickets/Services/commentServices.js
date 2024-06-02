import Comments from "../Schemas/commentSchema.js";

export const getCommentsTicketAll = async (id) => {
    try {
      const query = {"ticket": id}
      const Comment = await Comments.findOne(query);
  
      if (!Comment) {
        throw new Error("Error al buscar el ticket.");
      }
  
      return Comment;
    } catch (error) {
      throw error;
    }
  };

export const getCommentsTicketById = async (id) => {
  try {
    const query = { _id: id };
    const Comment = await Comments.findById(query);

    if (!Comment) {
      throw new Error("Error al buscar el ticket.");
    }

    return Comment;
  } catch (error) {
    throw error;
  }
};

export const createCommentsTicket = async (data) => {
  try {
    const dataCommentTicket = data
    if (!dataCommentTicket) {
      throw new Error("Falta informacion.");
    }

    const newData = new Comments({
        ticket: dataCommentTicket.idticket,
        text: dataCommentTicket.text,
        user: dataCommentTicket.iduser
    });
    const newComment = await Comments.create(newData);

    if (!newComment) {
      throw new Error("Error al crear el comentario.");
    }

    return newComment;
  } catch (error) {
    throw error;
  }
};

export const updateCommentsTicket = async (dataTicket) => {
  try {
    const query = { _id: dataTicket.id };
    const update = {
      $set: {
        subject: dataTicket.subject,
        description: dataTicket.description,
        status: dataTicket.status,
        user: dataTicket.user,
        firsName: dataTicket.firsName,
        lastName: dataTicket.lastName,
        phone: dataTicket.phone,
        agent: dataTicket.agent,
        service: dataTicket.service,
      },
    };
    const ticket = await Ticket.updateOne(query, update);
    if (!ticket) {
      throw new Error("Ticket no actualizado.");
    }

    return ticket;
  } catch (error) {
    throw error;
  }
};

export const deleteCommentsTicket = async (id) => {
  try {
    const query = { _id: id };
    const deletedTicket = await Ticket.deleteOne(query);
    if (!deletedTicket) {
      throw new Error("Ticket no se pudo eliminar.");
    }
    return deletedTicket;
  } catch (error) {
    throw error;
  }
};
