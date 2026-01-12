import { useNavigate } from "react-router-dom";
import "../../../styles/header.css";

const SettingsDropdown = () => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <div className="settings-dropdown">
            <button onClick={logout}>Cerrar sesión</button>
        </div>
    );
};

export default SettingsDropdown