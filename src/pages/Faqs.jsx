import React from 'react'
import { Typography, Container, } from "@material-ui/core";
import FaqsContent from './Content/FaqsContent';
import { FaqsStyles } from '../Components/Styles/Styles';

const useStyles = FaqsStyles

const Faqs = () => {
    const classes = useStyles();

    return (
        <>
            <Container vriant='body' className={classes.container}>
                <Typography vriant="body2" sx={{ alignItems: 'center' }}>
                    {"FAQs"}
                </Typography>

                <FaqsContent />

            </Container>
        </>
    )
}

export default Faqs
