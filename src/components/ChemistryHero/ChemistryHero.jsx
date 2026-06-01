import { useHeroScroll } from '@/hooks/useHeroScroll'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import ParallaxLayer from './ParallaxLayer'
import { LAYERS } from './layers'
import './ChemistryHero.css'

export default function ChemistryHero() {
  const { heroRef, scrollYProgress } = useHeroScroll()
  const reducedMotion = useReducedMotion()

  return (
    <section className="chemistry-hero" ref={heroRef} aria-label="Hero section">
      <div className="sticky-stage">
        {LAYERS.map((layer) => (
          <ParallaxLayer
            key={layer.id}
            scrollYProgress={scrollYProgress}
            config={layer}
            reducedMotion={reducedMotion}
          />
        ))}

        <div className="hero-copy">
          <h1 className="hero-name">Ms. Williams</h1>
          <p className="hero-subtitle">Helping Students Find Clarity in Science</p>
          <p className="hero-scroll-prompt">
            Scroll to begin
            <span className="scroll-arrow" aria-hidden="true">↓</span>
          </p>
        </div>
      </div>
    </section>
  )
}
