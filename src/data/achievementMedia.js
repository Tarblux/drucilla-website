function achievementUrl(filename) {
  return `${import.meta.env.BASE_URL}images/student achievement/${encodeURIComponent(filename)}`
}

export const achievementMedia = [
  {
    type: 'image',
    src: achievementUrl('Award.webp'),
    alt: 'Champion House trophies from Montego Bay High School',
  },
  {
    type: 'image',
    src: achievementUrl('WhatsApp Image 2026-05-27 at 1.35.43 PM.webp'),
    alt: 'Student STEM project display',
  },
  {
    type: 'image',
    src: achievementUrl('WhatsApp Image 2026-05-27 at 1.21.00 PM.webp'),
    alt: 'Students conducting chemistry experiments in the lab',
  },
  {
    type: 'video',
    src: achievementUrl('student-projects.mp4'),
    alt: 'Student projects video',
  },
  {
    type: 'video',
    src: achievementUrl('student-projects (2).mp4'),
    alt: 'Student projects video',
  },
  {
    type: 'video',
    src: achievementUrl('student-activities.mp4'),
    alt: 'Student classroom activities video',
  },
  {
    type: 'video',
    src: achievementUrl('student-activities (2).mp4'),
    alt: 'Student classroom activities video',
  },
  {
    type: 'video',
    src: achievementUrl('student-activities-2.mp4'),
    alt: 'Student classroom activities video',
  },
  {
    type: 'video',
    src: achievementUrl('sixth-form-lab-session.mp4'),
    alt: 'Sixth form lab session video',
  },
]
