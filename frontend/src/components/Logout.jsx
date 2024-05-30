import { useDispatch, useSelector } from "react-redux"
import { LogoutService } from "../redux/actionsUser"
import { useNavigate } from "react-router-dom"



export const Logout = () => {
    const isLoged = useSelector((state) => state.auth.isLoged)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = async() => {
        dispatch(LogoutService(isLoged));
        navigate("/");
    }

    return (
        <div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

