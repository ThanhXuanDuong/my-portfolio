import {Box, Button, Stack, TextField, Typography} from "@mui/material";
import emailjs from '@emailjs/browser';
import {FormEvent, useRef} from "react";
export default function ContactForm(){
    console.log(process.env.REACT_APP_SERVICE_ID );

    const form = useRef<HTMLFormElement>(null)

    const sendEmail = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        form.current &&
        emailjs.sendForm(
            'service_hbvuvbt',
            'template_jud8c6e',
            form.current,
            'tGRMulOYU46TAmxsZ')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <Box display="flex"
             width="100%"
            flexDirection="column"
            justifyContent="center"
            alignItems="start"
            marginBottom="5rem"
        >
            <Typography variant="h6"
                        sx={{fontWeight: 'bold',
                            color:"primary.main",
                            marginBottom:"1rem",
                            textAlign:"start"
                        }}>
                Contact me
            </Typography>

            <form ref={form} onSubmit={sendEmail}>
                <Stack>
                    <TextField required
                               sx={{width: 500, mb: 2}}
                               id="fullname"
                               label={"Fullname"}
                               name="from_name"
                               variant="outlined"
                               size="medium"/>

                    <TextField required
                               sx={{width: 500, mb: 2}}
                               id="company"
                               label={"Company"}
                               name="from_company"
                               variant="outlined"
                               size="medium"/>

                    <TextField required
                               sx={{width: 500, mb: 2}}
                               type="email"
                               id="email"
                               label={"Email"}
                               name="from_email"
                               variant="outlined"
                               size="medium"/>

                    <TextField required
                               multiline
                               rows={10}
                               type="text"
                               sx={{width: 500, mb: 2}}
                               id="message"
                               label={"Message"}
                               name="message"
                               variant="outlined"
                               size="medium"/>

                    <Button type="submit"
                            variant="contained"
                            sx={{width:"10rem"}}
                    >Send</Button>
                </Stack>
            </form>
        </Box>
    )
}