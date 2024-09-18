import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { FaqsStyles } from '../../Components/Footer/Styles';

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
            answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, atque rerum architecto ut porro dolorum dolores.',
        },
        {
            question: 'How does it work?',
            answer: 'Quaerat atque perspiciatis, animi, reiciendis nihil beatae quas sapiente at quos expedita corrupti ducimus.',
        },
        {
            question: 'How does it work?',
            answer: 'Quaerat atque perspiciatis, animi, reiciendis nihil beatae quas sapiente at quos expedita corrupti ducimus.',
        },
        {
            question: 'How does it work?',
            answer: 'Quaerat atque perspiciatis, animi, reiciendis nihil beatae quas sapiente at quos expedita corrupti ducimus.',
        },
        {
            question: 'How does it work?',
            answer: 'Quaerat atque perspiciatis, animi, reiciendis nihil beatae quas sapiente at quos expedita corrupti ducimus.',
        },
        {
            question: 'How does it work?',
            answer: 'Quaerat atque perspiciatis, animi, reiciendis nihil beatae quas sapiente at quos expedita corrupti ducimus.',
        },
        {
            question: 'How does it work?',
            answer: 'Quaerat atque perspiciatis, animi, reiciendis nihil beatae quas sapiente at quos expedita corrupti ducimus.',
        },
        {
            question: 'How does it work?',
            answer: 'Quaerat atque perspiciatis, animi, reiciendis nihil beatae quas sapiente at quos expedita corrupti ducimus.',
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
