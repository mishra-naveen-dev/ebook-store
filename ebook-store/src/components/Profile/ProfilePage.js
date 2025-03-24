import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./ProfilePage.css";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [orderCount, setOrderCount] = useState(0);
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state
  const navigate = useNavigate();

  // Fetch user data
  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      setError(null); // Reset error state
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/login");
          return;
        }

        const response = await axios.get(
          "http://localhost:3005/api/user/profile",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        if (response.data.user) {
          setUser(response.data.user);
          setOrderCount(response.data.orderCount);
        } else {
          setError("User data not found.");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError("Failed to load profile. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [navigate]);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  if (loading) return <p>Loading profile...</p>; // Show loading indicator
  if (error) return <p className="error-message">{error}</p>; // Show error if any

  return (
    <div className="profile-container">
      <h2>My Profile</h2>
      <div className="profile-details">
        <p>
          <strong>Name:</strong> {user?.name || "N/A"}
        </p>
        <p>
          <strong>Email:</strong> {user?.email || "N/A"}
        </p>
        <p>
          <strong>Phone:</strong> {user?.phone || "N/A"}
        </p>
        <p>
          <strong>Address:</strong> {user?.address || "N/A"}
        </p>
        <p>
          <strong>Orders Placed:</strong> {orderCount}
        </p>
      </div>
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default ProfilePage;
