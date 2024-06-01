// import { Link } from "react-router-dom";
// import { useState } from "react";
// import api from "../utils/Api";
// import { useFormValidations } from "../hooks/useFormValidations";

 
// const RegisterPage = () => {

//   const [formState, setFormState] = useState({
//     email: '',
//     password: '',
//     password2: '',
//   });

//   const { isFormValid, setApiErrors, errorsState  } = useFormValidations(formState);


//   const onInputChange = (event) => {
//     const { name, value } = event.target;

//     setFormState({
//       ...formState,
//       [name]: value,
//     });
//   };


//   const handleSubmit = async(event) => {
//     event.preventDefault();

//     if (isFormValid()) {
//       try {
//           // Aquí puedes hacer tu llamada a la API
//           const response = await api.post('/api/auth/register', formState);

//           if (!response.ok) {
//               setApiErrors(data.errors || {});
//           }
//       } catch (error) {
//           setApiErrors({ apiError: error.message });
//       }
//   }

//   };

//   return (

//     <div>
//       <form onSubmit={handleSubmit}>
//         <h2>Register</h2>

//         {
//           errorsState.apiError.general && <p>{errorsState.apiError.general}</p>
//         }

//         <label>Email

//     <div className="bg-[#FFFFFF] text-text-dark w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-12">
//       <form onSubmit={handleSubmit} className="flex flex-col gap-6">
//         <h2 className="font-semibold text-5xl tracking-wide mb-6">Register</h2>
//         <label className="flex flex-col">Email
//             <input
//             type="email"
//             required
//             name="email"
//             value={formState.email}
//             onChange={onInputChange}
//             placeholder="Ingrese su Email"
//             className="rounded-lg bg-[#FBFBFB] h-12 w-96 border border-text-dark text-text-dark px-2  focus:shadow-input-focus focus:outline-none focus:border-none"
//             />
//         </label>

//        {
//         errorsState.error.email && <p>{errorsState.error.email}</p>
//        }


//        <label>Password

//        <label className="flex flex-col">Password

//             <input
//             type="password"
//             required
//             name="password"
//             value={formState.password}
//             onChange={onInputChange}
//             placeholder="Ingrese su Contraseña"
//             className="rounded-lg bg-[#FBFBFB] h-12 w-96 border border-text-dark text-text-dark px-2  focus:shadow-input-focus focus:outline-none focus:border-none"
//             />
//        </label>

//         {
//           errorsState.error.password && <p>{errorsState.error.password}</p>
//         }

//         <label className="flex flex-col">Password2
//             <input
//             type="password"
//             required
//             name="password2"
//             value={formState.password2}
//             onChange={onInputChange}
//             placeholder="Confirme su Contraseña"
//             className="rounded-lg bg-[#FBFBFB] h-12 w-96 border border-text-dark text-text-dark px-2  focus:shadow-input-focus focus:outline-none focus:border-none"
//             />
//         </label>

//         {
//           errorsState.error.password && <p>{errorsState.error.password}</p>
//         }

//         <button type="submit" className="h-12 w-96 rounded-lg text-[#FFFFFF] text-xl tracking-wide bg-default-btn">Registrarse</button>
//       </form>
//       <Link to={'/login'} > <span className="text-xl underline tracking-wide">¿Ya tienes una cuenta?</span> </Link>
//     </div>
//   );
// };

// export default RegisterPage;

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

    const { isFormValid, setApiErrors, errorsState } = useFormValidations(formState);

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
            try {
                const response = await api.post('/api/auth/register', formState);
                const data = await response.json();

                if (!response.ok) {
                    setApiErrors(data.errors || {});
                }
            } catch (error) {
                setApiErrors({ general: "Error al conectarse con la API" });
            }
        }
    };

    return (
        <div className="bg-[#FFFFFF] text-text-dark w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-12">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <h2 className="font-semibold text-5xl tracking-wide mb-6">Register</h2>

                {errorsState.apiError.general && <p>{errorsState.apiError.general}</p>}

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
