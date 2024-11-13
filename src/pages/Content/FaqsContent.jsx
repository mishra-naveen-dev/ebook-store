import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { FaqsStyles } from '../../components/Styles/styles';

const useStyles = FaqsStyles;

const FaqItem = ({ question, answer, isExpanded, handleToggle }) => {
    const classes = useStyles();

    return (
        <Box className={classes.Box} onClick={handleToggle}>
            <div className={classes.faqdiv}>
                <div>{question}</div><div><KeyboardArrowDownIcon className={classes.keyicon} /></div>
            </div>
            <div className={`classes.content ${isExpanded ? classes.showContent : classes.content}`}>
                {answer}
            </div>
        </Box>
    );
};

const FaqsContent = () => {
    const [activeIndex, setActiveIndex] = useState(-1);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? -1 : index);
    };

    const faqs = [
        {
            question: 'What is Online Book Sales?',
            answer:
                'Online Book Sales is an e-commerce platform that offers a wide variety of books for purchase online. Our goal is to provide book lovers with a convenient way to browse and buy books from the comfort of their homes.',
        },
        {
            question: 'How do I register for an account?',
            answer:
              'To register for an account:\n\n1. Click on the \'Register\' button on the homepage.\n2. Fill in the required details such as your name, email, and password.\n3. Submit the registration form.\n',
          },
          {
            question: 'How do I log in to my account?',
            answer:
              'To log in:\n\n1. Click on the \'Login\' button on the homepage.\n2. Enter your registered email and password.\n3. Click \'Submit\' to access your account.',
          },
          {
            question: 'What types of books are available for purchase?',
            answer:
              'We offer a vast catalog of books across various genres, including:\n\n- Fiction\n- Non-fiction\n- Science Fiction\n- Romance\n- Mystery & Thriller\n- Biographies\n- Self-help\n- Children\'s Books\n- Academic & Educational Books',
          },
          {
            question: 'How do I add books to my shopping cart?',
            answer:
              'To add books to your shopping cart:\n\n1. Browse through our catalog and select the book you wish to purchase.\n2. Click on the \'Add to Cart\' button on the book\'s detail page.\n3. You can continue shopping or proceed to checkout.',
          },
          {
            question: 'How do I purchase the books in my shopping cart?',
            answer:
              'To purchase books:\n\n1. Go to your shopping cart by clicking the cart icon on the top right corner.\n2. Review the items in your cart.\n3. Click \'Checkout\' to proceed.\n4. Enter your shipping and payment details.\n5. Confirm your order to complete the purchase.',
          },
          {
            question: 'What payment methods are accepted?',
            answer:
              'We accept a variety of payment methods, including:\n\n- Credit/Debit Cards (Visa, MasterCard, American Express)\n- PayPal\n- Bank Transfers\n- Digital Wallets',
          },
          {
            question: 'How do I track my order?',
            answer:
              'To track your order:\n\n1. Log in to your account.\n2. Go to \'My Orders\' section.\n3. Select the order you want to track.\n4. You will find the tracking information and order status.',
          },
          {
            question: 'Can I cancel or modify my order?',
            answer:
              'To cancel or modify your order:\n\n1. Log in to your account.\n2. Go to \'My Orders\' section.\n3. Select the order you wish to cancel or modify.\n4. Click \'Cancel Order\' or \'Modify Order\' and follow the instructions.\n\nNote that cancellations and modifications may only be possible before the order is shipped.',
          },
          {
            question: 'How can I contact customer support?',
            answer:
              'For any queries or support:\n\n1. Visit the \'Contact Us\' page on our website.\n2. Fill out the contact form with your query.\n3. Our support team will get back to you within 24-48 hours.',
          },
    ];

    return (
        <>
            {faqs.map((faq, index) => (
                <FaqItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    isExpanded={activeIndex === index}
                    handleToggle={() => handleToggle(index)}
                />
            ))}
        </>
    );
};

export default FaqsContent;
