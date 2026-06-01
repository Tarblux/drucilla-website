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
            Growing up in Jamaica, science was never just a subject. It was a lens for understanding
            the world. That curiosity led me to Randolph College in Virginia, where I graduated
            Magna Cum Laude with a Bachelor of Science in Chemistry (GPA 3.7), earning membership
            in Iota Sigma Pi, Sigma Xi, and Omicron Delta Kappa honor societies, along with the
            James Lewis Howe Award for outstanding senior achievement.
          </p>

          <p className="about-body">
            I went on to the University of Florida's College of Pharmacy, where I conducted
            medicinal chemistry research, synthesizing drug molecules and analyzing their
            structure-activity relationships using NMR, TLC, GC, HPLC, and FTIR. That
            laboratory grounding shapes how I teach: I want students to understand not just the
            formula, but the thinking behind it.
          </p>

          <p className="about-body">
            Since 2019, I've been teaching Integrated Science, CXC and CAPE Chemistry, and
            Environmental Science at Montego Bay High School (Grades 7–13). I completed a
            Post-graduate Diploma in Education and Training in 2024, and have also taught
            CXC Chemistry online through Montego Bay E-Learning. Chemistry, explained clearly:
            that's the goal, every day.
          </p>

          <dl className="about-facts">
            <div className="about-fact">
              <dt>Current role</dt>
              <dd>Chemistry, Environmental & Integrated Science Teacher at Montego Bay High School</dd>
            </div>
            <div className="about-fact">
              <dt>Qualifications</dt>
              <dd>BSc Chemistry, Magna Cum Laude, Randolph College{' · '}PGDip Education, VTDI</dd>
            </div>
            <div className="about-fact">
              <dt>Location</dt>
              <dd>Trelawny, Jamaica</dd>
            </div>
          </dl>
        </div>

      </div>
    </div>
  )
}
