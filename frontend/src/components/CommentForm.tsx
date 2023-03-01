import {Button, Stack, TextField} from "@mui/material";
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
        <Stack>
            <TextField sx={{width: "60%", mb: 2}}
                       id="Name"
                       label={"Name"}
                       name="writeBy"
                       value={comment.writeBy}
                       variant="filled"
                       size="medium"
                       onChange={handleChange}
            />

            <TextField multiline
                       rows={5}
                       sx={{width: "60%", mb: 2}}
                       id="Comment"
                       label={"Comment"}
                       name="text"
                       value={comment.text}
                       variant="filled"
                       size="medium"
                       onChange={handleChange}
            />
            <Button variant="contained"
                    sx={{width:"5rem", marginBottom:"2rem"}}
                    onClick={() => onAdd(comment)}>Add</Button>
        </Stack>
    )
}