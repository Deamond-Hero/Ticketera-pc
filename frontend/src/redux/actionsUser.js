import { setUserData, setUserMessage } from "./authSlice"
import axios from "axios"

const URL = import.meta.env.VITE_PUBLIC_BACKEND_URL;


export const LoginService = (form) => {
    return async dispatch => {
        try {
            const response = await axios.post(`${URL}/api/auth/login`, form)
            console.log(response.data.message)
            response.data.message === "Inicio de sesión exitoso"
                ? dispatch(setUserData(response.data.payload)) && console.log(response.data.message)
                : dispatch(setUserMessage(response.data.message)) && console.log(response.data.message)

        } catch (error) {
            console.error('error')
            dispatch(setUserMessage(error))
        }
    }
}