import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  { title: 'Project 1', description: 'Description of project 1' },
  { title: 'Project 2', description: 'Description of project 2' },
  { title: 'Project 3', description: 'Description of project 3' },
  { title: 'Project 4', description: 'Description of project 4' },
  { title: 'Project 5', description: 'Description of project 5' },
  { title: 'Project 6', description: 'Description of project 6' },
];

const Projects = () => (
  <div className="container">
    <div className="row">
      {projects.map((project, index) => (
        <div className="col-md-6" key={index}>
          <ProjectCard title={project.title} description={project.description} />
        </div>
      ))}
    </div>
  </div>
);

export default Projects;
