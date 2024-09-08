import React from 'react'
import { Typography, Container, Box, } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const useStyles = makeStyles((themes) => ({
    Box: {
        width: '75%',
        borderRadius: '3px',
        backgroundColor: '#F4F4F4',
        padding: '10px 20px',
        boxShadow: '0px 0px 5px black',

    },
    container: {
        width: '100vw',
        margin: '15px auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

    }

}));

const Faqs = () => {
    const classes = useStyles();
    return (
        <>
            <Container vriant='body' className={classes.container}>
                <Typography vriant="body2" sx={{ alignItems: 'center' }}>
                    {"FAQs"}
                </Typography>
                <Box className={classes.Box}>
                    <div>What is Online Book Sales?<KeyboardArrowDownIcon /></div>
                </Box>

            </Container>
        </>
    )
}

export default Faqs
