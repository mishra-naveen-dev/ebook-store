import React from "react";
import { Typography, Container, Grid } from "@material-ui/core";
import { Help, About, Socials, Legal } from "./FooterContent";
import "./Footer.css";
import { FooterStyles as Styles } from '../Styles/Styles';


const useStyles = Styles;
function Footer() {
    const classes = useStyles();

    return (<>
        <footer className={classes.Footer} >

            <Grid container justifyContent="space-evenly" spacing={4}>

                <Grid item textAlign="center"   >
                    <Typography variant="body2" className={classes.Text} >
                        {"ABOUT"}
                    </Typography>

                    <About />
                </Grid>

                <Grid item textAlign="center" sx={{ mr: 4 }} >
                    <Typography variant="body2" className={classes.Text}>
                        {"HELP"}
                    </Typography>

                    <Help />
                </Grid>

                <Grid item textAlign="center" sx={{ mr: 4 }} className={classes.MarginRight}>
                    <Typography variant="body2" className={classes.Text}>
                        {"Legal"}
                    </Typography>

                    <Legal />
                </Grid>

                <Grid item textAlign="center" sx={{ mr: 4 }} className={classes.MarginRight} >
                    <Typography
                        variant="body2"
                        className={classes.Text}
                        sx={{ textAlign: 'center !important' }}
                    >
                        {"SOCIALS"}
                    </Typography>

                    <Socials />

                </Grid>
            </Grid>




            <Container sx={{ mt: 3 }} className={classes.MarginTop} >
                <Typography variant="body2" className={classes.Text} align="center" >
                    {"Copyright © "}
                    Bookstore {new Date().getFullYear()}
                    {" Build By Lavish ANd Naveen ."}
                </Typography>
            </Container>
        </footer >
    </>
    );
}

export default Footer;
