<<<<<<< HEAD
=======
import React from 'react';
import { Grid } from '@material-ui/core';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Footer.css'

export const Help = () => {
    return (
        <>
            <Grid container direction="column" justifyContent="flex-start" alignItems="flex-start">
                <Button className='FooterBtn' component={Link} to="/">Payments</Button>
                <Button className='FooterBtn' component={Link} to="/">Shipping</Button>
                <Button className='FooterBtn' component={Link} to="/">Cencellation & Returns</Button>
                <Button className='FooterBtn' component={Link} to="/">FAQs</Button>

            </Grid>
        </>
    )
}

export const About = () => {
    return (
        <>
            <Grid container direction="column" justifyContent="flex-start" t alignItems="flex-start">
                <Button className='FooterBtn' color="inherit" component={Link} to="/about">About us</Button>
                <Button className='FooterBtn' color="inherit" component={Link} to="/contact">Contact us</Button>
                <Button className='FooterBtn' color="inherit" component={Link} to="/">Careers</Button>
                <Button className='FooterBtn' color="inherit" component={Link} to="/">Gift Cards</Button>
            </Grid>
        </>
    )
}

export const Socials = () => {
    return (
        <>
            <Grid container direction="row" justifyContent="flex-start" >
                <IconButton aria-label="about" component={Link} to='/#' >
                    < GitHubIcon className='IconButton' sx={{ color: 'white' }} />
                </IconButton>

                <IconButton aria-label="about" component={Link} to='/#' >
                    < XIcon className='IconButton' sx={{ color: 'white' }} />
                </IconButton>

                <IconButton className='IconButton' aria-label="about" component={Link} to='/#' >
                    < InstagramIcon className='IconButton' sx={{ color: 'white' }} />
                </IconButton>

                <IconButton aria-label="about" component={Link} to='/#'>
                    < LinkedInIcon className='IconButton' sx={{ color: 'white' }} />
                </IconButton>
            </Grid >
        </>
    )
}
>>>>>>> main
