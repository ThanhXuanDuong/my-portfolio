import {Box, Card, CardContent, Typography} from "@mui/material";
import Comment from "../types/Comment";

export default function CommentCard({comment}:{comment:Comment}){
    return (
        <Box width={{md:"60%", s:"100%"}}>
            <Card  sx={{backgroundColor:"#D0CFCE", marginBottom:"1rem"}}>
                <CardContent>
                    <Box display="flex" flexDirection="column">
                        <Typography sx={{ fontWeight: 'bold' }}>
                            {comment.writeBy}:
                        </Typography>
                        <Typography>
                            {comment.text}
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    )
}