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
        fontSize: " medium !important",
        backgroundColor: '#3f51b5',
    },
    Text: {
        color: 'white',
        fontSize: '1rem !important',
        fontWeight: 'bold !important',
        marginBottom: '5px !important',
    },
    MarginTop: {
        marginTop: '15px !important',
    },
    MarginRight: {
        marginRight: '10px !important',
    }

}));


// Footer Content Style
export const AboutStyle = makeStyles((theme)=>({
    FooterBtn:{
        justifyContent: 'flex-start !important',
        color: 'white !important',
        fontSize: '1rem !important',
        textTransform: 'capitalize !important',
        transition:' .5s ease' ,
        padding: '6px 0px 0px 0px !important ',
        '&:hover ':{
        textDecoration: 'underline !important',
        color:'#FFD700 !important',
        transform: 'scale(1.15)',
    }
},
IconButton:{
    fontSize:' 2rem !important',
    padding: '6px 0px 0px 0px !important ',
    '&:hover':{
      color:'#FFD700 !important',
      transform: 'scale(1.15)',
  }}
}))