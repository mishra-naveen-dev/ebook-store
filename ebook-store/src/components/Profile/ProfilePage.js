import React from "react";
import AvatarImage from "../../assets/ss2.webp"; // Static avatar image
import "./ProfilePage.css";

const ProfilePage = () => {
  // Static user details
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+91 9876543210",
    address: "123, Green Street, Indore, India",
    orders: 5, // Example static order count
  };

  // Logout function (static, doesn't clear token or API call)
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
