const WHATSAPP_IMAGES = [
  'WhatsApp Image 2026-05-27 at 1.11.020 PM.webp',
  'WhatsApp Image 2026-05-27 at 1.11.31 PM.webp',
  'WhatsApp Image 2026-05-27 at 1.14.29 PM.webp',
  'WhatsApp Image 2026-05-27 at 1.16.31 PM.webp',
  'WhatsApp Image 2026-05-27 at 1.17.00 PM (1).webp',
  'WhatsApp Image 2026-05-27 at 1.17.00 PM (2).webp',
  'WhatsApp Image 2026-05-27 at 1.17.00 PM.webp',
  'WhatsApp Image 2026-05-27 at 1.17.01 PM.webp',
  'WhatsApp Image 2026-05-27 at 1.21.00 PM.webp',
  'WhatsApp Image 2026-05-27 at 1.24.04 PM.webp',
  'WhatsApp Image 2026-05-27 at 1.24.07 PM.webp',
  'WhatsApp Image 2026-05-27 at 1.24.11 PM (1).webp',
  'WhatsApp Image 2026-05-27 at 1.24.11 PM.webp',
  'WhatsApp Image 2026-05-27 at 1.25.39 PM.webp',
  'WhatsApp Image 2026-05-27 at 1.25.41 PM.webp',
  'WhatsApp Image 2026-05-27 at 1.25.42 PM.webp',
  'WhatsApp Image 2026-05-27 at 1.25.43 PM.webp',
  'WhatsApp Image 2026-05-27 at 1.2599.43 PM.webp',
  'WhatsApp Image 2026-05-27 at 1.25oo.43 PM.webp',
  'WhatsApp Image 2026-05-27 at 1.26.45 PM.webp',
  'WhatsApp Image 2026-05-27 at 1.29.31 PM.webp',
  'WhatsApp Image 2026-05-27 at 1.30.27 PM.webp',
  'WhatsApp Image 2026-05-27 at 1.31.16 PM.webp',
  'WhatsApp Image 2026-05-27 at 1.31.57 PM.webp',
  'WhatsApp Image 2026-05-27 at 1.32.30 PM (1).webp',
  'WhatsApp Image 2026-05-27 at 1.32.30 PM.webp',
  'WhatsApp Image 2026-05-27 at 1.35.43 PM.webp',
  'WhatsApp Image 2026-05-27 at 1.36.32 PM.webp',
  'WhatsApp Image 2026-05-27 at 1.36.58 PM.webp',
  'WhatsApp Image 2026-05-27 at 4.29.17 PM.webp',
]

function publicImage(filename) {
  return `${import.meta.env.BASE_URL}images/${encodeURIComponent(filename)}`
}

function hashString(str) {
  let hash = 0
  for (let i = 0; i < str.length; i += 1) {
    hash = (hash * 31 + str.charCodeAt(i)) >>> 0
  }
  return hash
}

export const GALLERY_SECTIONS = [
  { id: 'activities', label: 'Classroom Activities' },
  { id: 'experiments', label: 'Experiments' },
  { id: 'presentations', label: 'Presentations' },
  { id: 'events', label: 'Event Photos' },
]

const allImages = WHATSAPP_IMAGES
  .map((filename) => publicImage(filename))
  .sort((a, b) => hashString(a) - hashString(b))

const sectionImages = GALLERY_SECTIONS.map((section) => ({
  ...section,
  images: [],
}))

allImages.forEach((src, index) => {
  sectionImages[index % GALLERY_SECTIONS.length].images.push(src)
})

export default sectionImages
