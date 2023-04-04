import {Box, IconButton, Stack, Typography, useMediaQuery} from "@mui/material";
import PlaceIcon from '@mui/icons-material/Place';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import theme from "../theme/theme";

export default function MyContact(){
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <Box display="flex"
             flexDirection="column"
             justifyContent="center"
             alignItems={matches? "center":"flex-start"}
             paddingTop={matches? "2rem":"0"}
             paddingLeft={matches?"0": "1rem"}
             gap="2rem"
        >
            <Box display="flex"
                 flexDirection={matches?"column":"row"}
                 justifyContent="center"
                 alignItems="center"
                 gap={matches?"0": "2rem"}
            >
                <IconButton disableRipple sx={{backgroundColor:"primary.main"}}>
                    <PlaceIcon sx={{color:"primary.contrastText"}}/>
                </IconButton>
                <Stack>
                    <Typography variant="body1"> Von-Moltke-Bogen 53</Typography>
                    <Typography variant="body1"> 21035 Hamburg</Typography>
                </Stack>
            </Box>

            <Box display="flex"
                 flexDirection={matches?"column":"row"}
                 justifyContent="center"
                 alignItems="center"
                 gap={matches?"0": "2rem"}
            >
                <IconButton disableRipple sx={{backgroundColor:"primary.main"}}>
                    <CallIcon sx={{color:"primary.contrastText"}}/>
                </IconButton>
                <Typography variant="body1"> +49-176-61874750</Typography>
            </Box>

            <Box display="flex"
                 flexDirection={matches?"column":"row"}
                 justifyContent="center"
                 alignItems="center"
                 gap={matches?"0": "2rem"}
            >
                <IconButton disableRipple sx={{backgroundColor:"primary.main"}}>
                    <MailIcon sx={{color:"primary.contrastText"}}/>
                </IconButton>
                <Typography variant="body1"> xuanthanhduong94@gmail.com</Typography>
            </Box>

            <Box display="flex"
                 flexDirection={matches?"column":"row"}
                 justifyContent="center"
                 alignItems="center"
                 gap={matches?"0": "2rem"}
            >
                <IconButton sx={{backgroundColor:"primary.main"}}
                            href="https://www.linkedin.com/in/xuanthanhduong/"
                            target="blank"
                >
                    <LinkedInIcon sx={{color:"primary.contrastText"}}/>
                </IconButton>
                <Typography variant="body1">xuanthanhduong</Typography>
            </Box>

            <Box display="flex"
                 flexDirection={matches?"column":"row"}
                 justifyContent="center"
                 alignItems="center"
                 marginBottom="2rem"
                 gap={matches?"0": "2rem"}
            >
                <IconButton sx={{backgroundColor:"primary.main"}}
                            href="https://github.com/ThanhXuanDuong"
                            target="blank"
                >
                    <GitHubIcon sx={{color:"primary.contrastText"}}/>
                </IconButton>
                <Typography variant="body1">ThanhXuanDuong</Typography>
            </Box>
        </Box>
    )
}