import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Container, Typography, Box, } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    ContainerMain: {
        maxWidth: '70vw',
        padding: '5%',
        border: ' 1px solid transparent',
        margin: '40px auto',
        borderTop: 'none',
        borderRadius: '10px',
        boxShadow: '1px  1px  5px  black'
    },
    Center: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
    },
    Labels: {
        marginTop: '10px',
        fontWeight: 'bold',
    },
}
));

const Contact = () => {
    const classes = useStyles();
    return (
        <Container component="main" maxWidth="xs" className={classes.ContainerMain}>

            <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', }}>

                <Typography
                    className={classes.Center}
                    component="h1" variant="h4"
                    sx={{ alignItems: 'center', }}>
                    {' Contact Us'}
                </Typography>
                <Box component="form" sx={{ mt: 1 }}>
                    <Typography
                        variant='body1'
                        className={classes.Labels}
                    > Name:</Typography>
                    <TextField
                        required
                        fullWidth
                        id="name"
                        name="name" />
                    <Typography variant='body1' className={classes.Labels}>
                        Email: </Typography>
                    <TextField required fullWidth name="email" type="email" />
                    <Typography variant='body1' className={classes.Labels}>
                        Massage:
                    </Typography>
                    <TextField
                        tyle='massage'
                        name='massage'
                        multiline
                        rows={4}
                        fullWidth

                    />
                    <div className={classes.Center}>
                        <Button type="submit"
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            {' Submit'}
                        </Button>
                    </div>
                </Box>
            </Box >
        </Container >
    );
}

export default Contact;
