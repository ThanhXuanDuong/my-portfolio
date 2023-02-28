import {
    Box,
    Container,
    Grid,
    ThemeProvider,
    Typography
} from "@mui/material";
import theme from "../theme/theme";
import ContactForm from "./ContactForm";
import MyContact from "./MyContact";

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
                            <Grid item xl={5} md={6}>
                                <MyContact/>
                            </Grid>
                            <Grid item xl={7} md={6}>
                                <ContactForm/>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </ThemeProvider>
        </div>
    )
}