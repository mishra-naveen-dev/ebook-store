import React, { useState } from "react";
import { Menu, MenuItem, IconButton, Avatar } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const ProfileDropdown = ({ user }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("user"); // Clear user data from local storage
    setAnchorEl(null);
    navigate("/login"); // Redirect to login
  };

  return (
    <div>
      {/* User Avatar Button */}
      <IconButton onClick={handleMenuOpen}>
        <Avatar alt={user.name} src={user.profileImage || "/default-avatar.png"} />
      </IconButton>

      {/* Dropdown Menu */}
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
        <MenuItem component={Link} to="/profilepage">Profile</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default ProfileDropdown;
