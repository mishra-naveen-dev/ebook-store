import * as React from 'react';
import { useState } from 'react';  // Importing useState
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Container, Typography, Box } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    ContainerMain: {
        maxWidth: '70vw',
        border: '1px solid transparent',
        margin: '40px auto',
        borderTop: 'none',
        borderRadius: '10px',
        boxShadow: '1px 1px 5px black'
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
    InputFild: {
        width: '100%',
        margin: '5px 5px',
    }
}));

const Contact = () => {
    const classes = useStyles();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
        setName('')
        setEmail('')
        setMessage('')
        
    };

    return (
        <Container component="main" maxWidth="xs" className={classes.ContainerMain}>
            <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column' }}>
                <Typography
                    className={classes.Center}
                    component="h1" variant="h4"
                    sx={{ alignItems: 'center' }}>
                    Contact Us
                </Typography>
                <Box component="form" sx={{ mt: 1 }} onSubmit={handleSubmit}>
                    <Typography variant='body1' className={classes.Labels}> Name:</Typography>
                    <TextField 
                        required 
                        className={classes.InputFild} 
                        type="text" 
                        name="name" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Typography variant='body1' className={classes.Labels}>Email:</Typography>
                    <TextField 
                        required 
                        className={classes.InputFild} 
                        name="email" 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Typography variant='body1' className={classes.Labels}>Message:</Typography>
                    <TextField 
                        name="message" 
                        multiline 
                        rows={4} 
                        className={classes.InputFild} 
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <div className={classes.Center}>
                        <Button 
                            type="submit"
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Submit
                        </Button>
                    </div>
                </Box>
            </Box>
        </Container>
    );
};

export default Contact;
