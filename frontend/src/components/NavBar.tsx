import * as React from 'react';
import {AppBar, Box, Button, ThemeProvider, Toolbar, Typography} from "@mui/material";
import theme from "../theme/theme";
import {useNavigate} from "react-router";

export default function NavBar() {
    const navigate = useNavigate();

    return (
        <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" sx={{opacity:"0.5"}}>
                <Toolbar sx={{backgroundColor:"secondary.main", color:"secondary.contrastText"}}>
                    <Typography variant="body2" component="div" sx={{ flexGrow: 1 }}>
                        WELCOME
                    </Typography>
                    <Button href="#Home" color="inherit" onClick={() => navigate("/")}>Home</Button>
                    <Button href="#About" color="inherit" onClick={() => navigate("/")}>About</Button>
                    <Button href="#Skills" color="inherit" onClick={() => navigate("/")}>Skills</Button>
                    <Button href="#Projects" color="inherit" onClick={() => navigate("/")}>Projects</Button>
                    <Button href="#Contact" color="inherit" onClick={() => navigate("/")}>Contact</Button>
                </Toolbar>
            </AppBar>
        </Box>
        </ThemeProvider>
    );
}