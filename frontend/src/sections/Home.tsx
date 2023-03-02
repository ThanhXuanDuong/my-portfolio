import {Box, Button, Card, CardMedia, Container, Grid, IconButton, Typography} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

export default function Home(){

    return (
        <Container id="Home">
            <Box display="flex"
                 width="100%"
                 flexDirection="column"
                 height="100vh"
                 sx={{marginTop: {xl: "5rem", md:"2rem"}}}
                 justifyContent="center"
                 alignItems="center"
                 flexWrap="wrap"
            >
                <Grid container spacing={2}>
                    <Grid item xl={5} md={6} alignSelf="center">
                        <Box display="flex"
                             flexDirection="column"
                             paddingLeft="5rem"
                             gap="1rem"
                        >
                            <Typography sx={{ typography: {xl:'h1',lg:'h1', md:'h2', sm: 'h3', xs: 'h3'}}}>
                                Hi,
                            </Typography>
                            <Typography sx={{ typography: {xl:'h4',lg:'h4', md:'h5', sm: 'h6', xs: 'body1'}}}>
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
                                        sx={{width:"8rem"}}
                                >About me</Button>
                            </Box>


                        </Box>
                    </Grid>
                    <Grid item xl={7} md={6} >
                        <Card sx={{
                            width: {xl: '100%', lg:'80%', md:'80%', sm: '80%',xs:'80%'},
                            borderRadius:"70% 30% 30% 70% / 60% 40% 60% 40%",
                            margin:'0',
                            objectFit:"contain"}}>
                            <CardMedia
                                component="img"
                                image="/images/profile2.jpg"
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

    )
}