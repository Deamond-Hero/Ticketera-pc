// eslint-disable-next-line react/prop-types
export const UserProfile = ({closeModal}) => {  

    return (
        <div className="z-50 flex fixed top-0 left-0 w-full h-full items-center justify-center bg-gray-800 bg-opacity-50 ">
            <div className="flex-col bg-white rounded-3xl p-8 max-w-lg w-[70rem] h-[fit-content]">
                <h1 className="text-xl font-bold mb-4 text-center">Datos de Usuario</h1>
                <form className="flex flex-col mb-4 justify-center ml-[1rem] ">
                    <div className="flex flex-col mt-[1rem]">
                        <label>Nombre</label>
                        <input
                                className="appearance-none bg-white border border-gray-300 rounded mt-[.1rem] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 w-[90%]"
                                type="text"
                                name="firstName"
                                value=""                             
                                placeholder=""
                            />
                    </div>
                    <div className="flex flex-col mt-[1rem]">
                        <label>Apellido</label>
                        <input
                                className="appearance-none bg-white border border-gray-300 rounded mt-[.1rem] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 w-[90%]"
                                type="text"
                                name="lastName"
                                value=""                             
                                placeholder=""
                            />
                    </div>                    
                    <div className="flex flex-col mt-[1rem]">
                        <label>Teléfono</label>
                        <input
                            className="appearance-none bg-white border border-gray-300 rounded mt-[.1rem] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 w-[95%]"
                            type="tel"
                            name="phone"
                            value=""                             
                            placeholder=""
                        />
                    </div>                    
                    <div className="flex flex-col mt-[1rem]">
                        <label>Modificar imagen de perfil</label>  
                        <input
                            className="appearance-none bg-white mt-[.1rem] py-2 text-gray-700 leading-tight w-[95%]"
                            type='file'                            
                            accept=".jpg, .jpeg, .png, .webp"
                            name="image"                                                      
                            placeholder='Seleccionar Archivo'                            
                        />                      
                    </div>
                </form>
                <div className="flex justify-end mt-[3rem]">
                    <button className="h-10 w-96 rounded-lg text-[#FFFFFF] text-l tracking-wide bg-default-btn ml-[1rem] mr-[1rem]" onClick={closeModal}>Cancelar</button>
                    <button className="h-10 w-96 rounded-lg text-[#FFFFFF] text-l tracking-wide bg-blue-ppal ml-[1rem] mr-[1rem]" type="submit">Confirmar Cambios</button>
                </div>
            </div>
        </div>

    )
}

