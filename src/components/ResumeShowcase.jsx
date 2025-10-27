import React, { useEffect, useState } from 'react';
import { GlobalWorkerOptions, getDocument } from 'pdfjs-dist';
import pdfWorker from 'pdfjs-dist/build/pdf.worker.min.js?url';

GlobalWorkerOptions.workerSrc = pdfWorker;

const ResumeShowcase = ({ profile, achievements }) => {
  const [resumeImage, setResumeImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const loadResume = async () => {
      if (!profile.resumeUrl) {
        setLoading(false);
        setError('Add your resume PDF to public/ and set profile.resumeUrl to enable this preview.');
        return;
      }

      try {
        const pdf = await getDocument(profile.resumeUrl).promise;
        const page = await pdf.getPage(1);
        const viewport = page.getViewport({ scale: 1.1 });
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        await page.render({ canvasContext: context, viewport }).promise;

        if (isMounted) {
          setResumeImage(canvas.toDataURL('image/png'));
          setLoading(false);
        }
      } catch (err) {
        console.error(err);
        if (isMounted) {
          setError('Unable to load resume preview. Confirm the file exists at the configured path.');
          setLoading(false);
        }
      }
    };

    loadResume();

    return () => {
      isMounted = false;
    };
  }, [profile.resumeUrl]);

  return (
    <div className="resume-frame">
      <div>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 600 }}>A snapshot of {profile.name}</h3>
        <p style={{ color: 'rgba(200, 203, 240, 0.8)', marginTop: '1rem' }}>
          The resume artifact distills years of experience into a single glance. Explore highlighted achievements and download the
          latest copy instantly.
        </p>
        <ul style={{ marginTop: '1.5rem', listStyle: 'disc', marginLeft: '1.2rem', color: 'rgba(210, 215, 255, 0.85)', display: 'grid', gap: '0.65rem' }}>
          {achievements.map((achievement) => (
            <li key={achievement}>{achievement}</li>
          ))}
        </ul>
        <div className="resume-actions">
          {profile.resumeUrl ? (
            <a className="button" href={profile.resumeUrl} download>
              Download Resume
            </a>
          ) : (
            <button type="button" className="button disabled" disabled aria-disabled="true">
              Resume coming soon
            </button>
          )}
          <a className="button secondary" href="mailto:jumana.baharali@gmail.com">
            Book a Call
          </a>
        </div>
      </div>
      <div>
        {loading && <p style={{ color: 'rgba(200, 203, 240, 0.7)' }}>Rendering resume preview…</p>}
        {error && <p style={{ color: 'rgba(255, 155, 155, 0.9)' }}>{error}</p>}
        {!loading && !error && resumeImage && <img className="resume-canvas" src={resumeImage} alt={`${profile.name} resume preview`} />}
      </div>
    </div>
  );
};

export default ResumeShowcase;
