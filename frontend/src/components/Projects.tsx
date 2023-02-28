import theme from "../theme/theme";
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Container, Divider,
    ThemeProvider,
    Typography
} from "@mui/material";

export default function Projects(){
    return (
        <div id="Projects">
            <ThemeProvider theme={theme}>
                <Box sx={{ width: "100%",
                    bgcolor:"#212124",
                    color:"#ffffff"
                }}>
                    <Container>
                        <Typography variant="h1"
                                    paddingTop="100px"
                                    marginBottom="4rem">
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
                                    <Button href="https://github.com/ThanhXuanDuong/my-portfolio" variant="outlined" size="small">GitHub</Button>
                                    <Button variant="contained" size="small">Demo</Button>
                                </CardActions>
                            </Card>

                            <Card sx={{ width: "45%"}}>
                                <CardMedia
                                    component="img"
                                    image="/images/capstone.png"
                                    alt="capstone"
                                />
                                <Divider/>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        medView
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">

                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button href= "https://github.com/ThanhXuanDuong/capstone-project" variant="outlined" size="small">GitHub</Button>
                                    <Button variant="contained" size="small">Demo</Button>
                                </CardActions>
                            </Card>
                            <Card sx={{ width: "45%"}}>
                                <CardMedia
                                    component="img"
                                    image="/images/teamproject.png"
                                    alt="teamproject"
                                />
                                <Divider/>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Stray- Find your way
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">

                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button href="https://github.com/FullOfPit/Teamproject_Stray" variant="outlined" size="small">GitHub</Button>
                                    <Button variant="contained" size="small">Demo</Button>
                                </CardActions>
                            </Card>
                            <Card sx={{ width: "45%"}}>
                                <CardMedia
                                    component="img"
                                    image="/images/comingup.png"
                                    alt="comingup"
                                />
                                <Divider/>
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
        </div>
    )
}