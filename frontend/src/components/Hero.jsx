/* eslint-disable react/no-unknown-property */
import CreateConsultTicket from "./CreateConsultTicket";


// eslint-disable-next-line no-unused-vars, react-refresh/only-export-components
const Hero = () => {
    return (
        <div style={{
            background: 'linear-gradient(180deg, #004562 0%, #42B4C2 100%)',
    padding: '50px',
    textAlign: 'center',
    width: '100%',   
    height: '100%',
    position: 'relative',
    borderRadius: '45px',
    boxSizing: 'border-box',
}}>
    <h1 style={{
        color: '#fff',
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 700,
        fontSize: '57.44px',
        lineHeight: '70.2px',
        textAlign: 'center',
        marginBottom: '20px' // Espacio entre el título y el SVG
    }}>Tu reparación a un <br /> clic de distancia</h1>

    <svg width="100px" height="100px" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{
        position: 'absolute',
        top: '120px', // Ajustar según sea necesario
        left: '73%',
        transform: 'translateX(-50%)',
    }}>
        <g id="Page-1" stroke="none" strokeWidth="1" fill="#FFFFFF" fillRule="evenodd">
            <g id="icon" transform="translate(42.688000, 42.666667)">
                <path d="M170.616335,85.3333333 L213.270419,85.3333333 L213.270419,-2.13162821e-14 L170.616335,-2.13162821e-14 L170.616335,85.3333333 Z M-2.13162821e-14,213.333333 L85.3081674,213.333333 L85.3081674,170.666667 L-2.13162821e-14,170.666667 L-2.13162821e-14,213.333333 Z M101.465534,131.658667 L41.15266,71.3066667 L71.3090971,41.1413333 L131.621972,101.493333 L101.465534,131.658667 Z M71.3069644,342.845867 L41.1505273,312.680533 L101.463402,252.328533 L131.619839,282.493867 L71.3069644,342.845867 Z M282.431883,131.658667 L252.275445,101.493333 L312.58832,41.1413333 L342.744757,71.3066667 L282.431883,131.658667 Z M285.588285,309.700267 L345.17604,369.3056 L369.318251,345.156267 L309.709169,285.550933 L352.640504,242.628267 L202.028935,201.9456 L242.699604,352.6016 L285.588285,309.700267 Z M222.929436,426.670933 L147.538343,147.460267 L426.666667,222.852267 L364.007818,285.550933 L423.6169,345.156267 L345.17604,423.598933 L285.588285,363.9936 L222.929436,426.670933 Z" id="interaction-click">
                </path>
            </g>
        </g>
    </svg>

            <p style={{
                color: '#fff',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '14.36px',
                lineHeight: '23.93px',
                textAlign: 'center'
            }}>¡Te damos la bienvenida a S15! Estamos aquí para solucionar tus problemas con la <br /> computadora de manera rápida y eficiente 
            </p>

            <CreateConsultTicket/>
           
        </div>
    );
};

export default Hero;