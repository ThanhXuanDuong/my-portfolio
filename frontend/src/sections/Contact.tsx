import {
    Container,
    Grid,
    Typography
} from "@mui/material";
import ContactForm from "../components/ContactForm";
import MyContact from "../components/MyContact";

export default function Contact(){
    return (
        <Container id="Contact"
            sx={{ width: "100%",
            height:"100vh"
        }}>
            <Typography sx={{ typography: {xl:'h1',lg:'h1', md:'h2', sm: 'h3', xs: 'h3'}}}
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

    )
}