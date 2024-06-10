import api from "../../utils/Api";
import { setUserData, setUserMessage, setUserLoged } from "./authSlice"


export const LoginService = (form) => {
    return async (dispatch) => {
        try {
            const response = await api.post("/api/auth/login", form);
            console.log(response)
            console.log(response.data.message);
            const {createdAt, tickets, updatedAt, password, ...responseUser} = response.data.payload.user;

            if (response.data.message === "Inicio de sesión exitoso") {
                await dispatch(setUserData(response.data.payload));
                await dispatch(setUserLoged(true))
                // console.log(response.data.message);
                await window.localStorage.setItem("token", response.data.payload.token); 
                await window.localStorage.setItem("user", JSON.stringify(responseUser))
                // console.log(response.data.payload.token)

            } else {
                dispatch(setUserMessage(response.data.message));
                console.log(response.data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            dispatch(setUserMessage(error.message || 'Error desconocido'));
        }
    };
};


export const LogoutService = (session) => {
    return async (dispatch) => {
        try {
            if (session) {
                localStorage.removeItem("token")
                localStorage.removeItem("user")

                await dispatch(setUserLoged(false))
                await dispatch(setUserData())
                console.log("Sessión cerrada")
            }

        } catch (error) {
            console.error('Error:', error);
            dispatch(setUserMessage(error.message || 'Error desconocido'));
        }
    };
};