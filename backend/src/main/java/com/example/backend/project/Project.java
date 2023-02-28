package com.example.backend.project;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Project {
    @Id
    private String id;
    private String name;
    private String imageId;
    private String shortDescription;
    private String detail;
    private String techStack;
    private String githubLink;
    private String videoLink;
    private String liveDemoLink;
}
