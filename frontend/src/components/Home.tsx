import {Box, Button, Container, IconButton, ThemeProvider, Typography} from "@mui/material";
import profile1 from "../profile1.jpg";
import theme from "../theme/theme";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Home(){
    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="md">
                <Box display="flex"
                     width="100%"
                     height="calc(100vh - 64px)"
                     justifyContent="center"
                     alignItems="center"
                >
                    <Box sx={{objectFit:"contain"}}>
                        <img src={profile1} alt={"profile1"} width="400"/>
                    </Box>
                    <Box display="flex"
                         flexDirection="column"
                         paddingLeft="2rem"
                    >
                        <Typography variant="h3">
                            Xuan Thanh Duong
                        </Typography>
                        <Typography variant="body1">
                            Hi, I am ...Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                        </Typography>

                        <Box>
                            <IconButton>
                                <GitHubIcon/>
                            </IconButton>
                            <IconButton>
                                <LinkedInIcon/>
                            </IconButton>
                        </Box>

                        <Button color="inherit"
                                sx={{backgroundColor:"black",
                                    color:"white",
                                    width:"8rem"
                        }}
                        >About me</Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    )
}