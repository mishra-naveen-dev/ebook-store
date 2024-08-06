import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import axios from 'axios';

function HomePage() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get('https://www.googleapis.com/books/v1/volumes?q=books')
            .then(response => {
                setBooks(response.data.items);
            })
            .catch(error => {
                console.error('There was an error fetching the books!', error);
            });
    }, []);

    return (
        <Container>
            <Typography variant="h2" gutterBottom>
                Welcome to the Bookstore
            </Typography>
            <Grid container spacing={3}>
                {books.map(book => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={book.id}>
                        <Typography variant="h6">{book.volumeInfo.title}</Typography>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default HomePage;
