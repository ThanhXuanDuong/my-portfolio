import {Box, IconButton, Typography} from "@mui/material";
import PlaceIcon from '@mui/icons-material/Place';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';

export default function MyContact(){
    return (
        <Box display="flex"
             flexDirection="column"
             justifyContent="center"
             alignItems="center"
             gap="4rem"
        >
            <Box display="flex"
                 flexDirection="column"
                 justifyContent="center"
                 alignItems="center">
                <IconButton sx={{backgroundColor:"primary.main"}}>
                    <PlaceIcon sx={{color:"primary.contrastText"}}/>
                </IconButton>
                <Typography variant="h6"> Von-Moltke-Bogen 53</Typography>
                <Typography variant="h6"> 21035 Hamburg</Typography>
            </Box>

            <Box display="flex"
                 flexDirection="column"
                 justifyContent="center"
                 alignItems="center">
                <IconButton sx={{backgroundColor:"primary.main"}}>
                    <CallIcon sx={{color:"primary.contrastText"}}/>
                </IconButton>
                <Typography variant="h6"> +49-176-61874750</Typography>
            </Box>

            <Box display="flex"
                 flexDirection="column"
                 justifyContent="center"
                 alignItems="center">
                <IconButton sx={{backgroundColor:"primary.main"}}>
                    <MailIcon sx={{color:"primary.contrastText"}}/>
                </IconButton>
                <Typography variant="h6"> xuanthanhduong94@gmail.com</Typography>
            </Box>
        </Box>
    )
}