import mongoose from "mongoose";
import { logger } from "../../config/logger.js";
import User from "../Users/schema.js";
import Service from "./schema.js";

export const getAllServices = async () => {
  try {
    const services = await Service.find().populate("agent");

    logger.info(`Se han encontrado ${services.length} servicios`);
    return services;
  } catch (error) {
    logger.error(`Error al encontrar los Servicios: ${error.message}`);
    throw error;
  }
};

export const getIdService = async (id) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      logger.info(`ID inválido: ${id}`);
      return null;
    }
    const service = await Service.findById(id).populate("agent");
    if (!service) {
      logger.info(`No se ha encontrado el servicio con el ID: ${id}`);
      return null;
    }
    logger.info(`Se ha encontrado el servicio con el ID: ${id}`);
    return service;
  } catch (error) {
    logger.error(`Error al buscar un servicio por ID: ${error.message}`);
    throw error;
  }
};

export const addNewService = async ({ name, description, price, agent }) => {
  try {
    if (!name || !description || !price || !agent) {
      logger.info("Campos faltantes parar crear un Servicio");
      return null;
    }

    if (!mongoose.Types.ObjectId.isValid(agent)) {
      logger.info(`Técnico inválido: ${agent}`);
      return null;
    }

    const agentExists = await User.findById(agent);
    if (!agentExists) {
      logger.info(`El agente con ID: ${agent} no existe`);
      return null;
    }

    const user = await User.findById(agent);
    const newService = await Service.create({ name, description, price, agent });

    user.services.push(newService._id);
    await user.save();

    logger.info("Servicio creado con éxito");
    return newService;
  } catch (error) {
    logger.error(`Error al crear un nuevo servicio: ${error.message}`);
    throw error;
  }
};

export const editService = async (id, service) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      logger.info(`ID inválido: ${id}`);
      return null;
    }

    const serviceExits = await Service.findById(id);
    if (!serviceExits) {
      logger.info(`El servicio con ID: ${id} no existe`);
      return null;
    }

    if (!id || !service.name || !service.description || !service.price || !service.agent) {
      logger.info("Campos faltantes para editar un Servicio");
      return null;
    }

    const agentExists = await User.findById(service.agent);
    if (!agentExists) {
      logger.info(`El agente con ID: ${service.agent} no existe`);
      return null;
    }

    const serviceUpdate = await Service.findByIdAndUpdate(
      id,
      { $set: service },
      { new: true }
    );

    logger.info("Servicio editado con éxito");
    return serviceUpdate;
  } catch (error) {
    logger.error(`Error al editar un servicio: ${error.message}`);
    throw error;
  }
};

export const deleteServices = async (id) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      logger.info(`ID inválido: ${id}`);
      return null;
    }

    const serviceExits = await Service.findById(id);
    if (!serviceExits) {
      logger.info(`El servicio con ID: ${id} no existe`);
      return null;
    }

    const service = await Service.findByIdAndDelete(id);

    logger.info(`Se ha eliminado el servicio con el ID: ${id}`);
    return service;
  } catch (error) {
    logger.error(`Error al eliminar un servicio por ID: ${error.message}`);
    throw error;
  }
};
