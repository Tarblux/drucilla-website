import './Teaching.css'
import { teachingResources } from '@/data/teachingResources'
import { assetUrl } from '@/utils/assetUrl'

const visualLearningVideo = assetUrl('images/teaching/Visual-Learning.mp4')

export default function Teaching() {
  return (
    <div className="teaching-page">
      <div className="teaching-page__container">
        <h1 className="teaching-page__heading">Teaching &amp; Learning</h1>

        <p className="teaching-page__lead">
          <strong>
            I don&apos;t just see myself as a teacher. I&apos;m also a learner
          </strong>
          , constantly studying how best to support the students in my
          care. Every lesson, lab, and conversation gives me feedback on what works, what needs
          adjusting, and how different learners respond. That mindset of teach, reflect, refine
          runs through everything I build for the classroom.
        </p>

        <section className="teaching-approach-section" aria-labelledby="approach-heading">
          <h2 id="approach-heading" className="teaching-approach-section__title">
            My Approach
          </h2>
          <p className="teaching-approach-section__intro">
            Each resource I create serves a distinct purpose, but they all share the same goal:
            help students understand science deeply, build confidence, and see themselves as
            capable thinkers. Here&apos;s how that philosophy shows up across my materials.
          </p>

          <div className="teaching-approaches">
            <article className="teaching-approach">
              <h3 className="teaching-approach__title">Lesson Plans</h3>
              <p>
                Each unit is built around <strong>hands-on learning</strong> and the{' '}
                <strong>5E instructional model</strong>: Engage, Explore, Explain, Elaborate, and
                Evaluate. Rather than starting with a lecture and hoping it sticks, I open with a
                question or phenomenon that sparks curiosity, then give students time to investigate
                before we formalize concepts together. Labs, demonstrations, and collaborative
                activities are woven into every plan so students experience chemistry and
                environmental science, not just hear about them.
              </p>
            </article>

            <article className="teaching-approach">
              <h3 className="teaching-approach__title">Tests</h3>
              <p>
                Assessment shouldn&apos;t be a single gate. It should reveal what each student
                knows and where they still need support. My tests include{' '}
                <strong>varying levels of difficulty</strong>: foundational recall, applied
                problem-solving, and higher-order analysis. Multiple-choice, short answer, and
                structured responses let different strengths show through, while tiered questions
                help every learner demonstrate progress at their own level without being shut out
                by one difficult section.
              </p>
            </article>

            <article className="teaching-approach">
              <h3 className="teaching-approach__title">Projects</h3>
              <p>
                Projects are where <strong>theory meets practice</strong>. When students design
                experiments, investigate real environmental questions, or apply chemical principles
                to everyday problems, abstract ideas become tangible. I structure projects so
                students must plan, research, and justify their choices, building the same skills
                they&apos;ll need in further study and in the world beyond school. The goal is
                always to close the gap between what they read in a textbook and what they can
                actually do with that knowledge.
              </p>
            </article>

            <article className="teaching-approach">
              <h3 className="teaching-approach__title">PowerPoints</h3>
              <p>
                Slides are a teaching tool, not a script read aloud. My presentations are{' '}
                <strong>interactive and easy to follow</strong>: clear visuals, step-by-step
                explanations, embedded questions, and pauses built in for students to think,
                predict, and respond. Diagrams, worked examples, and summary checkpoints keep the
                pace manageable and give every student a visual anchor they can return to when
                revising at home.
              </p>
            </article>
          </div>
        </section>

        <section className="teaching-action-section" aria-labelledby="action-heading">
          <h2 id="action-heading" className="teaching-action-section__title">
            My Approach in Action
          </h2>

          <div className="teaching-action">
            <div className="teaching-action__video-wrap">
              <video
                src={visualLearningVideo}
                controls
                preload="metadata"
                className="teaching-action__video"
                aria-label="Classroom demonstration of a double-displacement precipitation reaction"
              />
              <p className="teaching-action__video-caption">
                Visually engaging students during a live chemistry demonstration.
              </p>
            </div>

            <div className="teaching-action__content">
              <p className="teaching-action__lead">
                In the video, I pour one clear solution into another while students watch. Within
                seconds, a bright yellow solid appears in the test tube. That visible change is
                lead(II) iodide forming right in front of them. I use moments like this to connect
                what they see in the lab to the equation on the board, so precipitation is not
                just a definition in their notes. It is something they can observe, predict, and
                explain.
              </p>

              <p>
                This is a <strong>double-displacement precipitation reaction</strong>. A solution
                of potassium iodide is mixed with lead(II) nitrate. The ions exchange partners,
                producing a bright yellow solid precipitate of lead(II) iodide.
              </p>

              <div className="teaching-equation-block">
                <h3 className="teaching-equation-block__label">Balanced molecular equation</h3>
                <p className="teaching-equation">
                  2KI<sub>(aq)</sub> + Pb(NO<sub>3</sub>)<sub>2(aq)</sub> → PbI<sub>2(s)</sub> + 2KNO<sub>3(aq)</sub>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="teaching-resources-section" aria-labelledby="resources-heading">
          <h2 id="resources-heading" className="teaching-resources-section__title">
            Lesson Plans &amp; Resources
          </h2>
          <p className="teaching-resources-section__intro">
            Browse selected lesson plans, presentations, and classroom materials. Links open in
            Google Drive or Google Docs.
          </p>

          <ul className="teaching-resources">
            {teachingResources.map((resource) => (
              <li key={resource.href}>
                <a
                  href={resource.href}
                  className="teaching-resource-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={resource.thumbnail}
                    alt=""
                    className="teaching-resource-link__thumb"
                    loading="lazy"
                  />
                  <div className="teaching-resource-link__body">
                    <span className="teaching-resource-link__title">{resource.title}</span>
                    <span
                      className="teaching-resource-link__type"
                      data-type={resource.type}
                    >
                      {resource.type}
                    </span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}
