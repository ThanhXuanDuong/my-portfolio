import {Box, Card, CardContent, Typography} from "@mui/material";
import Comment from "../types/Comment";

export default function CommentCard({comment}:{comment:Comment}){
    return (
        <Card  sx={{width:"60%", backgroundColor:"#D0CFCE", marginBottom:"1rem"}}>
            <CardContent>
                <Box display="flex">
                    <Typography sx={{ fontWeight: 'bold' }}>
                        {comment.writeBy}:
                    </Typography>
                    <Typography>
                        &nbsp;
                    </Typography>
                    <Typography>
                        {comment.text}
                    </Typography>
                </Box>
            </CardContent>

        </Card>
    )
}