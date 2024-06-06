import { DataTable } from "../components/DataTable"
import { Logout } from "../components/Logout"


const Dashboard = () => {

    return (
        <div className="flex-col aling-center justify-center w-[100%]">

            <h1>Dashboard</h1>
            <Logout />
            <DataTable />
        </div>
    )
}


export default Dashboard