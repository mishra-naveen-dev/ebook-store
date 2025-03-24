import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:3005/api/auth/logout");

      // Remove token from local storage
      localStorage.removeItem("token");

      toast.success("Logout successful");
      navigate("/login"); // Redirect to login page
    } catch (error) {
      toast.error("Logout failed. Try again.");
      console.error("Logout Error:", error);
    }
  };

  return (
    <button onClick={handleLogout} className="logout-button">
      Logout
    </button>
  );
};

export default LogoutButton;
