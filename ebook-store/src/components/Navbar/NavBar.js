import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  useMediaQuery,
  useTheme,
  styled,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import StoreIcon from "@mui/icons-material/Store";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import LoginIcon from "@mui/icons-material/Person";
import SignUpIcon from "@mui/icons-material/PersonAdd";
import sunIcon from "../../assets/sun.png";
import moonIcon from "../../assets/moon.png";
import logo from "../../assets/image/Logo.jpg";

const StyledAppBar = styled(AppBar)({
  backgroundColor: "#002147",
});

const Logo = styled("img")(({ theme }) => ({
  height: "auto",
  maxWidth: "100%",
  maxHeight: "60px",
  [theme.breakpoints.down("sm")]: {
    maxHeight: "40px",
  },
}));

const MenuContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "10px",
});

const StyledButton = styled(Button)({
  fontSize: "1rem",
  "&:hover": {
    color: "#FFD700",
    textDecoration: "underline",
  },
});

function Navbar({ darkMode, toggleDarkMode }) {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token"); // Also remove token
    setUser(null);
    navigate("/");
  };

  return (
    <StyledAppBar position="sticky">
      <Toolbar
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <IconButton component={Link} to="/">
          <Logo src={logo} alt="Logo" />
        </IconButton>

        <div style={{ display: "flex", alignItems: "center" }}>
          <IconButton onClick={toggleDarkMode} style={{ marginRight: "10px" }}>
            <img
              src={darkMode ? sunIcon : moonIcon}
              alt="Toggle Dark Mode"
              style={{ width: "20px", height: "20px" }}
            />
          </IconButton>

          <MenuContainer>
            <StyledButton
              color="inherit"
              component={Link}
              to="/"
              startIcon={<HomeIcon />}
            >
              Home
            </StyledButton>
            <StyledButton
              color="inherit"
              component={Link}
              to="/cartpage"
              startIcon={<StoreIcon />}
            >
              Shop
            </StyledButton>
            <StyledButton
              color="inherit"
              component={Link}
              to="/orders"
              startIcon={<ShoppingBagIcon />}
            >
              Orders
            </StyledButton>

            {/* If user is logged in, show clickable username and logout button */}
            {user ? (
              <>
                <StyledButton
                  to="/profilepage"
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                >
                  {user.name}
                </StyledButton>
                <StyledButton color="inherit" onClick={handleLogout}>
                  Logout
                </StyledButton>
              </>
            ) : (
              <>
                <StyledButton
                  color="inherit"
                  component={Link}
                  to="/login"
                  startIcon={<LoginIcon />}
                >
                  Login
                </StyledButton>
                <StyledButton
                  color="inherit"
                  component={Link}
                  to="/signup"
                  startIcon={<SignUpIcon />}
                >
                  Sign Up
                </StyledButton>
              </>
            )}
          </MenuContainer>
        </div>
      </Toolbar>
    </StyledAppBar>
  );
}

export default Navbar;
