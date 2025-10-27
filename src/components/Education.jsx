import React from 'react';

const Education = ({ entries }) => {
  return (
    <div className="timeline">
      {entries.map((item) => (
        <article key={item.school} className="timeline-item">
          <p className="timeline-period">{item.period}</p>
          <h3 className="timeline-role">{item.program}</h3>
          <p className="timeline-company">{item.school}</p>
          {item.gpa && (
            <p style={{ color: 'rgba(200, 200, 255, 0.75)', fontSize: '0.95rem' }}>
              GPA: <strong>{item.gpa}</strong>
            </p>
          )}
        </article>
      ))}
    </div>
  );
};

export default Education;
