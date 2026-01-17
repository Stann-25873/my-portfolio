import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Student Management System',
      description: 'A comprehensive system for managing student records, built with a focus on efficiency and user-friendly interface.',
      tech: 'Java, PostgreSQL, MVC',
      github: '#'
    },
    {
      title: 'Church Management System',
      description: 'A web application designed to streamline church operations and member management.',
      tech: 'PHP, Web App',
      github: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio showcasing projects and skills, built with modern web technologies.',
      tech: 'React, CSS',
      github: '#'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p className="tech">{project.tech}</p>
              <a href={project.github} className="github-button">GitHub</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
