import { createSlice } from "@reduxjs/toolkit";

export const ticketReducer = createSlice({
    name: 'ticket',
    initialState: {
        allTickets: [],
        userTickets: [],
        agentList: [],
        serviceList: "",
        ticketMessage: "",
        agentMessage: "",
        serviceMessage: ""

    },
    reducers: {
        setAllTickets: (state, action) => {
            state.allTickets = action.payload
        },
        setUserTickets: (state, action) => {
            state.userTickets = action.payload
        },
        setAgentList: (state, action) => {
            state.agentList = action.payload
        },
        setServiceList: (state, action) => {
            state.serviceList = action.payload
        },
        setTicketMessage: (state, action) => {
            state.ticketMessage = action.payload
        },
        setAgentMessage: (state, action) => {
            state.agentMessage = action.payload
        },
        setServiceMessage: (state, action) => {
            state.serviceMessage = action.payload
        }
    }
})

export const { setAllTickets, setUserTickets, setAgentList, setServiceList, setTicketMessage, setAgentMessage, setServiceMessage } = ticketReducer.actions;

export default ticketReducer.reducer