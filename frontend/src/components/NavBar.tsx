import * as React from 'react';
import {AppBar, Box, Button, ThemeProvider, Toolbar, Typography} from "@mui/material";
import theme from "../theme/theme";

export default function NavBar() {
    return (
        <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar sx={{backgroundColor:"secondary.main", color:"secondary.contrastText"}}>
                    <Typography variant="body2" component="div" sx={{ flexGrow: 1 }}>
                        WELCOME
                    </Typography>
                    <Button color="inherit">Home</Button>
                    <Button color="inherit">About</Button>
                    <Button color="inherit">Skills</Button>
                    <Button color="inherit">Projects</Button>
                    <Button color="inherit">Contact</Button>
                </Toolbar>
            </AppBar>
        </Box>
        </ThemeProvider>
    );
}