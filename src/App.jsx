import React from 'react';
import Hero from './components/Hero.jsx';
import Education from './components/Education.jsx';
import ExperienceTimeline from './components/ExperienceTimeline.jsx';
import ResearchSpotlight from './components/ResearchSpotlight.jsx';
import ProjectGrid from './components/ProjectGrid.jsx';
import SkillGalaxy from './components/SkillGalaxy.jsx';
import ResumeShowcase from './components/ResumeShowcase.jsx';
import AchievementMarquee from './components/AchievementMarquee.jsx';
import Footer from './components/Footer.jsx';
import { profile, education, experiences, research, projects, skills, achievements, timelines } from './data/content.js';

const App = () => {
  return (
    <div className="app-shell">
      <Hero profile={profile} />

      <section id="education" className="section">
        <h2 className="section-title gradient-text">Academic Trail</h2>
        <Education entries={education} />
      </section>

      <section id="experience" className="section">
        <h2 className="section-title gradient-text">Experience Constellation</h2>
        <ExperienceTimeline experiences={experiences} focusStats={timelines} />
      </section>

      <section id="research" className="section">
        <h2 className="section-title gradient-text">Research Spotlights</h2>
        <ResearchSpotlight studies={research} />
      </section>

      <section id="projects" className="section">
        <h2 className="section-title gradient-text">Signature Projects</h2>
        <ProjectGrid projects={projects} />
      </section>

      <section id="skills" className="section">
        <h2 className="section-title gradient-text">Skill Galaxy</h2>
        <SkillGalaxy skills={skills} />
      </section>

      <section id="resume" className="section">
        <h2 className="section-title gradient-text">Resume Artifact</h2>
        <ResumeShowcase profile={profile} achievements={achievements} />
      </section>

      <AchievementMarquee achievements={achievements} />

      <Footer profile={profile} />
    </div>
  );
};

export default App;
