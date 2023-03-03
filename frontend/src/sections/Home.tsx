import {Box, Button, Card, CardMedia, Container, Grid, IconButton, Typography, useMediaQuery} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import theme from "../theme/theme";

export default function Home(){
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <Container id="Home">
            <Box display="flex"
                 width="100%"
                 flexDirection="column"
                 height="100vh"
                 sx={{marginTop: {xl: "5rem", md:"2rem"}}}
                 justifyContent="center"
                 flexWrap="wrap"
            >
                <Grid container
                      rowSpacing={8}
                      columnSpacing={2}
                      justifyContent="center">
                    <Grid item xl={6.5} md={6} alignSelf="center" left={0}>
                        <Box display="flex"
                             flexDirection="column"
                             paddingLeft="2rem"
                             gap="1rem"
                        >
                            <Typography sx={{ typography: {xl:'h1',lg:'h1', md:'h2', sm: 'h3', xs: 'h4'}}}>
                                Hi,
                            </Typography>
                            <Typography sx={{ typography: {xl:'h4',lg:'h5', md:'h6', sm: 'h6', xs: 'body1'}}}>
                                I'm Xuan Thanh Duong.
                            </Typography>
                            <Typography sx={{ typography: {xl:'h5',lg:'h6', md:'body1', sm: 'body1', xs: 'body2'},
                                        width:"80%",
                                        textAlign:"justify"
                            }}>
                                I'm medical engineer and on my way to become a professional fullstack developer.
                            </Typography>

                            <Box display="flex" gap="1rem">
                                <IconButton sx={{backgroundColor:"primary.main"}}
                                            href="https://github.com/ThanhXuanDuong"
                                            target="blank"
                                >
                                    <GitHubIcon sx={{color:"primary.contrastText"}}/>
                                </IconButton>

                                <IconButton sx={{backgroundColor:"primary.main"}}
                                            href="https://www.linkedin.com/in/xuanthanhduong/"
                                            target="blank"
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

                    <Grid item xl={5.5} md={6}>
                        <Card sx={{
                            maxWidth: {xl: '70vmin', lg:'70vmin', md:'50vmin', sm: '60vmin',xs:'70vmin'},
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
                {matches &&
                    <Box left={0}>
                        <IconButton href="#About">
                            <KeyboardDoubleArrowDownIcon sx={{fontSize:"60px"}}/>
                        </IconButton>
                    </Box>
                }

            </Box>
        </Container>

    )
}