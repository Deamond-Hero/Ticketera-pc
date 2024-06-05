import cleaning from '../assets/cleaning.png'
import computer from '../assets/computer.png'
import notebook from '../assets/notebook.png'
import { GrAlarm } from "react-icons/gr"
import { FaRegAddressCard } from "react-icons/fa"
import { PiListChecksBold } from "react-icons/pi"
import samsung from '../assets/samsung.png'
import microsoft from '../assets/microsoft.png'
import apple from '../assets/apple.png'
import amd from '../assets/amd.png'
import hp from '../assets/hp.png'
import lenovo from '../assets/lenovo.png'
import intel from '../assets/intel.png'
import msi from '../assets/msi.png'

const LandingInfo = () => {
  return (
    <main className="font-urbanist mt-8 w-full">
        <section className="flex flex-col md:flex-row justify-center gap-10 p-10">
            <div className="flex flex-col items-center justify-center md:w-1/5 gap-4"> 
                <GrAlarm className='w-12 h-12 text-blue-ppal'/> 
                <div className='w-2/3 md:w-full'>
                    <h2 className="font-semibold text-2xl text-center">Servicio rápido</h2>
                    <p className="text-center text-balance text-xl">Lorem ipsum dolor sit amet, consecte ipsum Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center md:w-1/5 gap-4">
                <PiListChecksBold className='w-12 h-12 text-blue-ppal border-4 border-blue-ppal'/>
                <div className='w-2/3 md:w-full'>
                    <h2 className="font-semibold text-2xl text-center">Sistema de seguimiento</h2>
                    <p className="text-center text-balance text-xl">Lorem ipsum dolor sit amet, consecte ipsum Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center md:w-1/5 gap-4">
                <FaRegAddressCard className='w-12 h-12 text-blue-ppal'/>
                <div className='w-2/3 md:w-full'>              
                    <h2 className="font-semibold text-2xl text-center">Técnicos profesionales</h2>
                    <p className="text-center text-balance text-xl">Lorem ipsum dolor sit amet, consecte ipsum Lorem ipsum dolor sit amet.</p>
                </div> 
            </div>
        </section>
        <section className="flex flex-col justify-center items-center gap-8 p-10">
            <h2 className="font-semibold text-5xl text-dark text-center">Nuestros servicios</h2>
            <div className="flex flex-col lg:flex-row gap-8">
                <div>
                    <img src={notebook} alt="Notebook" className='w-[375px] h-[250px] rounded-2xl my-2'/>
                    <h3 className="text-2xl text-center">Notebook</h3>
                </div>
                <div>
                    <img src={computer} alt="Computadora" className='w-[375px] h-[250px] rounded-2xl my-2'/>
                    <h3 className="text-2xl text-center">Computadoras</h3>
                </div>
                <div>
                    <img src={cleaning} alt="Limpieza de equipos" className='w-[375px] h-[250px] rounded-2xl my-2'/>
                    <h3 className="text-2xl text-center">Limpieza de equipos</h3>
                </div>
            </div>
        </section>
        <section className="p-10 flex flex-col items-center">
            <h2 className="font-semibold text-5xl text-dark text-center">Marcas que reparamos</h2>          
            <div className='grid justify-items-center sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8'>
                <img src={samsung} alt="Icono Samsung" className='flex-shrink: 0 h-28'/>
                <img src={microsoft} alt="Icono Microsoft" className='flex-shrink: 0 h-28'/>
                <img src={apple} alt="Icono Apple" className='flex-shrink: 0 h-28'/>
                <img src={amd} alt="Icono Amd" className='flex-shrink: 0 h-28'/>
                <img src={intel} alt="Icono Intel" className='flex-shrink: 0 h-28'/>
                <img src={msi} alt="Icono Msi" className='flex-shrink: 0 h-28'/>
                <img src={lenovo} alt="Icono Leanovo" className='flex-shrink: 0 h-28'/>
                <img src={hp} alt="Icono Hp" className='flex-shrink: 0 h-28'/>
            </div>
        </section>
    </main>
  )
}

export default LandingInfo