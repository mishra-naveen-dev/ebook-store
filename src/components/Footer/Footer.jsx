import React from "react";
import { Typography, Container, Grid } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/style";
import { Help, About, Socials } from "./FooterContent";
import "./Footer.css";


function Footer() {

    return (<>
        <footer className='Footer' >

            <Grid container justifyContent="space-evenly" spacing={4}>

                <Grid item textAlign="center"   >
                    <Typography variant="body2" className="Text" >
                        {"ABOUT"}
                    </Typography>

                    <About />
                </Grid>

                <Grid item textAlign="center" sx={{ mr: 4 }} className='MarginRight'>
                    <Typography variant="body2" className="Text">
                        {"HELP"}
                    </Typography>

                    <Help />
                </Grid>

                <Grid item textAlign="center" sx={{ mr: 4 }} className='MarginRight' >
                    <Typography
                        variant="body2"
                        className="Text Social"
                    >
                        {"SOCIALS"}
                    </Typography>

                    <Socials />

                </Grid>
            </Grid>




            <Container sx={{ mt: 3 }} className='MarginTop' >
                <Typography variant="body2" className="Text" align="center" >
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
