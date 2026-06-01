import { animated } from '@react-spring/web'

export default function ParallaxLayer({ scrollYProgress, config, reducedMotion }) {
  const { id, zIndex, maxY, width, style, placeholderColor, placeholderHeight, label, baseTransform } =
    config

  const transform = reducedMotion
    ? baseTransform || 'none'
    : scrollYProgress.to((p) => {
        const base = baseTransform ? ` ${baseTransform}` : ''
        return `translate3d(0, ${p * maxY}px, 0)${base}`
      })

  return (
    <animated.div
      className={`parallax-layer parallax-layer--${id}`}
      style={{
        position: 'absolute',
        zIndex,
        width,
        willChange: reducedMotion ? 'auto' : 'transform',
        transform,
        ...style,
      }}
      aria-hidden="true"
    >
      <div
        style={{
          width: '100%',
          height: placeholderHeight,
          backgroundColor: placeholderColor,
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '0.6rem',
          color: 'rgba(0,0,0,0.45)',
          opacity: 0.75,
          userSelect: 'none',
        }}
      >
        {label}
      </div>
    </animated.div>
  )
}
