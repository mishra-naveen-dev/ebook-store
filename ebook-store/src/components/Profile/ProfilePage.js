import React, { useEffect, useState } from "react";

import AvatarImage from "../../assets/ss2.webp"; // Static avatar image
import "./ProfilePage.css";

const ProfilePage = () => {
  // Static user details
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    orders: 0, // Dynamic order count
  });

  useEffect(() => {
    // Retrieve user data from localStorage
    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData) {
      setUser(userData);
    }
  }, []);

  const handleLogout = () => {
    alert("You have been logged out!");
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        {/* Avatar Image */}
        <img src={AvatarImage} alt="User Avatar" className="profile-avatar" />

        <h2>My Profile</h2>

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
      </div>
    </div>
  );
};

export default ProfilePage;
