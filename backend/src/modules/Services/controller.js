import { logger } from "../../config/logger.js";
import { resFail, resSuccess } from "../../config/utils/response.js";
import {
  addNewService,
  deleteServices,
  editService,
  getAllServices,
  getIdService,
} from "./services.js";

export const createService = async (req, res) => {
  try {
    const { name, description, price, agent } = req.body;
    const service = await addNewService({ name, description, price, agent });

    if (service) {
      resSuccess(res, 200, "El Servicio fue creado con éxito", service);
    } else {
      resFail(res, 404, "Error");
    }
  } catch (error) {
    logger.error(error);
    resFail(res, 400, "Error al crear un servicio", error);
  }
};

export const getService = async (req, res) => {
  try {
    const services = await getAllServices();
    resSuccess(res, 200, "GET de servicios exitoso", services);
  } catch (error) {
    logger.error(error);
    resFail(res, 400, "GET de servicios fallido", error);
  }
};

export const getServiceById = async (req, res) => {
  try {
    const id = req.params.id;
    const service = await getIdService(id);
    if (service) {
      resSuccess(res, 200, "GET de servicios exitoso", service);
    } else {
      resFail(res, 404, "Servicio no encontrado");
    }
  } catch (error) {
    logger.error(error);
    resFail(res, 400, "GET ID del servicio fallido", error.message);
  }
};

export const updateService = async (req, res) => {
  try {
    const id = req.params.id;
    const serviceData = req.body;
    const serviceEdit = await editService(id, serviceData);
    if (serviceEdit) {
      resSuccess(res, 200, "Se editó el servicio correctamente", serviceEdit);
    } else {
      resFail(res, 404, "Servicio no encontrado");
    }
  } catch (error) {
    logger.error(error);
    resFail(res, 400, "Error al editar el servicio", error.message);
  }
};

export const deleteService = async (req, res) => {
  try {
    const id = req.params.id;
    const service = await deleteServices(id);
    if (service) {
      resSuccess(res, 200, "Servicio eliminado con éxito", service);
    } else {
      resFail(res, 404, "Servicio no encontrado");
    }
  } catch (error) {
    logger.error(error);
    resFail(res, 400, "Error al eliminar el servicio", error.message);
  }
};
