import { NavLink } from 'react-router-dom'
import ChemistryHero from '@/components/ChemistryHero/ChemistryHero'
import './Home.css'

export default function Home() {
  return (
    <>
      <ChemistryHero />

      <section className="home-intro">
        <div className="home-intro__container">
          <h2 className="home-intro__heading">Welcome</h2>
          <p className="home-intro__lead">
            Welcome to my e-portfolio. I am a dedicated educator who believes that every
            student has the ability to learn and succeed when given the right support,
            encouragement, and opportunities. This portfolio highlights my teaching
            journey, classroom experiences, and school initiatives.
          </p>

          <section className="home-block" aria-labelledby="philosophy-heading">
            <h3 id="philosophy-heading" className="home-block__title">
              Philosophy / Motto
            </h3>
            <blockquote className="home-philosophy">
              &ldquo;Every student is intelligent in different ways, and effective teaching begins
              with recognizing those differences.&rdquo;
            </blockquote>
            <p>
              I believe in the philosophy of multiple intelligences, where students learn, think,
              and express themselves differently. It is important for students to understand their
              strengths and weaknesses, while teachers create opportunities that allow every learner
              to grow and succeed using their individual abilities.
            </p>
          </section>

          <section className="home-block" aria-labelledby="about-preview-heading">
            <h3 id="about-preview-heading" className="home-block__title">
              About Me
            </h3>
            <p>
              From Jamaica to Randolph College and medicinal chemistry research at the University
              of Florida, my path led me to the classroom. Since 2019 I have taught Integrated
              Science, CXC and CAPE Chemistry, and Environmental Science at Montego Bay High School,
              with a BSc in Chemistry (Magna Cum Laude) and a Post-graduate Diploma in Education
              and Training. I bring laboratory rigor and clear explanation to every lesson.
            </p>
            <NavLink to="/about" className="home-about-link">
              Read my full story
            </NavLink>
          </section>

          <section className="home-block" aria-labelledby="interests-heading">
            <h3 id="interests-heading" className="home-block__title">
              Professional Interests
            </h3>
            <p>
              My professional interests are centered around science and STEM education,
              particularly in making STEM learning more accessible, engaging, and meaningful
              for students. I am interested in student-centered teaching practices and the
              philosophy of multiple intelligences, which recognizes that students learn and
              express understanding in different ways.
            </p>
            <p>
              I aspire to pursue a Master of Education in Science Education and contribute to
              Jamaica&apos;s wider goal of strengthening STEM education. I am especially interested
              in action research that explores STEM education from the perspectives of students,
              teachers, and policymakers in order to better understand the challenges and
              opportunities within the education system.
            </p>
          </section>
        </div>
      </section>
    </>
  )
}
