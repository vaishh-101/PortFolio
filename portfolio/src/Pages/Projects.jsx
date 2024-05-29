import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'The Dream Mom',
    description: 'An app using React Native and Node.js with MongoDB for personalized health recommendations.',
    duration: '02/2024 - Present',
  },
  {
    title: 'Integration of Node.js, Alexa, and SAP B1 API',
    description: 'Engineered an integration to provide insights leveraging data from SAP B1.',
    duration: '12/2023 - 01/2024',
  },
  {
    title: 'PowerBi type Dashboard',
    description: 'Data visualization with interactive React.js dashboards.',
    duration: '05/2023 - 09/2023',
  },
  {
    title: 'Online Pet Shop',
    description: 'Launched a pet product shopping app with a user-friendly interface.',
    duration: '10/2023 - 12/2023',
  },
  {
    title: 'Coding Tube',
    description: 'Built a MERN-based app curating YouTube videos.',
    link: 'https://codecode101.onrender.com/',
  },
];

const Projects = () => {
  return (
    <div className="container">
      <h1>Projects</h1>
      <div className="card-grid">
        {projects.map((project, index) => (
          <div className="card" key={index}>
            <h2 className="card-title">{project.title}</h2>
            <p className="card-description">{project.description}</p>
            {project.duration && <p className="card-duration">Duration: {project.duration}</p>}
            {project.link && (
              <p>
                Link: <a className="card-link" href={project.link} target="_blank" rel="noopener noreferrer">{project.link}</a>
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
