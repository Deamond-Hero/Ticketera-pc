import { Link } from "react-router-dom";
import { useState } from "react";
import api from "../utils/Api";
import { useFormValidations } from "../hooks/useFormValidations";

const RegisterPage = () => {
    const [formState, setFormState] = useState({
        email: '',
        password: '',
        password2: '',
    });

    const { isFormValid, setApiErrors, clearErrors, errorsState } = useFormValidations(formState);

    const onInputChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (isFormValid()) {
            console.log(isFormValid())
            try {
                const response = await api.post('/api/auth/register', formState);

                if (response.status !== 200) {
                    setApiErrors(response.data.errors || { general: response.data.message || "Error en el registro" });
                }
            } catch (error) {
                if (error.response) {
                    console.log('Mensaje 1' + error.response)
                    // If the error has a response, handle it
                    setApiErrors({ general: error.response.data.message || "Error en el registro" });
                } else {
                    console.log('Mensaje 2' + error.response)
                    // Handle generic errors
                    setApiErrors({ general: "Error al conectarse con la API" });
                }
            }

              setTimeout(() => {
                clearErrors();
            }, 5000);
        }
    };

    return (
        <div className="bg-[#FFFFFF] text-text-dark w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-12">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <h2 className="font-semibold text-5xl tracking-wide mb-6">Register</h2>
                <label className="flex flex-col">Email
                    <input
                        type="email"
                        required
                        name="email"
                        value={formState.email}
                        onChange={onInputChange}
                        placeholder="Ingrese su Email"
                        className="rounded-lg bg-[#FBFBFB] h-12 w-96 border border-text-dark text-text-dark px-2 focus:shadow-input-focus focus:outline-none focus:border-none"
                    />
                </label>
                {errorsState.apiError.general && <p>{errorsState.apiError.general}</p>}
                {errorsState.error.email && <p>{errorsState.error.email}</p>}

                <label className="flex flex-col">Password
                    <input
                        type="password"
                        required
                        name="password"
                        value={formState.password}
                        onChange={onInputChange}
                        placeholder="Ingrese su Contraseña"
                        className="rounded-lg bg-[#FBFBFB] h-12 w-96 border border-text-dark text-text-dark px-2 focus:shadow-input-focus focus:outline-none focus:border-none"
                    />
                </label>
                {errorsState.error.password && <p>{errorsState.error.password}</p>}

                <label className="flex flex-col">Confirm Password
                    <input
                        type="password"
                        required
                        name="password2"
                        value={formState.password2}
                        onChange={onInputChange}
                        placeholder="Confirme su Contraseña"
                        className="rounded-lg bg-[#FBFBFB] h-12 w-96 border border-text-dark text-text-dark px-2 focus:shadow-input-focus focus:outline-none focus:border-none"
                    />
                </label>
                {errorsState.error.password && <p>{errorsState.error.password}</p>}

                <button type="submit" className="h-12 w-96 rounded-lg text-[#FFFFFF] text-xl tracking-wide bg-default-btn">Registrarse</button>
            </form>
            <Link to={'/login'}><span className="text-xl underline tracking-wide">¿Ya tienes una cuenta?</span></Link>
        </div>
    );
};

export default RegisterPage;
