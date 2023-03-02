import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import Project from "../types/Project";

export default function ProjectCard({
    project,
    onDetail
}:{
    project:Project,
    onDetail: (id:string|undefined)=>void
}){
    return (
        <Card sx={{ width: {md:"45%", s:"80%"}}} >
            <CardMedia
                component="img"
                image={`/api/files/${project.imageId}`}
                alt={project.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {project.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {project.shortDescription}
                </Typography>
            </CardContent>
            <CardActions sx={{display:"flex", justifyContent:"center",alignItems:"center", gap:"1rem"}}>
                <Button href={project.githubLink}
                        target="_blank"
                        variant="outlined"
                        sx={{width:"7rem"}}>GitHub</Button>
                <Button variant="contained"
                        sx={{width:"7rem"}}
                        onClick={() => onDetail(project.id)}>Details</Button>
            </CardActions>
        </Card>
    )
}