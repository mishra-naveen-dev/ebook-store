import React from 'react';
import { Typography, Container } from '@material-ui/core';

function Footer() {
    return (
        <footer>
            <Container>
                <Typography variant="body2" color="textSecondary" align="center">
                    {'Copyright © '}
                    Bookstore {new Date().getFullYear()}
                    {'.'}
                </Typography>
            </Container>
        </footer>
    );
}

export default Footer;
