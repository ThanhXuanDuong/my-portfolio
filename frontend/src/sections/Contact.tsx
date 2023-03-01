import {
    Box,
    Container,
    Grid,
    ThemeProvider,
    Typography
} from "@mui/material";
import theme from "../theme/theme";
import ContactForm from "../components/ContactForm";
import MyContact from "../components/MyContact";

export default function Contact(){
    return (
        <div id="Contact">
            <ThemeProvider theme={theme}>
                <Box sx={{ width: "100%",
                    height:"100vh"
                }}>
                    <Container>
                        <Typography variant="h1"
                                    paddingTop="100px"
                                    marginBottom="4rem">
                            Contact
                        </Typography>

                        <Grid container
                              spacing={2}
                              justifyContent = "center">
                            <Grid item xl={5.5} md={6} >
                                <MyContact/>
                            </Grid>
                            <Grid item xl={6.5} md={6} alignSelf="center">
                                <ContactForm/>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </ThemeProvider>
        </div>
    )
}