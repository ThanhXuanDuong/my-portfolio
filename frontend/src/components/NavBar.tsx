import * as React from 'react';
import {AppBar, Box, Button, Divider, Toolbar, Typography} from "@mui/material";

export default function NavBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="body2" component="div" sx={{ flexGrow: 1 }}>
                        WELCOME
                    </Typography>
                    <Button color="inherit">Home</Button>
                    <Divider orientation="vertical" variant="middle" flexItem />
                    <Button color="inherit">About</Button>
                    <Divider orientation="vertical" variant="middle" flexItem />
                    <Button color="inherit">Skills</Button>
                    <Divider orientation="vertical" variant="middle" flexItem />
                    <Button color="inherit">Projects</Button>
                    <Divider orientation="vertical" variant="middle" flexItem />
                    <Button color="inherit">Contact</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}