import axios from "axios";
import api from "/home/nicolas/Documentos/Proyectos/s15-09-ft-node-react/frontend/src/utils/Api.js";
import {
  setAgentMessage,
  setServiceList,
  setServiceMessage,
  setTicketMessage,
  setUserTickets,
  setAgentList,
} from "./ticketSlice";

export const getAllServices = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/api/services`);
      const data = response.data;
      console.log(data);
      await dispatch(setServiceMessage(data.message));
      if (data?.payload?.length > 0) {
        await dispatch(setServiceList(data.payload));
      }
    } catch (error) {
      console.error(error);
      dispatch(setServiceMessage(error.message));
    }
  };
};

export const getAllAgents = () => {
  return async (dispatch) => {
    try {
      const response = await api.get(`/api/users`);
      const data = response.data;
      console.log(data);
      await dispatch(setAgentMessage(data.message));
      if (Array.isArray(data.payload) && data?.payload?.length > 0) {
        const agents = data.payload.filter((agent) => agent.role === "Tecnico");
        console.log(agents);
        if (agents.length > 0) {
          await dispatch(setAgentList(agents));
        } else {
          await dispatch(setAgentList([]));
          console.log("No se han encontrado técnicos");
        }
      }
    } catch (error) {
      console.error(error.message);
      await dispatch(setServiceMessage(error.message));
    }
  };
};

export const getAllTickets = () => {
  return async (dispatch) => {
    try {
      const response = await api.get(`/api/tickets`);
      const data = response.data;
      await dispatch(setTicketMessage(data.message));
      if (Array.isArray(data.payload) && data?.payload?.length > 0) {
        await dispatch(setUserTickets(data.payload));
      } else {
        await dispatch(setUserTickets([]));
        console.log("No se han encontrado tickets");
      }
    } catch (error) {
      console.error(error.message);
      await dispatch(setTicketMessage(error.message));
    }
  };
};

export const createTicket = (ticket) => {
  return async (dispatch) => {
    try {
      const url = `/api/tickets/`;
      console.log(url);
      const response = await axios.post(url, ticket);
      const data = response.data;
      console.log(data);
      await dispatch(setTicketMessage(data.message));
      if (data) {
        // Reemplaza esto por un componente de notificación (toast) apropiado
        alert(data.message);
      }
    } catch (error) {
      console.error(error.message);
      // Reemplaza esto por un componente de notificación (toast) apropiado
      alert(error.message);
      await dispatch(setTicketMessage(error.message));
    }
  };
};

