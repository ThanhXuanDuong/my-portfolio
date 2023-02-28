import theme from "../theme/theme";
import {
    Box,
    Container,
    ThemeProvider,
    Typography
} from "@mui/material";
import {useEffect, useState} from "react";
import axios from "axios";
import Project from "../types/Project";
import ProjectCard from "../components/ProjectCard";
import {useNavigate} from "react-router";

export default function Projects(){

    const [projects, setProjects]=useState<Project[]>([]);
    const navigate= useNavigate();

    useEffect(() =>{
        (async ()=>{
            const response = await axios.get("/api/projects")
            setProjects(response.data);
        })();
    },[])

    return (
        <div id="Projects">
            <ThemeProvider theme={theme}>
                <Box sx={{ width: "100%",
                    bgcolor:"#212124",
                    color:"#ffffff"
                }}>
                    <Container>
                        <Typography variant="h1"
                                    paddingTop="100px"
                                    marginBottom="4rem">
                            Projects
                        </Typography>

                        <Box sx={{ width: "100%"}}
                             display="flex"
                             justifyContent="space-evenly"
                             alignItems="center"
                             paddingBottom="5rem"
                             gap="2rem"
                             flexWrap="wrap"

                        >
                            {projects.length>0 &&
                                projects.map(project =>
                                    <ProjectCard project={project}
                                                 onDetail={(id) =>
                                                     navigate(`/projects/${id}`)}/>
                                )
                            }

                        </Box>
                    </Container>
                </Box>
            </ThemeProvider>
        </div>
    )
}