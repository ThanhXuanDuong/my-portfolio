package com.example.backend.project;

import com.example.backend.exception.NotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/projects")
@RequiredArgsConstructor
public class ProjectController {
    private final ProjectService projectService;

    @PostMapping
    private Project add(@RequestBody Project project){
        return projectService.add(project);
    }

    @GetMapping
    private List<Project> getAll(){
        return projectService.getAll();
    }

    @GetMapping("/{id}")
    private Project getById(@PathVariable String id) throws NotFoundException {
        return projectService.getById(id);
    }

}
