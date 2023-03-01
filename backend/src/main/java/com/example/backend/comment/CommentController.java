package com.example.backend.comment;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/comments")
@RequiredArgsConstructor
public class CommentController {
    private final CommentService commentService;

    @PostMapping
    public Comment add(@RequestBody Comment comment){
        return commentService.add(comment);
    }

    @GetMapping("/project/{id}")
    public List<Comment> getAllByProjectId(@PathVariable String id){
        return commentService.getAllByProjectId(id);
    }
}
