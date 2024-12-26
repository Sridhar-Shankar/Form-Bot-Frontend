import { useState } from 'react';
import { useDispatch } from "react-redux";
import { logout } from "../configuration/authSlice";
import { Outlet, useNavigate, useParams, useLocation } from "react-router-dom";
import styles from "./DashboardLayout.module.css";
import ThemeSwitcher from "../components/ThemeSwitcher";

function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { userID } = useParams();

  const { userName } = JSON.parse(localStorage.getItem("loggedUser"));
  // const headerOptions = [
  //   { id: 0, option: `${userName}'s Dashboard`, value: "dashboard" },
  //   { id: 1, option: "Settings", value: "settings" },
  //   { id: 2, option: "Log Out", value: "logout" },
  // ];

  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);
  const [inviteEmail, setInviteEmail] = useState("");
  const [permission, setPermission] = useState("edit"); // Default permission
  const [successMessage, setSuccessMessage] = useState("");

  function handleOptions(e) {
    e.preventDefault();
    const value = e.target.value;
    if (value === "logout") {
      dispatch(logout());
    } else if (value === "settings") {
      navigate("settings");
    } else if (value === "dashboard") {
      navigate(`/dashboard/${userID}`);
    }
  }

  const handleCloseModal = () => {
    setIsInviteModalOpen(false);
    setInviteEmail(""); // Clear the email input
    setSuccessMessage(""); // Clear success message
  };

  const handleSendInvite = () => {
    console.log(`Inviting ${inviteEmail} with ${permission} permissions`);
    setSuccessMessage(`Invite sent to ${inviteEmail} with ${permission} permissions!`);
    setInviteEmail(""); // Clear input after sending
  };

  // Check if the URL contains the word 'settings' or 'workspacetool'
  const isSettingsPage = location.pathname.includes("settings");
  const isWorkSpaceTool = location.pathname.includes("workspacetool");

  return (
    <div className="flex flex-col justify-center h-screen w-screen">
      {!isSettingsPage && !isWorkSpaceTool && (
        <div className={styles.menu}>
          {/* Left side menu options */}
          {/* <div className={styles.wrapper}>
            <select
              onChange={handleOptions}
              className={styles.optionsContainer}
            >
              {headerOptions.map((curOption) => (
                <option key={curOption.id} value={curOption.value}>
                  {curOption.option}
                </option>
              ))}
            </select>
          </div> */}

          {/* Centered workspace dropdown */}
          <div className={styles.centerWrapper}>
            <select
              onChange={handleOptions}
              className={styles.workspaceSelect}
            >
              <option value="dashboard">{`${userName}'s Dashboard`}</option>
              <option value="settings">Settings</option>
              <option value="logout">Log Out</option>
            </select>
          </div>

          {/* Right side controls */}
          <div className={styles.controls}>
            <ThemeSwitcher />
            <button
              className={styles.inviteButton}
              onClick={() => setIsInviteModalOpen(true)}
            >
              Share
            </button>
          </div>
        </div>
      )}

      {/* Modal for inviting users */}
      {isInviteModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <span className={styles.close} onClick={handleCloseModal}>&times;</span>
            <h2>Invite People</h2>
            <input
              type="email"
              value={inviteEmail}
              onChange={(e) => setInviteEmail(e.target.value)}
              placeholder="Enter email"
              required
            />
            <div className={styles.permissionSelect}>
              <label>Select Permission:</label>
              <select onChange={(e) => setPermission(e.target.value)} value={permission}>
                <option value="edit">Can edit</option>
                <option value="view">Can view</option>
              </select>
            </div>
            <button onClick={handleSendInvite}>Send Invite</button>
            {successMessage && <p className={styles.success}>{successMessage}</p>}
          </div>
        </div>
      )}

      {/* Main content */}
      <div className="size-full flex flex-col">
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
