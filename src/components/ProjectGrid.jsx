import React from 'react';

const ProjectGrid = ({ projects }) => {
  return (
    <div className="card-grid">
      {projects.map((project) => (
        <article key={project.name} className="card">
          <h3 style={{ fontSize: '1.35rem', fontWeight: 600 }}>{project.name}</h3>
          <p style={{ color: 'rgba(200, 203, 240, 0.8)', margin: '0.85rem 0 1.25rem' }}>{project.description}</p>
          <div className="badge-list">
            {project.tags.map((tag) => (
              <span key={tag} className="badge">
                {tag}
              </span>
            ))}
          </div>
          <a
            href={project.link}
            className="button secondary"
            style={{ marginTop: '1.5rem', width: 'fit-content' }}
          >
            Visit Repository
          </a>
        </article>
      ))}
    </div>
  );
};

export default ProjectGrid;
