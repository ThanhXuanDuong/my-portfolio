import {CssBaseline, ThemeProvider} from "@mui/material";
import theme from "../theme/theme";
import NavBar from "../components/NavBar";
import React from "react";
import {Route, Routes} from "react-router";
import HomePage from "./HomePage";
import {DetailPage} from "./DetailPage";

export default function Root(){
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <NavBar/>
            <Routes>
                <Route path={"/"} element={
                    <HomePage />
                }/>

                <Route path={"/projects/:id"} element={
                    <DetailPage />
                }/>
            </Routes>
        </ThemeProvider>

    )
}