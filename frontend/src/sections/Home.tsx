import {Box, Button, Card, CardMedia, Container, Grid, IconButton, ThemeProvider, Typography} from "@mui/material";
import profile2 from "../profile2.jpg";
import theme from "../theme/theme";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

export default function Home(){

    return (
        <div id="Home">
            <ThemeProvider theme={theme}>
                <Container>
                    <Box display="flex"
                         width="100%"
                         flexDirection="column"
                         height="100vh"
                         sx={{marginTop: {xl: "5rem", md:"2rem"}}}
                         justifyContent="center"
                    >
                        <Grid container spacing={2}>
                            <Grid item xl={5} md={6} alignSelf="center">
                                <Box display="flex"
                                     flexDirection="column"
                                     paddingLeft="5rem"
                                     gap="1rem"
                                >
                                    <Typography sx={{typography: { xl: 'h1', md: 'h2' }}}>
                                        Hello,
                                    </Typography>
                                    <Typography sx={{typography: { xl: 'h4', md: 'h5' }}}>
                                        I'm Xuan Thanh Duong
                                    </Typography>

                                    <Box display="flex" gap="1rem">
                                        <IconButton sx={{backgroundColor:"primary.main"}}
                                                    href="https://github.com/ThanhXuanDuong"
                                        >
                                            <GitHubIcon sx={{color:"primary.contrastText"}}/>
                                        </IconButton>

                                        <IconButton sx={{backgroundColor:"primary.main"}}
                                                    href="https://www.linkedin.com/in/xuanthanhduong/"
                                        >
                                            <LinkedInIcon sx={{color:"primary.contrastText"}}/>
                                        </IconButton>

                                        <Button href="#About"
                                                variant="contained"
                                                sx={{width:"10rem"}}
                                        >About me</Button>
                                    </Box>


                                </Box>
                            </Grid>
                            <Grid item xl={7} md={6}>
                                <Card sx={{
                                    width: {xl: '100%', md: '80%'},
                                    borderRadius:"70% 30% 30% 70% / 60% 40% 60% 40%",
                                    objectFit:"contain"}}>
                                    <CardMedia
                                        component="img"
                                        image={profile2}
                                        alt={"profile2"}
                                    />
                                </Card>
                            </Grid>
                        </Grid>
                        <Box>
                            <IconButton href="#About">
                                <KeyboardDoubleArrowDownIcon sx={{fontSize:"60px"}}/>
                            </IconButton>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
        </div>
    )
}