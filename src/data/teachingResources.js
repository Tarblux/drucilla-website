function thumbnailUrl(filename) {
  return `${import.meta.env.BASE_URL}images/thumbnails/${encodeURIComponent(filename)}`
}

export const teachingResources = [
  {
    title: 'Qualitative Analysis Matrix',
    type: 'PowerPoint',
    href: 'https://docs.google.com/presentation/d/1dhXk85_SFTVTaUVDSVgecqWKTPSNkmx7/edit?usp=drive_link&ouid=110867662222495258528&rtpof=true&sd=true',
    thumbnail: thumbnailUrl('Screenshot 2026-06-02 170554.png'),
  },
  {
    title: 'Indicator Challenge',
    type: 'PDF',
    href: 'https://drive.google.com/file/d/14S8yb16wKPRibxYZ7QlUAsoUJN4sKgMe/view?usp=drive_link',
    thumbnail: thumbnailUrl('Screenshot 2026-06-02 170614.png'),
  },
  {
    title: 'Acids, Bases and Salts Puzzle',
    type: 'PDF',
    href: 'https://drive.google.com/file/d/1vVhiA1LBv9HOhgxU_ujb9nvR_wWSc-ae/view?usp=drive_link',
    thumbnail: thumbnailUrl('Screenshot 2026-06-02 170635.png'),
  },

  {
    title: 'Grade 8 Lesson Plan 1: Methods of Presenting Data',
    type: 'Lesson Plan',
    href: 'https://docs.google.com/document/d/1RDKxgn82Bhc2CEocqFeahMCUJkH2RXjQ/edit?usp=drive_link&ouid=110867662222495258528&rtpof=true&sd=true',
    thumbnail: thumbnailUrl('Screenshot 2026-06-02 170700.png'),
  },
  {
    title: 'Grade 8 Test 5: Physical and Chemical Changes',
    type: 'Test',
    href: 'https://docs.google.com/document/d/1T969jJDTR1ijeMrQr5SjIDgVZx6Tq8f9/edit?usp=drive_link&ouid=110867662222495258528&rtpof=true&sd=true',
    thumbnail: thumbnailUrl('Screenshot 2026-06-02 170715.png'),
  },
  {
    title: 'Grade 11 Christmas Term 2019-2020',
    type: 'Lesson Plan',
    href: 'https://docs.google.com/document/d/1ZY6Wbpwc7MVLoDbihrzOs3G4GeQrg7K9/edit?usp=drive_link&ouid=110867662222495258528&rtpof=true&sd=true',
    thumbnail: thumbnailUrl('Screenshot 2026-06-02 170729.png'),
  },
]
