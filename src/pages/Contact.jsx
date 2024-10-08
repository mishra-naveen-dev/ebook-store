<<<<<<< HEAD
import React, { useEffect } from 'react';
import Preloader from '../Components/Preloader';

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Preloader />
      <div className="w-full max-w-5xl p-5 shadow-md rounded-lg mx-auto my-10 dark:bg-[rgb(40,40,40)]">
        <h1 className="text-center dark:text-white text-3xl md:text-4xl mb-6 md:mb-10">Contact Us</h1>
        <div className="flex flex-col items-center gap-5">
          <div className="w-full max-w-xl md:max-w-2xl p-5 dark:text-white rounded-lg">
            <form className="flex flex-col gap-4">
              <div className="flex flex-col">
                <label htmlFor="name" className="font-bold mb-1 dark:text-white">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-2 border border-gray-400 rounded-md text-gray-900 dark:bg-[rgb(51,51,51)] dark:text-white"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="font-bold mb-1 dark:text-white">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-2 border border-gray-400 rounded-md text-gray-900 dark:bg-[rgb(51,51,51)] dark:text-white"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="message" className="font-bold mb-1 dark:text-white">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full p-2 border border-gray-400 rounded-md text-gray-900 dark:bg-[rgb(51,51,51)] dark:text-white"
                  required
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button type="submit" className="p-2 bg-blue-600 text-white rounded-md self-start hover:bg-blue-700">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
=======
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
>>>>>>> main
}

export default Contact;
