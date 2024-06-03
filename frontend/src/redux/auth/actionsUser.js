import api from "../../utils/Api";
import { setUserData, setUserMessage, setUserLoged } from "./authSlice"




export const LoginService = (form) => {
    return async (dispatch) => {
        try {
            const response = await api.post("/api/auth/login", form);
            console.log(response)
            console.log(response.data.message);

            if (response.data.message === "Inicio de sesión exitoso") {
                dispatch(setUserData(response.data.payload));
                dispatch(setUserLoged(true))
                console.log(response.data.message);
                localStorage.setItem("token", response.data.payload.token);                console.log(response.data.payload.token)
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
            if(session){
               localStorage.removeItem("token")
               await dispatch(setUserLoged(false))
               await dispatch(setUserData({}))
               console.log("Sessión cerrada")
            }

        } catch (error) {
            console.error('Error:', error);
            dispatch(setUserMessage(error.message || 'Error desconocido'));
        }
    };
};