import { useState } from "react"

export const useFormValidations = (formState) => {

    const [errorsState, setErrorsState] = useState({
        error: {
            email: '',
            password: ''
        },
        apiError: {}
    });

    const isFormValid = () => {

        let isValid = true;
        let newErrors = {
            email: "",
            password: ""
        };


        if (!formState.email) {
            newErrors.email = "El email es obligatorio";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
            newErrors.email = "El email no es válido";
            isValid = false;
        }
    
        if (!formState.password) {
            newErrors.password = "La contraseña es obligatoria";
            isValid = false;
        } else if (formState.password.length < 6) {
            newErrors.password = "La contraseña debe tener al menos 6 caracteres";
            isValid = false;
        }
    
        if (formState.password !== formState.password2) {
            newErrors.password = "Las contraseñas no coinciden";
            isValid = false;
        }

        setErrorsState((prevErrors) => ({
            ...prevErrors,
            error: newErrors
        }));

        return isValid;
    }

    const setApiErrors = (apiErrors) => {
        setErrorsState({
            ...errorsState,
            apiError: apiErrors
        });
    };

    const clearErrors = () => {
        setErrorsState({
            error: {
                email: '',
                password: ''
            },
            apiError: {}
        });
    };
   
    return {
        isFormValid,
        setApiErrors,
        clearErrors,
        errorsState
    }

}