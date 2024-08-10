import React from 'react';
import { Typography, Container } from '@material-ui/core';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import './Footer.css'

function Footer() {
    return (
        <footer className='Footer'>
            <Container  >
                <Typography variant="body2" color="textSecondary" align="center">
                    {'Copyright © '}
                    Bookstore {new Date().getFullYear()}
                    {'.'}
                </Typography>
            </Container>

            <div className="FooterBtn">
                <Button className='FooterBtn' color="inherit" component={Link} to="/about">About</Button>

                <Button className='FooterBtn' color="inherit" component={Link} to="/contact">Contact</Button>
            </div>

        </footer>
    );
}

export default Footer;
