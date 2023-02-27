import {Box, Button, TextField} from "@mui/material";

export default function ContactForm(){
    return (
        <Box
            component="form"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            autoComplete="off"
        >
            <TextField required
                       sx={{width: 500, mb: 2}}
                       id="fullname"
                       label={"Fullname"}
                       name="fullname"
                       variant="outlined"
                       size="medium"/>
            <TextField required
                       sx={{width: 500, mb: 2}}
                       id="company"
                       label={"Company"}
                       name="company"
                       variant="outlined"
                       size="medium"/>
            <TextField required
                       sx={{width: 500, mb: 2}}
                       id="email"
                       label={"Email"}
                       name="email"
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
            <Button variant="contained" sx={{width:"10rem"}}>Send</Button>
        </Box>
    )
}