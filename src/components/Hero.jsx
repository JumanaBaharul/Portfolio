import React from 'react';

const Hero = ({ profile }) => {
  return (
    <header className="section" style={{ marginTop: 0 }}>
      <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', alignItems: 'center' }}>
        <div>
          <p style={{ letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(120, 255, 224, 0.75)', fontSize: '0.8rem' }}>
            {profile.location}
          </p>
          <h1 style={{ fontFamily: 'DM Serif Display, serif', fontSize: '3.25rem', lineHeight: 1.1, marginTop: '0.75rem' }}>
            <span className="gradient-text">{profile.name}</span>
          </h1>
          <h2 style={{ fontWeight: 500, fontSize: '1.4rem', marginTop: '0.85rem', color: 'rgba(221, 227, 255, 0.85)' }}>
            {profile.role}
          </h2>
          <p style={{ marginTop: '1.5rem', color: 'rgba(200, 203, 240, 0.8)', fontSize: '1.05rem' }}>{profile.summary}</p>
          <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a className="button" href="#projects">Explore Work</a>
            <a className="button secondary" href="#resume">View Resume</a>
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <div
            style={{
              position: 'absolute',
              inset: '-20% 10% 10% 0',
              background: 'radial-gradient(circle, rgba(120, 255, 224, 0.22), transparent 65%)',
              filter: 'blur(40px)',
              zIndex: 0,
            }}
          />
          <div
            style={{
              borderRadius: '28px',
              border: '1px solid rgba(120, 255, 224, 0.35)',
              padding: '2rem',
              position: 'relative',
              zIndex: 1,
              background: 'rgba(15, 18, 36, 0.65)',
            }}
          >
            <p style={{ fontSize: '0.85rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(120, 255, 224, 0.65)', marginBottom: '0.75rem' }}>
              Signal Strength
            </p>
            <ul style={{ listStyle: 'none', display: 'grid', gap: '0.6rem', fontSize: '0.95rem' }}>
              <li>
                <span style={{ color: 'rgba(120, 255, 224, 0.75)' }}>Email:</span> {profile.contact.email}
              </li>
              <li>
                <span style={{ color: 'rgba(120, 255, 224, 0.75)' }}>Phone:</span> {profile.contact.phone}
              </li>
              <li>
                <span style={{ color: 'rgba(120, 255, 224, 0.75)' }}>GitHub:</span> <a href={profile.contact.github}>{profile.contact.github}</a>
              </li>
              <li>
                <span style={{ color: 'rgba(120, 255, 224, 0.75)' }}>LinkedIn:</span> <a href={profile.contact.linkedin}>{profile.contact.linkedin}</a>
              </li>
              <li>
                <span style={{ color: 'rgba(120, 255, 224, 0.75)' }}>Twitter:</span> <a href={profile.contact.twitter}>{profile.contact.twitter}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
