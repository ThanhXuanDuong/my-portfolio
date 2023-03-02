import {Box, Card, CardMedia, Container,Typography} from "@mui/material";

export default function Skills(){

    return (
        <Container id="Skills"
            sx={{ width: "100%",
            minHeight:"100vh",
            marginBottom:"5rem"
        }}>
            <Typography sx={{ typography: {xl:'h1',lg:'h1', md:'h2', sm: 'h3', xs: 'h3'}}}
                        paddingTop="100px"
                        marginBottom="4rem">
                Skills
            </Typography>
            <Box sx={{display:"flex",
                width: "100%",
                justifyContent:"space-around",
                alignItems:"center",
                gap:"2.5rem",
                flexWrap:"wrap"
            }}>
                <Card sx={{objectFit:"contain", width:"15%", height:"15%", p:"0.5em"}}>
                    <CardMedia
                        component="img"
                        image="/images/java.jpeg"
                        alt="java"
                    />
                </Card>
                <Card sx={{objectFit:"contain",  width:"15%", height:"15%",p:"0.5em"}}>
                    <CardMedia
                        component="img"
                        image="/images/springboot.jpeg"
                        alt="springboot"
                    />
                </Card>
                <Card sx={{objectFit:"contain",  width:"15%", height:"15%", p:"0.5em"}}>
                    <CardMedia
                        component="img"
                        image="/images/mongodb.png"
                        alt="mongodb"
                    />
                </Card>

                <Card sx={{objectFit:"contain",  width:"15%", height:"15%", p:"0.5em"}}>
                    <CardMedia
                        component="img"
                        image="/images/html.png"
                        alt="html"
                    />
                </Card>

                <Card sx={{objectFit:"contain", width:"15%", height:"15%", p:"0.5em"}}>
                    <CardMedia
                        component="img"
                        image="/images/css.png"
                        alt="css"
                    />
                </Card>

                <Card sx={{objectFit:"contain", width:"15%", height:"15%", p:"0.5em"}}>
                    <CardMedia
                        component="img"
                        image="/images/mui.png"
                        alt="mui"
                    />
                </Card>

                <Card sx={{objectFit:"contain",  width:"15%", height:"15%",p:"0.5em"}}>
                    <CardMedia
                        component="img"
                        image="/images/bootstrap.png"
                        alt="bootstrap"
                    />
                </Card>
                <Card sx={{objectFit:"contain", width:"15%", height:"15%",p:"0.5em"}}>
                    <CardMedia
                        component="img"
                        image="/images/docker.png"
                        alt="docker"
                    />
                </Card>

                <Card sx={{objectFit:"contain",  width:"15%", height:"15%",p:"0.5em"}}>
                    <CardMedia
                        component="img"
                        image="/images/react.png"
                        alt="react"
                    />
                </Card>

                <Card sx={{objectFit:"contain",width:"15%", height:"15%",p:"0.5em"}}>
                    <CardMedia
                        component="img"
                        image="/images/typescript.svg"
                        alt="typescript"
                    />
                </Card>

                <Card sx={{objectFit:"contain", width:"15%", height:"10vmin",p:"0.5em"}}>
                    <CardMedia
                        component="img"
                        image="/images/junit.png"
                        alt="junit"
                    />
                </Card>

                <Card sx={{objectFit:"contain", width:"15%", height:"10vmin",p:"0.5em"}}>
                    <CardMedia
                        component="img"
                        image="/images/git.png"
                        alt="git"
                    />
                </Card>
                <Card sx={{objectFit:"contain", width:"15%", height:"10vmin",p:"0.5em"}}>
                    <CardMedia
                        component="img"
                        image="/images/github.png"
                        alt="github"
                    />
                </Card>

                <Card sx={{objectFit:"contain",width:"15%", height:"10vmin",p:"0.5em"}}>
                    <CardMedia
                        component="img"
                        image="/images/sonarcloud.png"
                        alt="sonarcloud"
                    />
                </Card>
                <Card sx={{objectFit:"contain",width:"15%", height:"10vmin",p:"0.5em"}}>
                        <CardMedia
                            component="img"
                            image="/images/flyio.jpg"
                            alt="flyio"
                        />
                </Card>
            </Box>
        </Container>
    )
}