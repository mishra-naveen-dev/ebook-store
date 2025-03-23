import { makeStyles } from "@material-ui/core/styles";

//Footer Style Sheet
export const FooterStyles = makeStyles((theme) => ({
    Footer: {
        padding: '1rem',
        maxWidth: '100vw',
        position: 'relative',
        left: '0',
        right: '0',
        bottom: '0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: "center",
        flexDirection: "column",
        fontSize: " medium ",
        backgroundColor: '#3f51b5',
        color: 'white'
    },
    Text: {
        color: 'white',
        fontSize: '1rem ',
        fontWeight: 'bold ',
        marginBottom: '5px ',
    },
    MarginTop: {
        marginTop: '15px ',
    },
    MarginRight: {
        marginRight: '10px ',
    }

}));


// Footer Content Style
export const AboutStyle = makeStyles((theme) => ({
    FooterBtn: {
        justifyContent: 'flex-start ',
        color: 'white ',
        fontSize: '1rem ',
        textTransform: 'capitalize ',
        transition: ' .5s ease',
        padding: '6px 0px 0px 0px  ',
        '&:hover ': {
            textDecoration: 'underline ',
            color: '#FFD700 ',
            transform: 'scale(1.15)',
        }
    },
    IconButton: {
        fontSize: ' 2rem ',
        padding: '6px 0px 0px 0px  ',
        '&:hover': {
            color: '#FFD700 ',
            transform: 'scale(1.15)',
        }
    }
}))



//Faqs page Styling 
export const FaqsStyles = makeStyles((themes) => ({
    Box: {
        width: '75%',
        borderRadius: '5px',
        backgroundColor: '#F4F4F4',
        padding: '10px 20px',
        margin: '10px 0'

    },
    container: {
        width: '100vw',
        margin: '15px auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

    },
    content: {
        display: 'none',
    },
    showContent: {
        display: 'block',
        padding: ' 10px 0'
    },
    keyicon: {
        position: 'relative',
        right: '10px',
    },
    faqdiv: {
        display: 'flex',
        justifyContent: 'space-between',
    }

}));