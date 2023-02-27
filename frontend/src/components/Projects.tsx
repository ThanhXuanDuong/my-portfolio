import theme from "../theme/theme";
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Container, IconButton,
    ThemeProvider,
    Typography
} from "@mui/material";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

export default function Projects(){
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ width: "100%",
                bgcolor:"#212124",
                color:"#ffffff"
            }}>
                <Container>
                    <Typography variant="h1"  marginTop="2rem" marginBottom="4rem">
                        Projects
                    </Typography>

                    <Box sx={{ width: "100%"}}
                         display="flex"
                         justifyContent="space-evenly"
                         alignItems="center"
                         paddingBottom="5rem"
                         gap="2rem"
                         flexWrap="wrap"

                    >
                        <Card sx={{ width: "45%"}} >
                            <CardMedia
                                component="img"
                                image="/images/my-portfolio.png"
                                alt="my-portfolio"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    My Portfolio
                                </Typography>
                                <Typography variant="body2" color="text.secondary">

                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button variant="outlined" size="small">GitHub</Button>
                                <Button variant="contained" size="small">Demo</Button>
                            </CardActions>
                        </Card>

                        <Card sx={{ width: "45%"}}>
                            <CardMedia
                                component="img"
                                image="/images/capstone.png"
                                alt="capstone"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    medView
                                </Typography>
                                <Typography variant="body2" color="text.secondary">

                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button variant="outlined" size="small">GitHub</Button>
                                <Button variant="contained" size="small">Demo</Button>
                            </CardActions>
                        </Card>
                        <Card sx={{ width: "45%"}}>
                            <CardMedia
                                component="img"
                                height="300px"
                                image="/images/teamproject.png"
                                alt="teamproject"
                                sx={{backgroundColor:"black", objectFit:"scale-down"}}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Stray- Find your way
                                </Typography>
                                <Typography variant="body2" color="text.secondary">

                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button variant="outlined" size="small">GitHub</Button>
                                <Button variant="contained" size="small">Demo</Button>
                            </CardActions>
                        </Card>
                        <Card sx={{ width: "45%"}}>
                            <CardMedia
                                component="img"
                                image="/images/capstone.png"
                                alt="capstone"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Coming up...
                                </Typography>
                                <Typography variant="body2" color="text.secondary">

                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button variant="outlined" size="small">GitHub</Button>
                                <Button variant="contained" size="small">Demo</Button>
                            </CardActions>
                        </Card>

                    </Box>
                </Container>
            </Box>
        </ThemeProvider>
    )
}