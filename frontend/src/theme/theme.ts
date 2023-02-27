import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        background:{
            default: '#DDDCDB'
        },
        primary: {
            main: '#DDDCDB',
            contrastText:'#000000'
        },
        secondary: {
            main: '#613FE3',
            contrastText:'white'
        },

    },
});
export default theme;