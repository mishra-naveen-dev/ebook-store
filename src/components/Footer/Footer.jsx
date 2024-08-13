import React from 'react';
import { Typography, Container, Grid } from '@material-ui/core';
import { Help, About, Socals } from './FooterContent'
import './Footer.css'

function Footer() {
    return (
        <footer className='Footer'>
            <Grid container spacing={{ sm: 2, md: 3 }} justifyContent="space-around">
                <Grid xs="auto">

                    <Typography variant='body2' className='Text' >
                        {'ABOUT'}
                    </Typography>

                    <About />
                </Grid>
                <Grid xs="auto">

                    <Typography variant='body2' className='Text'>
                        {'HELP'}
                    </Typography>
                    <Help />
                </Grid>

                <Grid xs={6}  >

                    <Typography variant='body2' className='Text' sx={{ textAlign: 'center' }} >
                        {'SOCIALS'}
                    </Typography>

                    <Socals />
                </Grid >
            </Grid >

            <Container  >
                <Typography variant="body2" className='Text' align="center">
                    {'Copyright © '}
                    Bookstore {new Date().getFullYear()}
                    {'.'}
                </Typography>
            </Container>

        </footer >
    );
}

export default Footer;
