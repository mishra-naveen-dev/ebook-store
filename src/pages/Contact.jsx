import * as React from 'react';

import { Button, TextField, Typography, Box } from '@mui/material';
import { Container } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  ContainerMain: {
    maxWidth: '70vw',
    padding: '5%',
    border: '1px solid transparent',
    margin: '40px auto',
    borderTop: 'none',
    borderRadius: '10px',
    boxShadow: '1px 1px 5px black',
  },
  Center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Labels: {
    marginTop: '10px',
    fontWeight: 'bold',
  },
  form: {
    width: '100%',
  },
}));

const Contact = () => {
  const classes = useStyles(); // Initialize classes object

  return (
    <Container component="main" maxWidth="xs" className={classes.ContainerMain}>
      <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography component="h1" variant="h4" className={classes.Center}>
          Contact Us
        </Typography>
        <Box component="form" sx={{ mt: 1 }} className={classes.form}>
          <Typography variant='body1' className={classes.Labels}>
            Name:
          </Typography>
          <TextField required fullWidth id="name" name="name" />

          <Typography variant='body1' className={classes.Labels}>
            Email:
          </Typography>
          <TextField required fullWidth name="email" type="email" />

          <Typography variant='body1' className={classes.Labels}>
            Message:
          </Typography>
          <TextField
            required
            name='message'
            multiline
            rows={4}
            fullWidth
          />

          <div className={classes.Center}>
            <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
              Submit
            </Button>
          </div>
        </Box>
      </Box>
    </Container>
  );

};

export default Contact;
