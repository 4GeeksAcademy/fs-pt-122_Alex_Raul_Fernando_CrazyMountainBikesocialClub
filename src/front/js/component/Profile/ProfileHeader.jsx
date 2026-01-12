import { useState } from "react";
import SettingsDropdown from "./SettingsDropdown";
import "../../../styles/header.css";

const ProfileHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="profile-header">
      <div className="profile-left">
        <img
          src="https://ca.slack-edge.com/T0BFXMWMV-U08U5P1CMT8-66334e023a99-512"
          alt="avatar"
          className="profile-avatar"
        />

        <div className="profile-info">
          <h1>Fernando Del Rio</h1>
          <span>Ponferrada, ES</span>
        </div>
      </div>

      <div className="settings-wrapper">
        <button
          className="settings-btn"
          onClick={() => setOpen(!open)}
        >
          ⚙️
        </button>

        {open && (
          <div className="settings-dropdown">
            <button>Cerrar sesión</button>
          </div>
        )}
      </div>
    </header>
  );
};

export default ProfileHeader;
