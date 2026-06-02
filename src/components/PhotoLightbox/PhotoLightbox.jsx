import { useCallback, useEffect, useState } from 'react'
import './PhotoLightbox.css'

export function ClickablePhoto({ src, alt, className = '', imageClassName = '' }) {
  const [open, setOpen] = useState(false)
  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    if (!open) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') close()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open, close])

  return (
    <>
      <button
        type="button"
        className={`clickable-photo ${className}`.trim()}
        onClick={() => setOpen(true)}
        aria-label={`View full size: ${alt}`}
      >
        <img
          src={src}
          alt={alt}
          className={`clickable-photo__image ${imageClassName}`.trim()}
          loading="lazy"
        />
      </button>

      {open && (
        <div
          className="photo-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          onClick={close}
        >
          <button
            type="button"
            className="photo-lightbox__close"
            aria-label="Close expanded photo"
            onClick={close}
          >
            ×
          </button>
          <img
            className="photo-lightbox__img"
            src={src}
            alt={alt}
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}
