package com.example.backend.project;

import com.example.backend.exception.NotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProjectService {
    private final ProjectRepository projectRepository;

    public Project add(Project project) {
        return projectRepository.save(project);
    }

    public List<Project> getAll() {
        return projectRepository.findAll();
    }

    public Project getById(String id) throws NotFoundException {
        return projectRepository
                .findById(id)
                .orElseThrow(NotFoundException::new);
    }
}
