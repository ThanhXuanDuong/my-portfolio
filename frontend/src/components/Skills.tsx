import {Box, Card, CardMedia, Container, IconButton, ThemeProvider, Typography} from "@mui/material";
import theme from "../theme/theme";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

export default function Skills(){
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ width: "100%",
                height:"100vh"
            }}>
                <Container>
                    <Typography variant="h1"  marginTop="2rem" marginBottom="4rem">
                        Skills
                    </Typography>
                    <Box sx={{display:"flex",
                        justifyContent:"space-between",
                        alignItems:"center",
                        gap:"2.5rem",
                        flexWrap:"wrap"
                    }}>
                        <Card sx={{objectFit:"contain", width:"15%", height:"20%"}}>
                            <CardMedia
                                component="img"
                                image="/images/java.jpeg"
                                alt="java"
                            />
                        </Card>
                        <Card sx={{objectFit:"contain",  width:"15%", height:"20%"}}>
                            <CardMedia
                                component="img"
                                image="/images/springboot.jpeg"
                                alt="springboot"
                            />
                        </Card>
                        <Card sx={{objectFit:"contain",  width:"15%", height:"20%"}}>
                            <CardMedia
                                component="img"
                                image="/images/mongodb.png"
                                alt="mongodb"
                            />
                        </Card>

                        <Card sx={{objectFit:"contain",  width:"15%", height:"20%", p:"0.5rem"}}>
                            <CardMedia
                                component="img"
                                image="/images/html.png"
                                alt="html"
                            />
                        </Card>

                        <Card sx={{objectFit:"contain",  width:"15%", height:"20%", p:"0.5rem"}}>
                            <CardMedia
                                component="img"
                                image="/images/css.png"
                                alt="css"
                            />
                        </Card>

                        <Card sx={{objectFit:"cover", width:"15%", height:"20%"}}>
                            <CardMedia
                                component="img"
                                image="/images/mui.png"
                                alt="mui"
                            />
                        </Card>

                        <Card sx={{objectFit:"contain",  width:"15%", height:"20%"}}>
                            <CardMedia
                                component="img"
                                image="/images/bootstrap.png"
                                alt="bootstrap"
                            />
                        </Card>
                        <Card sx={{objectFit:"contain", width:"15%", height:"20%",p:"0.5rem"}}>
                            <CardMedia
                                component="img"
                                image="/images/docker.png"
                                alt="docker"
                            />
                        </Card>

                        <Card sx={{objectFit:"fit",  width:"15%", height:"20%",p:"0.5rem"}}>
                            <CardMedia
                                component="img"
                                height="80%"
                                image="/images/react.svg"
                                alt="react"
                            />
                        </Card>

                        <Card sx={{objectFit:"cover", width:"15%", height:"20%"}}>
                            <CardMedia
                                component="img"
                                image="/images/typescript.svg"
                                alt="typescript"
                            />
                        </Card>

                        <Card sx={{objectFit:"contain", width:"15%", height:"15%",p:"0.5rem"}}>
                            <CardMedia
                                component="img"
                                image="/images/junit.jpeg"
                                alt="junit"
                            />
                        </Card>

                        <Card sx={{objectFit:"contain", width:"15%", height:"15%",p:"0.5rem"}}>
                            <CardMedia
                                component="img"
                                image="/images/git.png"
                                alt="git"
                            />
                        </Card>
                        <Card sx={{objectFit:"contain", width:"15%", height:"15%",p:"0.5rem"}}>
                            <CardMedia
                                component="img"
                                image="/images/github.png"
                                alt="github"
                            />
                        </Card>

                        <Card sx={{objectFit:"contain",width:"15%", height:"15%",p:"0.5rem"}}>
                            <CardMedia
                                component="img"
                                image="/images/sonarcloud.png"
                                alt="sonarcloud"
                            />
                        </Card>
                        <Card sx={{objectFit:"contain",width:"15%", height:"15%",p:"0.5rem"}}>
                            <CardMedia
                                component="img"
                                image="/images/flyio.jpg"
                                alt="flyio"
                            />
                        </Card>
                    </Box>
                </Container>
            </Box>
        </ThemeProvider>
    )
}