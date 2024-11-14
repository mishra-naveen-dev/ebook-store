import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Button, useMediaQuery, useTheme, styled } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import StoreIcon from '@mui/icons-material/Store';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Person'; // Import LoginIcon
import SignUpIcon from '@mui/icons-material/PersonAdd'; // Import SignUpIcon
import { Link } from 'react-router-dom';
import sunIcon from '../../assets/sun.png';
import moonIcon from '../../assets/moon.png';
import logo from '../../assets/image/Logo.jpg';

const StyledAppBar = styled(AppBar)({
  backgroundColor: '#002147', // Adjust color to your preference
});

const Logo = styled('img')(({ theme }) => ({
  height: 'auto',
  maxWidth: '100%', // Allow the logo to adjust its width according to the container size
  maxHeight: '60px', // Set a max height for better responsiveness
  [theme.breakpoints.down('sm')]: {
    maxHeight: '40px', // Make the logo smaller on mobile screens
  },
}));

const MenuContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
});

const StyledButton = styled(Button)({
  fontSize: '1rem', // Adjust font size
  '&:hover': {
    color: '#FFD700', // Adjust hover color
    textDecoration: 'underline', // Underline on hover
  },
});

const MobileMenu = styled('div')(({ open }) => ({
  display: open ? 'flex' : 'none',
  flexDirection: 'column',
  position: 'absolute',
  top: '64px',
  right: '0',
  backgroundColor: '#002147',
  width: '100%',
  padding: '10px',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
  zIndex: 1000,
}));

const MobileMenuButton = styled(IconButton)({
  fill: '#fff', // Adjust color as needed
  marginLeft: '-13px', // Adjust for proper alignment
});

function Navbar({ darkMode, toggleDarkMode }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenuClick = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <StyledAppBar position="sticky">
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <IconButton component={Link} to="/">
          <Logo src={logo} alt="Logo" />
        </IconButton>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <IconButton onClick={toggleDarkMode} style={{ marginRight: '10px' }}>
            <img src={darkMode ? sunIcon : moonIcon} alt="Toggle Dark Mode" style={{ width: '20px', height: '20px' }} />
          </IconButton>
          {isMobile ? (
            <>
              <MobileMenuButton onClick={handleMenuClick}>
                <MenuIcon sx={{ fontSize: '2rem' }} />
              </MobileMenuButton>
              <MobileMenu open={openMenu}>
                <StyledButton color="inherit" component={Link} to="/" startIcon={<HomeIcon sx={{ fontSize: '1.5rem' }} />} fullWidth>
                  Home
                </StyledButton>
                <StyledButton color="inherit" component={Link} to="/shop" startIcon={<StoreIcon sx={{ fontSize: '1.5rem' }} />} fullWidth>
                  Shop
                </StyledButton>
                {/* <StyledButton color="inherit" component={Link} to="/wishlist" startIcon={<FavoriteIcon sx={{ fontSize: '1.5rem' }} />} fullWidth>
                  Wishlist
                </StyledButton> */}
                {/* <StyledButton color="inherit" component={Link} to="/cart" startIcon={<ShoppingCartIcon sx={{ fontSize: '1.5 rem' }} />} fullWidth>
                  Cart
                </StyledButton> */}
                <StyledButton color="inherit" component={Link} to="/orders" startIcon={<ShoppingBagIcon sx={{ fontSize: '1.5rem' }} />} fullWidth>
                  Orders
                </StyledButton>
                <StyledButton color="inherit" component={Link} to="/login" startIcon={<LoginIcon sx={{ fontSize: '1.5rem' }} />} fullWidth>
                  Login
                </StyledButton>
                <StyledButton color="inherit" component={Link} to="/signup" startIcon={<SignUpIcon sx={{ fontSize: '1.5rem' }} />} fullWidth>
                  Sign Up
                </StyledButton>
              </MobileMenu>
            </>
          ) : (
            <MenuContainer>
              <StyledButton color="inherit" component={Link} to="/" startIcon={<HomeIcon sx={{ fontSize: '1.5rem' }} />}>
                Home
              </StyledButton>
              <StyledButton color="inherit" component={Link} to="/shop" startIcon={<StoreIcon sx={{ fontSize: '1.5rem' }} />}>
                Shop
              </StyledButton>
              {/* <StyledButton color="inherit" component={Link} to="/wishlist" startIcon={<FavoriteIcon sx={{ fontSize: '1.5rem' }} />}>
                Wishlist
              </StyledButton> */}
              {/* <StyledButton color="inherit" component={Link} to="/cart" startIcon={<ShoppingCartIcon sx={{ fontSize: '1.5rem' }} />}>
                Cart
              </StyledButton> */}
              <StyledButton color="inherit" component={Link} to="/orders" startIcon={<ShoppingBagIcon sx={{ fontSize: '1.5rem' }} />}>
                Orders
              </StyledButton>
              <StyledButton color="inherit" component={Link} to="/login" startIcon={<LoginIcon sx={{ fontSize: '1.5rem' }} />}>
                Login
              </StyledButton>
              <StyledButton color="inherit" component={Link} to="/signup" startIcon={<SignUpIcon sx={{ fontSize: '1.5rem' }} />}>
                Sign Up
              </StyledButton>
            </MenuContainer>
          )}
        </div>
      </Toolbar>
    </StyledAppBar>
  );
}

export default Navbar;