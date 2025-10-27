import React from 'react';

const ResearchSpotlight = ({ studies }) => {
  return (
    <div className="card-grid">
      {studies.map((study) => (
        <article key={study.title} className="card">
          <p className="timeline-period">{study.period}</p>
          <h3 style={{ fontSize: '1.3rem', fontWeight: 600, marginTop: '0.75rem' }}>{study.title}</h3>
          <p style={{ color: 'rgba(200, 203, 240, 0.8)', margin: '0.75rem 0 1.2rem' }}>{study.description}</p>
          <span className="badge">{study.venue}</span>
        </article>
      ))}
    </div>
  );
};

export default ResearchSpotlight;
