import { useDispatch, useSelector } from "react-redux"
import { LogoutService } from "../redux/auth/actionsUser"
import { useNavigate } from "react-router-dom"



export const Logout = () => {
    const isLogged = window.localStorage.getItem("token")
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = async() => {
        dispatch(LogoutService(isLogged));
        navigate("/home");
    }

    return (
        <div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

