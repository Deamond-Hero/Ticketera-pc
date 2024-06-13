// eslint-disable-next-line react/prop-types
import axios from "axios"
import { useEffect, useState } from "react"
const baseURL = import.meta.env.VITE_PUBLIC_BACKEND_URL

export const UserProfile = ({ closeModal }) => {
  const [userData, setUserData] = useState({    
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    id: ''  
  })

  useEffect(() => {
    const fetchData = async () => {
      try {       
        const user = JSON.parse(localStorage.getItem('user'))
        const id = user._id        
        const userDataResponse = await axios.get(`${baseURL}/api/users/${id}`)
        const { email, firstName, lastName, phone, _id } = userDataResponse.data.payload
        setUserData({          
          email: email,
          firstName: firstName,
          lastName: lastName,
          phone: phone,          
          id: _id
        });
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  const changeValue = (e) => {
    const { name, value } = e.target
    setUserData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }  

  const userDataFormSubmit = async (e) => {
    e.preventDefault()
    try {        
      const userId = userData.id
      const formData = {
        firstName:userData.firstName,
        lastName:userData.lastName,
        phone:userData.phone
      }      
      const response = await axios.put(`${baseURL}/api/users/${userId}`, formData)
      console.log(response)
    } catch (error) {
      console.log("Error", error)
    }
  }

  return (
    <div className="z-50 flex fixed top-0 left-0 w-full h-full items-center justify-center bg-gray-800 bg-opacity-50" style={{ background: 'linear-gradient(to right, #004562, #42B4C2)', minHeight: '100vh' }}>
      <div className="flex-col bg-white rounded-3xl p-8 max-w-lg w-[70rem] h-[fit-content]">
        <h1 className="text-xl font-bold mb-4 text-center">Datos de Usuario</h1>
        <form className="flex flex-col mb-4 justify-center ml-[1rem]" onSubmit={userDataFormSubmit}>
          <div className="flex flex-col mt-[1rem]">
            <label>Nombre</label>
            <input
              className="appearance-none bg-white border border-gray-300 rounded mt-[.1rem] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 w-[95%]"
              type="text"
              name="firstName"
              value={userData.firstName}
              placeholder="Nombre"
              onChange={changeValue}              
            />
          </div>
          <div className="flex flex-col mt-[1rem]">
            <label>Apellido</label>
            <input
              className="appearance-none bg-white border border-gray-300 rounded mt-[.1rem] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 w-[95%]"
              type="text"
              name="lastName"
              value={userData.lastName}
              placeholder="Apellido"
              onChange={changeValue}
            />
          </div>
          <div className="flex flex-col mt-[1rem]">
            <label>Teléfono</label>
            <input
              className="appearance-none bg-white border border-gray-300 rounded mt-[.1rem] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 w-[95%]"
              type="tel"
              name="phone"
              value={userData.phone}
              placeholder="Teléfono"
              onChange={changeValue}
            />
          </div>
          <div className="flex flex-col mt-[1rem]">
            <label>Email</label>
            <input
              className="appearance-none bg-white border border-gray-300 rounded mt-[.1rem] py-2 px-4 text-gray-700 leading-tight w-[95%] "
              type="text"
              name="email"
              value={userData.email}
              placeholder="Email"
              disabled              
            />
          </div>          
          <div className="flex justify-end mt-[3rem]">
            <button className="h-10 w-96 rounded-lg text-[#FFFFFF] text-l tracking-wide bg-default-btn ml-[1rem] mr-[1rem]" onClick={closeModal}>Cancelar</button>
            <button className="h-10 w-96 rounded-lg text-[#FFFFFF] text-l tracking-wide bg-blue-ppal ml-[1rem] mr-[1rem]" type="submit">Confirmar Cambios</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UserProfile;

