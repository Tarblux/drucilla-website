import ChemistryHero from '@/components/ChemistryHero/ChemistryHero'
import './Home.css'

export default function Home() {
  return (
    <>
      <ChemistryHero />

      <section className="home-intro">
        <div className="home-intro__container">
          <h2>Welcome</h2>
          <p>
            Welcome to my e-portfolio. I am a dedicated educator who believes that every
            student has the ability to learn and succeed when given the right support,
            encouragement, and opportunities. This portfolio highlights my teaching
            journey, classroom experiences, and school initiatives.
          </p>
          <blockquote className="home-philosophy">
            "Every student is intelligent in different ways, and effective teaching begins
            with recognizing those differences."
          </blockquote>
        </div>
      </section>
    </>
  )
}
