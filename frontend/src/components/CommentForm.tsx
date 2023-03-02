import {Box, Button, Grid, TextField} from "@mui/material";
import {ChangeEvent} from "react";
import Comment from "../types/Comment";

export default function CommentForm({
    comment,
    setComment,
    onAdd
}:{
    comment: Comment,
    setComment: (comment:Comment) => void
    onAdd: (comment:Comment) => void
}){
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setComment({
            ...comment,
            [event.target.name]: event.target.value
        });
    };
    console.log(comment);
    return (
        <Box width={{md:"60%", s:"100%"}}>
        <Grid>
            <TextField required
                       fullWidth
                       sx={{mb:"2"}}
                       id="Name"
                       label={"Name"}
                       name="writeBy"
                       helperText="Name is required"
                       value={comment.writeBy}
                       variant="filled"
                       size="medium"
                       onChange={handleChange}
            />

            <TextField required
                       multiline
                       rows={5}
                       fullWidth
                       sx={{mb:"2"}}
                       id="Comment"
                       label={"Comment"}
                       name="text"
                       helperText="Comment is required"
                       value={comment.text}
                       variant="filled"
                       size="medium"
                       onChange={handleChange}
            />
            <Button variant="contained"
                    sx={{width:"5rem", marginBottom:"2rem"}}
                    onClick={() => onAdd(comment)}>Add</Button>
        </Grid>
        </Box>
    )
}