import React from 'react';

const AchievementMarquee = ({ achievements }) => {
  const duplicated = [...achievements, ...achievements];

  return (
    <section className="section" style={{ marginTop: '4rem', padding: '1.5rem 0' }}>
      <div className="marquee">
        <div className="marquee-track">
          {duplicated.map((achievement, index) => (
            <span
              key={`${achievement}-${index}`}
              style={{
                padding: '0.6rem 1.4rem',
                borderRadius: '999px',
                border: '1px solid rgba(120, 255, 224, 0.35)',
                background: 'rgba(18, 19, 36, 0.6)',
                color: 'rgba(200, 203, 240, 0.9)',
                fontSize: '0.85rem',
                whiteSpace: 'nowrap',
              }}
            >
              {achievement}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementMarquee;
