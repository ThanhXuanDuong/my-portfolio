
import {useParams} from "react-router";
import {useEffect, useState} from "react";
import Project from "../types/Project";
import axios from "axios";
import {CardMedia, Container, Typography} from "@mui/material";

export function DetailPage(){

    const initial = {
        "name":"",
        "imageId":"",
        "shortDescription":"",
        "detail":"",
        "techStack":"",
        "githubLink":"",
        "videoLink":"",
        "liveDemoLink":""

    }

    const {id} = useParams<{id:string}>();
    const [project, setProject] = useState<Project>(initial);

    useEffect(() =>{
        (async ()=>{
            const response = await axios.get(`/api/projects/${id}`)
            setProject(response.data);
        })();
    },[id])

    return(
        <Container>
            <Typography variant="h2"
                        paddingTop="100px"
                        marginBottom="1rem"
                        textAlign="center"
            >
                {project.name}
            </Typography>

            <Typography variant="h5"
                        marginBottom="2rem"
                        textAlign="center"
            >
                {project.shortDescription}
            </Typography>
            <Container sx={{textAlign:"center"}}>
                {project.videoLink
                    ? <iframe width="80%" height="500" src={project.videoLink}></iframe>
                    : <CardMedia
                        component="img"
                        image={`/api/files/${project.imageId}`}
                        alt={project.name}/>
                }
            </Container>

            <Typography variant="body1">
                Details: {project.detail}
            </Typography>

            <Typography variant="body1">
                Technologies: {project.detail}
            </Typography>

            <Typography variant="body1">
                Leave your comments below. I appreciate every feedback!
            </Typography>
        </Container>
    )
}