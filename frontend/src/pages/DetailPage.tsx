
import {useParams} from "react-router";
import {useEffect, useState} from "react";
import Project from "../types/Project";
import axios from "axios";
import {CardMedia, Container, Typography} from "@mui/material";
import Comment from "../types/Comment";
import CommentField from "../components/CommentField";

export function DetailPage(){

    const initialProject = {
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

    const initialComment ={
            "writeBy":"",
            "text": "",
            "projectId":id
    };

    const [project, setProject] = useState<Project>(initialProject);
    const [comment, setComment] =useState<Comment>(initialComment);
    const [comments, setComments] =useState<Comment[]>([]);

    useEffect(() =>{
        (async ()=>{
            const response = await axios.get(`/api/projects/${id}`);
            setProject(response.data);

            const res = await axios.get(`/api/comments/project/${id}`);
            setComments(res.data.reverse());
        })();
    },[id])

    const onAdd= (comment:Comment)=>{
        (async ()=>{
            const response = await axios.post(`/api/comments`,comment)
            setComments([response.data,...comments]);
            setComment(initialComment);
        })();
    }

    return(
        <Container sx={{marginBottom:"5rem"}}>
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
            <Container sx={{textAlign:"center", marginBottom:"2rem"}}>
                {project.videoLink
                    ? <iframe width="80%" height="500" src={project.videoLink} title={project.name}></iframe>
                    : <CardMedia
                        component="img"
                        image={`/api/files/${project.imageId}`}
                        alt={project.name}/>
                }
            </Container>
            <Container sx={{marginBottom:"1rem"}}>
                <Typography variant="h6" sx={{ fontWeight: 'bold'}}>
                    Details
                </Typography>
                <Typography variant="body1">
                    {project.detail}
                </Typography>
            </Container>

            <Container sx={{marginBottom:"2rem"}}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    Technologies
                </Typography>
                <Typography variant="body1">
                    {project.techStack}
                </Typography>
            </Container>

            {comment.projectId &&
                <CommentField comment={comment}
                            comments={comments}
                            setComment={setComment}
                            onAdd={onAdd}/>
            }
        </Container>
    )
}