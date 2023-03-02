import {Box, Button, Grid, TextField, Typography} from "@mui/material";
import emailjs from '@emailjs/browser';
import {FormEvent, useRef} from "react";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function ContactForm(){
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
                form.current?.reset();
                console.log(result.text);
                toast.success("Your email was send!");
            }, (error) => {
                console.log(error.text);
                toast.error("Error while sending email!");
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
            <Typography variant="h5"
                        sx={{fontWeight: 'bold',
                            color:"primary.main",
                            marginBottom:"1rem",
                            textAlign:"start"
                        }}>
                Contact me
            </Typography>

            <form ref={form} onSubmit={sendEmail}>
                <Grid>
                    <TextField required
                               fullWidth
                               id="fullname"
                               label={"Full name"}
                               name="from_name"
                               helperText="Name is required"
                               variant="filled"
                               size="medium"
                               sx={{mb:2}}
                    />

                    <TextField required
                               fullWidth
                               type="email"
                               id="email"
                               label={"Email"}
                               helperText="Email is required"
                               name="from_email"
                               variant="filled"
                               size="medium"
                               sx={{mb:2}}
                    />

                    <TextField fullWidth
                               id="company"
                               label={"Company (optional)"}
                               name="from_company"
                               variant="filled"
                               size="medium"
                               sx={{mb:2}}
                    />

                    <TextField required
                               multiline
                               rows={10}
                               type="text"
                               fullWidth
                               id="message"
                               label={"Message"}
                               name="message"
                               helperText="Message is required"
                               variant="filled"
                               size="medium"
                               sx={{mb:2}}
                    />

                    <Button type="submit"
                            variant="contained"
                            sx={{width:"10rem"}}
                    >Send</Button>
                </Grid>
            </form>
            <ToastContainer position="bottom-left"
                            autoClose={3000}
                            hideProgressBar={false}
                            newestOnTop={true}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="colored"/>
        </Box>
    )
}