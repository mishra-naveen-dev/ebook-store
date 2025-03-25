import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./ProfilePage.css";

const ProfilePage = () => {
  const navigate = useNavigate(); // Initialize navigate

  // User state
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is logged in
    const userData = JSON.parse(localStorage.getItem("user"));
    if (!userData) {
      // If user is not logged in, redirect to login page
      navigate("/login");
    } else {
      setUser(userData);
    }
  }, [navigate]);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/"); // Redirect to home page
    window.location.reload(); // Reload the page
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h2>My Profile</h2>

        {user ? (
          <>
            <p className="profile-info">
              <span>Name:</span> {user.name}
            </p>
            <p className="profile-info">
              <span>Email:</span> {user.email}
            </p>
            <p className="profile-info">
              <span>Phone:</span> {user.phone}
            </p>
            <p className="profile-info">
              <span>Address:</span> {user.address}
            </p>
            <p className="profile-info">
              <span>Orders Placed:</span> {user.orders}
            </p>

            {/* Logout Button */}
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <p>Redirecting to login...</p>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
