import {
    Box,
    Button,
    Container,
    FormControl,
    FormLabel,
    Grid,
    TextField,
    ThemeProvider,
    Typography
} from "@mui/material";
import theme from "../theme/theme";
import ContactForm from "./ContactForm";
import MyContact from "./MyContact";

export default function Contact(){
    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Typography variant="h1"
                            marginTop="2rem"
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
        </ThemeProvider>
    )
}