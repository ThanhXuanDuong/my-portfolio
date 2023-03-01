import {Container, Typography} from "@mui/material";
import CommentForm from "./CommentForm";
import Comment from "../types/Comment";
import CommentCard from "./CommentCard";

export default function CommentField({
    comment,
    comments,
    setComment,
    onAdd
}:{
    comment: Comment,
    comments:Comment[]
    setComment: (comment:Comment) => void,
    onAdd: (comment:Comment) => void
}){
    return (
        <Container>
            <Typography variant="h6"
                        sx={{ fontWeight: 'bold',
                            color:"primary.main",
                            marginBottom:"1rem"
                        }}>
                Leave your comments below. I appreciate every feedback!
            </Typography>

            <CommentForm comment={comment} setComment={setComment} onAdd={onAdd}/>

            <Typography variant="h6"
                        sx={{ fontWeight: 'bold',
                            color:"primary.main",
                            marginBottom:"1rem"
            }}>
                Comments
            </Typography>

            {comments.length >0
                ? comments.map(comment => <CommentCard key={comment.id} comment={comment}/>)
                :  <Typography>
                    No comment yet.
                 </Typography>
            }
        </Container>
    )
}