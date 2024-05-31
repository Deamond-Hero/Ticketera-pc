import CreateConsultTicket from "./CreateConsultTicket";

// eslint-disable-next-line no-unused-vars, react-refresh/only-export-components
const Hero = () => {
    return (
        <div style={{
            background: 'linear-gradient(180deg, #004562 0%, #42B4C2 100%)',
            padding: '50px',
            textAlign: 'center',
            width: '100%',   
            height: '900px',
            position: 'relative',
            top: '95px',
            borderRadius: '45px',
            boxSizing: 'border-box',
        }}>
            <h1 style={{
                color: '#fff',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 700,
                fontSize: '57.44px',
                lineHeight: '70.2px',
                textAlign: 'center'
            }}>Tu reparación a un <br /> clic de distancia</h1>
            <p style={{
                color: '#fff',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '14.36px',
                lineHeight: '23.93px',
                textAlign: 'center'
            }}>¡Te damos la bienvenida a S15! Estamos aquí para solucionar tus problemas con la <br /> computadora de manera rápida y eficiente</p>

            <CreateConsultTicket/>
        </div>
    );
};

export default Hero;