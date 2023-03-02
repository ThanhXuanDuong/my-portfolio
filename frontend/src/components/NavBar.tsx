import * as React from 'react';
import {AppBar, Box, Button, ThemeProvider, Toolbar, Typography, useMediaQuery, useTheme} from "@mui/material";
import {useNavigate} from "react-router";
import MenuListButton from "./MenuListButton";

export default function NavBar() {
    const navigate = useNavigate();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" sx={{opacity:"0.8"}}>
                <Toolbar sx={{backgroundColor:"secondary.main", color:"secondary.contrastText"}}>
                    <Typography variant="body2" component="div" sx={{ flexGrow: 1 }}>
                        WELCOME
                    </Typography>
                    {matches
                        ? <>
                        <Button href="#Home" color="inherit" onClick={() => navigate("/")}>Home</Button>
                        <Button href="#About" color="inherit" onClick={() => navigate("/")}>About</Button>
                        <Button href="#Skills" color="inherit" onClick={() => navigate("/")}>Skills</Button>
                        <Button href="#Projects" color="inherit" onClick={() => navigate("/")}>Projects</Button>
                        <Button href="#Contact" color="inherit" onClick={() => navigate("/")}>Contact</Button>
                        </>

                       : <MenuListButton/>}
                </Toolbar>
            </AppBar>
        </Box>
        </ThemeProvider>
    );
}