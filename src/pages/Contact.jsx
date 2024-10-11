import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Container, Typography, Box } from '@mui/material';

const Contact = () => {
  return (
    <Container component="main" maxWidth="xs" sx={{
      maxWidth: '70vw',
      padding: '5%',
      border: '1px solid transparent',
      margin: '40px auto',
      borderTop: 'none',
      borderRadius: '10px',
      boxShadow: '1px  1px  5px  black'
    }}>
      <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography component="h1" variant="h4" sx={{ display: 'flex', justifyContent: 'center' }}>
          Contact Us
        </Typography>
        <Box component="form" sx={{ mt: 1 }}>
          <Typography variant='body1' sx={{ marginTop: '10px', fontWeight: 'bold' }}>
            Name:
          </Typography>
          <TextField required fullWidth id="name" name="name" />

          <Typography variant='body1' sx={{ marginTop: '10px', fontWeight: 'bold' }}>
            Email:
          </Typography>
          <TextField required fullWidth name="email" type="email" />

          <Typography variant='body1' sx={{ marginTop: '10px', fontWeight: 'bold' }}>
            Message:
          </Typography>
          <TextField
            name='message'
            multiline
            rows={4}
            fullWidth
          />

          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
              Submit
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default Contact;
