import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        background:{
            default: '#DDDCDB'
        },
        primary: {
            main: '#613FE3',
            light:'#ece8f5',
            contrastText:'#ffffff'
        },
        secondary: {
            main: '#212124',
            contrastText:'#ffffff'
        },

    },
});
export default theme;