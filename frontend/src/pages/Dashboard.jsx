import { Logout } from "../components/Logout"
import { ModalTicket } from "../utils/modalTicket"


const Dashboard = () => {

    return (
        <div className="flex-col aling-center justify-center w-[100%]">

            <h1>Dashboard</h1>
            <Logout />
            <ModalTicket />

        </div>
    )
}


export default Dashboard