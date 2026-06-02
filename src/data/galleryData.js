function galleryImage(filename) {
  return `${import.meta.env.BASE_URL}images/gallery/${encodeURIComponent(filename)}`
}

function sortFilenames(filenames) {
  return [...filenames].sort((a, b) =>
    a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }),
  )
}

function toImages(filenames) {
  return sortFilenames(filenames).map(galleryImage)
}

const gallerySections = [
  {
    id: 'school-events',
    label: 'School Events',
    images: toImages([
      'School event.webp',
      'School event(1).webp',
      'School event(2).webp',
      'School event(3).webp',
      'School event(4).webp',
      'School event(5).webp',
      'School event(6).webp',
      'School trip(2).webp',
      'Student appreciation.webp',
      'Student appreciation(1).webp',
      'Award.webp',
      'about-me.webp',
      'Banner.webp',
    ]),
  },
  {
    id: 'experiments',
    label: 'Experiments',
    images: toImages([
      'exp.webp',
      'exp2.webp',
      'exp3.webp',
      'exp5.webp',
      'exp5 (2).webp',
      'exp6.webp',
    ]),
  },
  {
    id: 'presentations',
    label: 'Presentations',
    images: toImages(['pr1.webp', 'pr2.webp', 'pr3.webp']),
  },
]

export default gallerySections.filter((section) => section.images.length > 0)
