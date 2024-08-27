import React from 'react'
import { Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    MainBox: {
        border: '2px solid transparent',
        borderRadius: '2%',
        background: '#eeeeee',
        boxShadow: '1px  1px  5px  black',
        margin: '2rem auto',
        width: '60vw',
        hight: '70vh',
        padding: '15px  ',
        [theme.breakpoints.down('sm')]: {
            margin: '10px auto',
            width: '90vw'
        },

    },
    About: {
        textAlign: 'center',
        paddingTop: '20px',
        fontWeight: 'bolder',
    },
    container: {
        padding: '10px',
        fontWeight: '200',
    },
    container1: {
        padding: '10px',
        fontWeight: '200',
    },



}));

const AboutUs = () => {
    const classes = useStyles();

    return (
        <>
            <Container className={classes.MainBox}  >
                <Typography variant="h4" className={classes.About} align="center" >
                    {'About Us'}
                </Typography>


                <div className={classes.container} >
                    Online Book Sales is an e-commerce platform dedicated to providing book lovers with a convenient way to browse and purchase a wide variety of books online. Our goal is to offer an extensive catalog of books across various genres, including Fiction, Non-fiction, Science Fiction, Romance, Mystery & Thriller, Biographies, Self-help, Children's Books, and Academic & Educational Books.
                </div>
                <div className={classes.container} >
                    At Online Book Sales, we prioritize customer satisfaction and aim to provide a seamless shopping experience. From browsing our curated catalog to securely checking out and tracking your order, we ensure that your journey with us is enjoyable and hassle-free.
                </div>
                <div className={classes.container} >
                    Our team is dedicated to maintaining high standards of service and reliability. Should you have any questions or need assistance, our customer support team is readily available to help. Visit our FAQ page for answers to common queries or reach out to us directly through our Contact Us page.
                </div>
                <div className={classes.container}>
                    Thank you for choosing Online Book Sales. Happy reading!
                </div>

                <Typography variant="h5" className={classes.About} align="center" >
                    {'Our Mission'}
                </Typography>


                <div className={classes.container1} >
                    Our mission is to make reading accessible and enjoyable for everyone by offering a seamless online shopping experience for books of all kinds. We aim to connect readers with their favorite authors and discover new books that inspire and entertain.
                </div>

                <Typography variant="h5" className={classes.About} align="center" >
                    {'Contact Us'}
                </Typography>

                <div className={classes.container1} >
                    For any inquiries, suggestions, or support, please visit our {<Link to='/contect'>  Contact Us  </Link>} page. Our dedicated support team is available to assist you.
                </div>
            </Container>
        </>
    )
}

export default AboutUs;
