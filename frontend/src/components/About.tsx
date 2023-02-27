import {Box, Container, ThemeProvider, Typography} from "@mui/material";
import theme from "../theme/theme";
import profile2 from "../profile2.jpg";

export default function About(){
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ width: "100%",
                height:"100vh",
                bgcolor:"black",
                color:"white"
            }}>
                <Container maxWidth="md">
                    <Typography variant="h3" marginBottom="3rem">
                        About
                    </Typography>
                    <Box >
                        <img src={profile2}
                             alt={"profile2"}
                             width="300"
                             height="400"
                             style={{objectFit:"cover"}}/>
                    </Box>
                </Container>
            </Box>
        </ThemeProvider>
    )
}