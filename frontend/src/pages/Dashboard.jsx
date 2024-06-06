import { Logout } from "../components/Logout"
import { useModal } from "../hooks/useModal"
import {ModalTicket} from "../utils/ModalTicket"

const Dashboard = () => {

    const [isOpen, openModal, closeModal] = useModal(false)

    return (
        <div className="flex-col aling-center justify-center w-[100%]">

            <h1>Dashboard</h1>
            <Logout />
            <button onClick={openModal} className="h-10 w-96 rounded-lg text-[#FFFFFF] text-l tracking-wide bg-blue-ppal ml-[1rem] mr-[1rem]" >Abrir Modal</button>
            {isOpen &&
                <ModalTicket
                    closeModal={closeModal} />}

        </div>
    )
}


export default Dashboard