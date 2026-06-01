import { useCallback, useEffect, useState } from 'react'
import './GalleryWave.css'

const HOVER_ZONES = 9

export default function GalleryWave({ images, label = 'Gallery' }) {
  const [activeIndex, setActiveIndex] = useState(null)

  const closeLightbox = useCallback(() => {
    setActiveIndex(null)
  }, [])

  useEffect(() => {
    if (activeIndex === null) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') closeLightbox()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [activeIndex, closeLightbox])

  if (!images?.length) {
    return (
      <p className="gallery-wave__empty">No photos in this section yet.</p>
    )
  }

  const activeImage = activeIndex !== null ? images[activeIndex] : null

  return (
    <>
      <section className="gallery-wave" aria-label={label}>
        <nav
          className="gallery-wave__nav"
          style={{
            '--max-p': images.length,
            '--max-z': HOVER_ZONES,
          }}
        >
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              className="gallery-wave__item"
              style={{
                '--i': i,
                '--img': `url('${src}')`,
              }}
              aria-label={`${label} photo ${i + 1}`}
              onClick={() => setActiveIndex(i)}
            >
              <div className="gallery-wave__img" />
              <aside className="gallery-wave__hover-zone" aria-hidden="true">
                {Array.from({ length: HOVER_ZONES }, (_, z) => (
                  <i key={z} />
                ))}
              </aside>
            </button>
          ))}
        </nav>
      </section>

      {activeImage && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Expanded ${label} photo`}
          onClick={closeLightbox}
        >
          <button
            type="button"
            className="gallery-lightbox__close"
            aria-label="Close expanded photo"
            onClick={closeLightbox}
          >
            ×
          </button>
          <img
            className="gallery-lightbox__img"
            src={activeImage}
            alt={`${label} photo ${activeIndex + 1}`}
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}
