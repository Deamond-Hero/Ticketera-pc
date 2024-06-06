/* eslint-disable react/no-unescaped-entities */

const Instructions = () => {
    return (
        <div className="flex justify-center items-center bg-white w-full rounded-xl mt-8 mb-8 p-4">
            <div className="flex flex-row items-start space-x-8">
                <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center bg-principal rounded-full w-20 h-20 mb-4">
                        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="white">
                            <path d="M12 2C6.485 2 2 6.485 2 12s4.485 10 10 10 10-4.485 10-10S17.515 2 12 2zm0 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 14.93c-2.495 0-4.719-1.043-6.29-2.707.03-.864.862-1.484 1.747-1.484H16.54c.885 0 1.718.62 1.748 1.484C16.719 18.887 14.495 19.93 12 19.93z" />
                        </svg>
                    </div>
                    <div className="text-center">
                        <h2 className="font-semibold">Registrate</h2>
                        <p>Creá tu usuario y contraseña</p>
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center bg-principal rounded-full w-20 h-20 mb-4">
                        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="white">
                            <path d="M20 6h-8.586l-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm-3 10H7v-2h10v2zm0-4H7v-2h10v2z" />
                        </svg>
                    </div>
                    <div className="text-center">
                        <h2 className="font-semibold">Creá un ticket</h2>
                        <p>Generá un ticket con los detalles.<br /> Llevá tu computadora a "S15" <br />y un técnico se encargará de la reparación</p>
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center bg-principal rounded-full w-20 h-20 mb-4">
                        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="white">
                            <path d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm0 4h8v2H6v-2z" />
                        </svg>
                    </div>
                    <div className="text-center">
                        <h2 className="font-semibold">Seguimiento</h2>
                        <p>Hacé el seguimiento online <br /> de tu reparación con el<br /> número de orden</p>
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center bg-principal rounded-full w-20 h-20 mb-4">
                        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="white">
                            <path d="M9 16.2l-3.5-3.5-1.41 1.41L9 19.02l10-10-1.41-1.42z" />
                        </svg>
                    </div>
                    <div className="text-center">
                        <h2 className="font-semibold">¡Listo!</h2>
                        <p>Ya podés retirar tu compu</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Instructions;
