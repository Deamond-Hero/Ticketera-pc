import Comments from "../Schemas/commentSchema.js";

export const getCommentsTicketAll = async (id) => {
  try {
    const query = { ticket: id };
    const Comment = await Comments.find(query);

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
    // Eliminar console.log antes de entregar
    console.log(id);
    const Comment = await Comments.findById(id);

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
    const dataCommentTicket = data;
    if (!dataCommentTicket) {
      throw new Error("Falta informacion.");
    }
    // Revisar codigo, creo que la informacion asignada a newData es incorrecta, chequear con un console.log
    const newData = new Comments({
      ticket: dataCommentTicket.idticket,
      text: dataCommentTicket.text,
      user: dataCommentTicket.iduser,
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

export const updateCommentsTicket = async (data) => {
  try {
    // Eliminar console.log antes de entregar
    console.log(data);
    const query = { _id: data._id };
    const update = {
      $set: {
        ticket: data.ticket,
        text: data.text,
        user: data.user,
      },
    };
    const Comment = await Comments.updateOne(query, update);
    console.log(Comment);
    if (!Comment) {
      throw new Error("Comments no actualizado.");
    }

    return Comment;
  } catch (error) {
    throw error;
  }
};

export const deleteCommentsTicket = async (id) => {
  try {
    const query = { _id: id };
    const deletedComments = await Comments.deleteOne(query);
    if (!deletedComments) {
      throw new Error("Comments no se pudo eliminar.");
    }
    return deletedComments;
  } catch (error) {
    throw error;
  }
};
