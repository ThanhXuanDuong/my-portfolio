import {
    Box,
    Button,
    Card,
    CardMedia,
    Container,
    Grid,
    IconButton,
    Typography, useMediaQuery
} from "@mui/material";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import theme from "../theme/theme";

export default function About(){
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    return (
        <Box id="About"
            sx={{marginBottom:"5rem",
            width: "100%",
            minHeight:"100vh",
            bgcolor:"#212124",
            color:"#ffffff"}}>
            <Container>
                <Typography sx={{ typography: {xl:'h1',lg:'h1', md:'h2', sm: 'h3', xs: 'h3'}}}
                            paddingTop="100px"
                            marginBottom="4rem">
                    About
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xl={7} md={6} alignSelf="center">
                        <Card sx={{width: {xl: '100%', md: '90%',objectFit:"contain"}}}>
                            <CardMedia
                                component="img"
                                image="/images/profile1.jpg"
                                alt={"profile1"}
                            />
                        </Card>
                    </Grid>

                    <Grid item xl={5} md={6} alignSelf="center">
                        <Box display="flex"
                             flexDirection="column"
                             marginTop="2rem"
                             padding={matches? "2rem":"0"}
                             justifyContent="center"
                             alignItems="center"
                             gap="1rem"
                        >
                            <Typography sx={{typography: { xl: 'h6', md: 'body1',s:'body2'},
                                textAlign:"justify"
                            }}>
                                As a recent graduate in medical engineering,
                                I developed a keen interest in programming and
                                subsequently decided to shift my career path
                                towards the IT branch. Recently, I completed an
                                intensive Java full-stack developer bootcamp at Neue Fische.
                                With a passion for making things and an analytical,
                                logical mindset, I am confident in my ability to create innovative solutions
                                that not only have a positive impact but also generate prosperity for the enterprise.
                            </Typography>

                            <Box display="flex" gap="0.5rem" justifyContent="center" marginBottom="5rem">
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
                {matches &&
                    <Box textAlign="center">
                        <IconButton href="#Skills">
                            <KeyboardDoubleArrowDownIcon sx={{fontSize:"60px", color:"#ffffff"}}/>
                        </IconButton>
                    </Box>
                }

            </Container>
        </Box>
    )
}