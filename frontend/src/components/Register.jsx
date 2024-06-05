import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../utils/Api";

 
const RegisterPage = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [formState, setFormState] = useState({
    email: '',
    password: '',
    password2: '',
    errors: {}
  });

  const [apiError, setApiError] = useState({
    errorApi: '',
  })


  const onInputChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const validateForm = ()  => {

    const errors = {};

    if (!formState.email.includes('@') || formState.email === '') {
      errors.email = 'El email no es válido';
    }

    if (formState.password.length < 6 || formState.password === '') {
      errors.password = 'La contraseña debe tener al menos 6 caracteres, una letra minúscula y una mayúscula';
    }

  if (formState.password !== formState.password2) {
      errors.password = 'Las contraseñas no coinciden';
    }

    return errors;
  };

  const handleSubmit = async(event) => {
    event.preventDefault();

    const errors = validateForm();

    if (Object.keys(errors).length > 0) {
      setFormState({
        ...formState,
        errors
      });
    } else {
      try {

        const { email, password } = formState;
        console.log({email, password});
        const response = await api.post('/api/auth/register', formState);
        console.log(response)
        console.log('Formulario enviado', response.data);

        if (response.error) {
          console.log(response.error);
          setFormState({
            ...formState,
            errors: response.error
          })

        setFormState({
            ...formState,
            errors: { apiError: response.error }
          });
        }

        setFormState({
          ...formState,
          errors: undefined
        });
      } catch (error) {
        console.log(error);
        console.log(error.message);
      }
    }
  };

  useEffect(() => {    
    const isFormValid = formState.email !== '' && formState.password !== '' && formState.password2 !== '';
    setIsButtonDisabled(!isFormValid);
  }, [formState]);

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
            className="rounded-lg bg-[#FBFBFB] h-12 w-96 border border-text-dark text-text-dark px-2  focus:shadow-input-focus focus:outline-none focus:border-none"
            />
        </label>

       {
        //  formState.errors && formState.errors.email && <p className="error">{formState.errors.email}</p>
       }
       <label className="flex flex-col">Password
            <input
            type="password"
            required
            name="password"
            value={formState.password}
            onChange={onInputChange}
            placeholder="Ingrese su Contraseña"
            className="rounded-lg bg-[#FBFBFB] h-12 w-96 border border-text-dark text-text-dark px-2  focus:shadow-input-focus focus:outline-none focus:border-none"
            />
       </label>
        {
          // formState.errors.password && <p className="error">{formState.errors.password}</p>
        }

        <label className="flex flex-col">Password2
            <input
            type="password"
            required
            name="password2"
            value={formState.password2}
            onChange={onInputChange}
            placeholder="Confirme su Contraseña"
            className="rounded-lg bg-[#FBFBFB] h-12 w-96 border border-text-dark text-text-dark px-2  focus:shadow-input-focus focus:outline-none focus:border-none"
            />
        </label>

        {
          // formState.errors.password2 && <p className="error">{formState.errors.password2}</p>
        }

        <button 
        type="submit"
        className={`h-12 w-96 rounded-lg text-[#FFFFFF] text-xl tracking-wide 
          ${isButtonDisabled ? 'bg-default-btn cursor-not-allowed' : 'bg-blue-ppal shadow-xl'}`}
        disabled={isButtonDisabled}
        >Registrarse</button>
      </form>
      <Link to={'/login'} > <span className="text-xl underline tracking-wide">¿Ya tienes una cuenta?</span> </Link>
    </div>
  );
};

export default RegisterPage;

