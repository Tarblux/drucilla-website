import './About.css'

export default function About() {
  return (
    <div className="about-page">
      <div className="about-card">

        <div className="about-photo-panel">
          <img
            src="/images/about-me.webp"
            alt="Drucilla A. Williams"
            className="about-photo"
          />
        </div>

        <div className="about-divider" aria-hidden="true" />

        <div className="about-content">
          <h1 className="about-heading">
            My story<span className="about-heading-dot">.</span>
          </h1>

          <p className="about-body">
            Growing up in <strong>Jamaica</strong>, science was never just a subject. It was a lens for understanding
            the world. That curiosity led me to <strong>Randolph College</strong> in Virginia, where I graduated
            <strong> Magna Cum Laude</strong> with a <strong>Bachelor of Science in Chemistry</strong> (GPA 3.7), earning membership
            in <strong>Iota Sigma Pi</strong>, <strong>Sigma Xi</strong>, and <strong>Omicron Delta Kappa</strong> honor societies, along with the
            <strong> James Lewis Howe Award</strong> for outstanding senior achievement.
          </p>

          <p className="about-body">
            I went on to the <strong>University of Florida's College of Pharmacy</strong>, where I conducted
            <strong> medicinal chemistry research</strong>, synthesizing drug molecules and analyzing their
            structure-activity relationships using NMR, TLC, GC, HPLC, and FTIR. That
            laboratory grounding shapes how I teach: I want students to understand not just the
            formula, but the thinking behind it.
          </p>

          <p className="about-body">
            Since <strong>2019</strong>, I've been teaching <strong>Integrated Science</strong>, <strong>CXC and CAPE Chemistry</strong>, and
            <strong> Environmental Science</strong> at <strong>Montego Bay High School</strong> (Grades 7–13). I completed a
            <strong> Post-graduate Diploma in Education and Training</strong> in 2024, and have also taught
            CXC Chemistry online through <strong>Montego Bay E-Learning</strong>. <strong>Chemistry, explained clearly</strong>:
            that's the goal, every day.
          </p>

          <dl className="about-facts">
            <div className="about-fact">
              <dt>Current role</dt>
              <dd><strong>Chemistry, Environmental & Integrated Science Teacher</strong> at Montego Bay High School</dd>
            </div>
            <div className="about-fact">
              <dt>Qualifications</dt>
              <dd><strong>BSc Chemistry, Magna Cum Laude</strong>, Randolph College{' · '}<strong>PGDip Education</strong>, VTDI</dd>
            </div>
            <div className="about-fact">
              <dt>Location</dt>
              <dd><strong>Trelawny, Jamaica</strong></dd>
            </div>
          </dl>
        </div>

      </div>
    </div>
  )
}
