import * as React from 'react';
import {AppBar, Box, Button, ThemeProvider, Toolbar, Typography} from "@mui/material";
import theme from "../theme/theme";

export default function NavBar() {
    return (
        <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" sx={{opacity:"0.5"}}>
                <Toolbar sx={{backgroundColor:"secondary.main", color:"secondary.contrastText"}}>
                    <Typography variant="body2" component="div" sx={{ flexGrow: 1 }}>
                        WELCOME
                    </Typography>
                    <Button href="#Home" color="inherit">Home</Button>
                    <Button href="#About" color="inherit">About</Button>
                    <Button href="#Skills" color="inherit">Skills</Button>
                    <Button href="#Projects" color="inherit">Projects</Button>
                    <Button href="#Contact" color="inherit">Contact</Button>
                </Toolbar>
            </AppBar>
        </Box>
        </ThemeProvider>
    );
}