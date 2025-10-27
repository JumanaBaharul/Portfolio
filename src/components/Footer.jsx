import React from 'react';

const Footer = ({ profile }) => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>
        Crafted with React, Vite, and D3 · {profile.name} · © {year}
      </p>
      <div style={{ marginTop: '0.75rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <a href={profile.contact.github}>GitHub</a>
        <a href={profile.contact.linkedin}>LinkedIn</a>
        <a href={`mailto:${profile.contact.email}`}>Email</a>
      </div>
    </footer>
  );
};

export default Footer;
