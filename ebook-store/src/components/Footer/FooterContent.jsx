import React from 'react';
import { Grid } from '@material-ui/core';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { AboutStyle as Styles } from '../Styles/Styles';
// import './Footer.css';



const useStyles = Styles;

export const Help = () => {
    const classes = useStyles();
    return (
        <>
            <Grid container direction="column" justifyContent="flex-start" t alignItems="flex-start">
                <Button className={classes.FooterBtn} color="inherit" component={Link} to="/">Payments</Button>
                <Button className={classes.FooterBtn} color="inherit" component={Link} to="/">Shipping</Button>
                <Button className={classes.FooterBtn} color="inherit" component={Link} to="/">Cancellation & Returns</Button>
                <Button className={classes.FooterBtn} color="inherit" component={Link} to="/faqs">FAQS</Button>
            </Grid>
        </>

    )
}

export const About = () => {
    const classes = useStyles();
    return (
        <>
            <Grid container direction="column" justifyContent="flex-start" t alignItems="flex-start">
                <Button className={classes.FooterBtn} color="inherit" component={Link} to="/about">About us</Button>
                <Button className={classes.FooterBtn} color="inherit" component={Link} to="/contact">Contact us</Button>
                <Button className={classes.FooterBtn} color="inherit" component={Link} to="/">Careers</Button>
                <Button className={classes.FooterBtn} color="inherit" component={Link} to="/">Gift Cards</Button>
            </Grid>
        </>
    )
}



export const Legal = () => {
    const classes = useStyles();
    return (
        <>
            <Grid container direction="column" justifyContent="flex-start" t alignItems="flex-start">
                <Button className={classes.FooterBtn} color="inherit" component={Link} to="/privacy">Privacy Policy</Button>
                <Button className={classes.FooterBtn} color="inherit" component={Link} to="/termsConditions">Terms & Conditions</Button>
                <Button className={classes.FooterBtn} color="inherit" component={Link} to="/">Licensing</Button>
            </Grid>
        </>
    )
}



export const Socials = () => {
    const classes = useStyles();
    return (
        <>
            <Grid container direction="row" justifyContent="flex-start" >
                <IconButton aria-label="about" component={Link} to='/#' >
                    < GitHubIcon className={classes.IconButton} sx={{ color: 'white' }} />
                </IconButton>

                <IconButton aria-label="about" component={Link} to='/#' >
                    < XIcon className={classes.IconButton} sx={{ color: 'white' }} />
                </IconButton>

                <IconButton className={classes.IconButton} aria-label="about" component={Link} to='/#' >
                    < InstagramIcon className={classes.IconButton} sx={{ color: 'white' }} />
                </IconButton>

                <IconButton aria-label="about" component={Link} to='/#'>
                    < LinkedInIcon className={classes.IconButton} sx={{ color: 'white' }} />
                </IconButton>
            </Grid >
        </>
    )
}
