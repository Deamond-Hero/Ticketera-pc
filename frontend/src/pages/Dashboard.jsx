import { DataTable } from "../components/DataTable"
import { Logout } from "../components/Logout"
import { SideBar } from "../components/SideBar"

const Dashboard = () => {
    return (
        <div className="flex">
          <SideBar />
          <div className="flex-1">
            <DataTable />
          </div>
        </div>
      );
}

export default Dashboard
