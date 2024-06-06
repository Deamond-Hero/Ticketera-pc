import { BsTelephoneFill } from "react-icons/bs"
import { MdEmail } from "react-icons/md"
import { HiMiniMapPin } from "react-icons/hi2"

const Footer = () => {
    return (
      <main className="bg-blue-ppal w-full py-12 md:py-20 px-20 md:px-36 text-text-light flex flex-col items-center font-poppins">
        <div className="flex flex-col sm:flex-row justify-center w-full mb-8 gap-2">
          <section className="flex flex-col gap-4">
            <h5 className="text-white mb-6 text-2xl">S15-Ticketera</h5>
            <div className="flex items-center gap-4">              
              <BsTelephoneFill className="text-[#01B9D0] w-6 h-6"/>
              <div className="flex flex-col gap-1">
                <h3 className="text-white">Teléfono</h3>
                <p>0810-555-8892</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MdEmail className="text-[#01B9D0] w-6 h-6"/>
              <div className="flex flex-col gap-1">
                <h3 className="text-white">Email</h3>
                <p>nombre@example.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <HiMiniMapPin className="text-[#01B9D0] w-6 h-6"/>
              <div className="flex flex-col gap-1">
                <h3 className="text-white">Dirección</h3>
                <p className="text-balance">4517 Washington Ave.Manchester, Kentucky 39495</p>
              </div>
            </div>
          </section>
          <section className="flex gap-10 pt-4">
            <div className="flex flex-col gap-4">
              <h3 className="text-white">Atención al cliente</h3>
              <p className="text-balance">Lunes a Viernes de 8 a 18hs.</p>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-white">Ayuda</h3>
              <ul className="flex flex-col gap-4">
                <li>Soporte técnico</li>
                <li>Términos y condiciones</li>
              </ul>
            </div>
          </section>
        </div>
        <section className="text-[#A3A4A7]">
          <p>Copyright © 2024 - S15. Buenos Aires, Argentina.</p>
        </section>
      </main>
    );
  };
  
  export default Footer;