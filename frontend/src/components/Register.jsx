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

  const { isFormValid, setApiErrors, errorsState  } = useFormValidations(formState);


  const onInputChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };


  const handleSubmit = async(event) => {
    event.preventDefault();

    if (isFormValid()) {
      try {
          // Aquí puedes hacer tu llamada a la API
          const response = await api.post('/api/auth/register', formState);

          if (!response.ok) {
              setApiErrors(data.errors || {});
          }
      } catch (error) {
          setApiErrors({ apiError: error.message });
      }
  }

  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>

        {
          errorsState.apiError.general && <p>{errorsState.apiError.general}</p>
        }

        <label>Email
            <input
            type="email"
            required
            name="email"
            value={formState.email}
            onChange={onInputChange}
            placeholder="Ingrese su Email"
            />
        </label>

       {
        errorsState.error.email && <p>{errorsState.error.email}</p>
       }

       <label>Password
            <input
            type="password"
            required
            name="password"
            value={formState.password}
            onChange={onInputChange}
            placeholder="Ingrese su Contraseña"
            />
       </label>

        {
          errorsState.error.password && <p>{errorsState.error.password}</p>
        }

        <label>Password2
            <input
            type="password"
            required
            name="password2"
            value={formState.password2}
            onChange={onInputChange}
            placeholder="Confirme su Contraseña"
            />
        </label>

        {
          errorsState.error.password && <p>{errorsState.error.password}</p>
        }

        <button type="submit">Registrarse</button>
      </form>
      <Link to={'/Login'} > <span >¿Ya tienes una cuenta?</span> </Link>
    </div>
  );
};

export default RegisterPage;

