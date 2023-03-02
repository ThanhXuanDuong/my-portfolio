import {Box, Button, Card, CardMedia, Container, Grid, IconButton, ThemeProvider, Typography} from "@mui/material";
import theme from "../theme/theme";
import profile1 from "../profile1.jpg";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

export default function About(){
    return (
        <div id="About">
            <ThemeProvider theme={theme}>
                <Box sx={{ width: "100%",
                    minHeight:"100vh",
                    bgcolor:"#212124",
                    color:"#ffffff"
                }}>
                    <Container sx={{marginBottom:"5rem"}}>
                        <Typography variant="h1"
                                    paddingTop="100px"
                                    marginBottom="4rem">
                            About
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xl={7} md={6}>
                                <Card sx={{width: {xl: '100%', md: '90%' ,objectFit:"contain"}}}>
                                    <CardMedia
                                        component="img"
                                        image={profile1}
                                        alt={"profile1"}
                                    />
                                </Card>
                            </Grid>
                            <Grid item xl={5} md={6} alignSelf="center">
                                <Box display="flex"
                                     flexDirection="column"
                                     marginTop="2rem"
                                     padding="2rem"
                                     justifyContent="center"
                                     alignItems="center"
                                     gap="1rem"
                                >
                                    <Typography sx={{typography: { xl: 'h6', md: 'body1' },
                                        textAlign:"justify"}}>
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                        sed diam nonumy eirmod tempor invidunt ut.
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                        sed diam nonumy eirmod tempor invidunt ut
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                        sed diam nonumy eirmod tempor invidunt ut
                                    </Typography>

                                    <Box display="flex" gap="0.5rem" justifyContent="center">
                                        <Button href="#Skills"
                                                variant="contained"
                                                sx={{width:"10rem"}}
                                        >Skills</Button>

                                        <Button href="#Projects"
                                                variant="contained"
                                                sx={{width:"10rem"}}
                                        >Projects</Button>
                                    </Box>

                                </Box>
                            </Grid>
                        </Grid>
                        <Box textAlign="end">
                            <IconButton href="#Skills">
                                <KeyboardDoubleArrowDownIcon sx={{fontSize:"60px", color:"#ffffff"}}/>
                            </IconButton>
                        </Box>
                    </Container>
                </Box>
            </ThemeProvider>
        </div>
    )
}