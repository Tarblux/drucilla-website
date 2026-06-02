function initiativeUrl(folder, filename) {
  return `${import.meta.env.BASE_URL}images/Initiatives/${folder}/${encodeURIComponent(filename)}`
}

export const initiatives = [
  {
    id: 'stem-week',
    title: 'STEM Week',
    body: [
      'I organised STEM Week to give students a full week of hands-on science, technology, engineering, and mathematics beyond the regular timetable. Students designed and tested original projects, including parachute challenges, volcano-powered cars, and trigonometry-themed builds such as "The Trig Atlantic."',
      'They also took part in live chemistry demonstrations and engineering activities that pushed them to problem-solve, collaborate, and present their work to peers. STEM Week turned the school hall into a space where curiosity, creativity, and scientific thinking came together.',
    ],
    poster: {
      src: initiativeUrl('StemWeek', 'STEM Week(5).webp'),
      alt: 'STEM Week event poster',
    },
    media: [
      { type: 'image', src: initiativeUrl('StemWeek', 'WhatsApp Image 2026-05-27 at 1.35.43 PM.webp'), alt: 'Students presenting The Trig Atlantic trigonometry STEM project' },
      { type: 'image', src: initiativeUrl('StemWeek', 'STEM Week.webp'), alt: 'Volcano car student engineering project on display' },
      { type: 'image', src: initiativeUrl('StemWeek', 'STEM Week(1).webp'), alt: 'Students testing parachute designs from a balcony' },
      { type: 'image', src: initiativeUrl('StemWeek', 'STEM Week(2).webp'), alt: 'Students building parachute prototypes together' },
      { type: 'image', src: initiativeUrl('StemWeek', 'STEM Week(3).webp'), alt: 'Students observing a live chemistry demonstration' },
      { type: 'image', src: initiativeUrl('StemWeek', 'STEM Week(4).webp'), alt: 'Purple glitter jar chemistry demonstration' },
      { type: 'video', src: initiativeUrl('StemWeek', 'student-intiatives.mp4'), alt: 'STEM Week student initiatives video' },
    ],
  },
  {
    id: 'noranda-bauxite',
    title: 'Noranda Bauxite Field Trip',
    body: [
      'While teaching students about bauxite and Al\u2082O\u2083, I asked a simple question: why leave the learning in a book when Jamaica processes bauxite locally? I arranged a trip to Noranda Bauxite so students could see the extraction and refining process for themselves.',
      'On site, they listened to industry professionals, connected textbook concepts to real industrial operations, and experienced firsthand how chemistry supports one of Jamaica\'s most important industries. The trip helped students understand that what they study in class has direct relevance to the world around them.',
    ],
    media: [
      { type: 'image', src: initiativeUrl('Noranda', 'noranda-landsapo.webp'), alt: 'Noranda Bauxite processing facility and coastline' },
      { type: 'image', src: initiativeUrl('Noranda', 'School trip.webp'), alt: 'Students in a briefing session at Noranda Bauxite' },
      { type: 'image', src: initiativeUrl('Noranda', 'School trip(1).webp'), alt: 'Students on the Noranda Bauxite field trip overlooking the coastline' },
      { type: 'video', src: initiativeUrl('Noranda', 'noranda-talk.mp4'), alt: 'Noranda Bauxite industry talk video' },
    ],
  },
  {
    id: 'national-visit',
    title: 'National Manufacturers Visit',
    body: [
      'We also brought representatives from National, the manufacturers, to the school to expose students to the science behind manufacturing their food products. Through presentations and interactive sessions, students learned how chemistry, quality control, and STEM principles shape everyday items on Jamaican shelves.',
      'The visit opened their eyes to career paths in food science and manufacturing, and showed them that science is not confined to a laboratory. It is part of how the products they know and use every day are made.',
    ],
    media: [
      { type: 'image', src: initiativeUrl('National', 'National.webp'), alt: 'National Foundation STEM presentation at Montego Bay High School' },
      { type: 'image', src: initiativeUrl('National', 'National (2).webp'), alt: 'Students and National representatives after the school visit' },
      { type: 'image', src: initiativeUrl('National', 'National (3).webp'), alt: 'National product display and gift bags at the school' },
    ],
  },
]
