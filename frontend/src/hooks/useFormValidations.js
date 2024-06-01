import { useState } from "react"

export const useFormValidations = (formState) => {

    const [errorsState, setErrorsState] = useState({
        error: {
            email,
            password
        },
        apiError: {}
    });

    const isFormValid = () => {
        if(!formState.email){
            setErrorsState({
                ...errorsState,
                error: {
                    ...errorsState.error,
                    email: "El email es obligatorio"
                }
            })
        } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
            setErrorsState({
                ...errorsState,
                error: {
                    ...errorsState.error,
                    email: "El email no es válido"
                }
            })
        }
    
        if(!formState.password){
            setErrorsState({
                ...errorsState,
                error: {
                    ...errorsState.error,
                    password: "La contraseña es obligatoria"
                }
            })
        } else if (formState.password.length < 6) {
            setErrorsState({
                ...errorsState,
                error: {
                    ...errorsState.error,
                    password: "La contraseña debe tener al menos 6 caracteres"
                }
            })
        } 
    
        if(formState.password !== formState.password2){
            setErrorsState({
                ...errorsState,
                error: {
                    ...errorsState.error,
                    password: "Las contraseñas no coinciden"
                }
            })
        }
    }

    const setApiErrors = (apiErrors) => {
        setErrorsState({
            ...errorsState,
            apiError: apiErrors
        });
    };
   
    return {
        isFormValid,
        setApiErrors,
        errorsState
    }

}