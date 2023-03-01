package com.example.backend.comment;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CommentService {
    private final CommentRepository commentRepository;

    public Comment add(Comment comment) {
        return commentRepository.save(comment);
    }

    public List<Comment> getAllByProjectId(String id) {
        return commentRepository.findAllByProjectId(id);
    }
}
