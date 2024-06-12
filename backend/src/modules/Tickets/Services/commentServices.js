import Comments from "../Schemas/commentSchema.js";

export const getCommentsTicketAll = async (id) => {
  const query = { ticket: id };
  const Comment = await Comments.find(query).populate("ticket", "user");

  if (!Comment) {
    throw new Error("Error al buscar el comentario.");
  }

  return Comment;
};

export const getCommentsAll = async () => {
  const Comment = await Comments.find().populate("ticket", "user");

  if (!Comment) {
    throw new Error("Error al buscar los comentarios.");
  }

  return Comment;
};

export const getCommentsTicketById = async (id) => {
  const Comment = await Comments.findById(id).populate("ticket", "user");

  if (!Comment) {
    throw new Error("Error al buscar el comentario.");
  }

  return Comment;
};

export const createCommentsTicket = async (data) => {
  const dataCommentTicket = data;
  if (!dataCommentTicket) {
    throw new Error("Falta informacion.");
  }

  const newData = new Comments({
    ticket: dataCommentTicket.ticket,
    text: dataCommentTicket.text,
    user: dataCommentTicket.user,
  });
  const newComment = await Comments.create(newData);

  if (!newComment) {
    throw new Error("Error al crear el comentario.");
  }

  return newComment;
};

export const updateCommentsTicket = async (data) => {
  const query = { _id: data.id };
  const update = {
    $set: {
      ticket: data.ticket,
      text: data.text,
      user: data.user,
    },
  };
  const Comment = await Comments.updateOne(query, update);
  if (!Comment) {
    throw new Error("Comments no actualizado.");
  }

  return Comment;
};

export const deleteCommentsTicket = async (id) => {
  const query = { _id: id };
  const deletedComments = await Comments.deleteOne(query);
  if (!deletedComments) {
    throw new Error("Comments no se pudo eliminar.");
  }
  return deletedComments;
};
