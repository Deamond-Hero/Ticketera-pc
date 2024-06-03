import { DataTable } from "../components/DataTable"
import { Logout } from "../components/Logout"

const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <Logout/>
            <DataTable />
        </div>
    )
}


export default Dashboard