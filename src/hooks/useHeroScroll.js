import { useRef, useEffect } from 'react'
import { useSpringValue } from '@react-spring/web'

export function useHeroScroll() {
  const heroRef = useRef(null)
  const scrollYProgress = useSpringValue(0)

  useEffect(() => {
    function handleScroll() {
      const hero = heroRef.current
      if (!hero) return
      const rect = hero.getBoundingClientRect()
      const windowH = window.innerHeight
      const scrollRange = rect.height - windowH
      if (scrollRange <= 0) return
      // progress 0 = hero top at viewport top; 1 = hero bottom at viewport bottom
      const progress = Math.max(0, Math.min(1, -rect.top / scrollRange))
      scrollYProgress.set(progress)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrollYProgress])

  return { heroRef, scrollYProgress }
}
