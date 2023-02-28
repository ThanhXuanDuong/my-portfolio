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
        <Card sx={{ width: "45%"}} >
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
                        variant="outlined"
                        size="small">GitHub</Button>
                <Button variant="contained"
                        size="small"
                        onClick={() => onDetail(project.id)}>Details</Button>
            </CardActions>
        </Card>
    )
}