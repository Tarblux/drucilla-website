import { useState } from 'react'
import GalleryWave from '../components/GalleryWave/GalleryWave'
import gallerySections from '../data/galleryData'
import './Gallery.css'

export default function Gallery() {
  const [activeSection, setActiveSection] = useState(gallerySections[0].id)
  const currentSection = gallerySections.find((section) => section.id === activeSection)

  return (
    <div className="gallery-page">
      <div className="gallery-card">
        <h1 className="gallery-heading">
          Gallery<span className="gallery-heading-dot">.</span>
        </h1>
        <p className="gallery-intro">
          Classroom activities, experiments, presentations, and event photos.
        </p>

        <div className="gallery-filters" role="tablist" aria-label="Gallery sections">
          {gallerySections.map((section) => (
            <button
              key={section.id}
              type="button"
              role="tab"
              aria-selected={activeSection === section.id}
              className={`gallery-filter${activeSection === section.id ? ' gallery-filter--active' : ''}`}
              onClick={() => setActiveSection(section.id)}
            >
              {section.label}
            </button>
          ))}
        </div>

        <GalleryWave
          key={activeSection}
          images={currentSection?.images ?? []}
          label={currentSection?.label ?? 'Gallery'}
        />
      </div>
    </div>
  )
}
