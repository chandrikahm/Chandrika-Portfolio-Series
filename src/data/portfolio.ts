/**
 * Central portfolio data for Chandrika H.M.
 */

export const profile = {
  fullName: 'Chandrika H.M.',
  displayName: 'Chandrika H.M.',
  firstName: 'CHANDRIKA',
  seriesTag: 'THE SERIES',
  originalLabel: 'A CHANDRIKA ORIGINAL',

  role: 'Software Development • AI & Embedded Systems',

  tagline: [
    'Software Development',
    'AI & Generative AI',
    'Embedded Systems',
  ],

  intro:
    'Electrical and Electronics Engineering student building a career across software development, AI, embedded systems and IoT, with a strong foundation in programming and engineering fundamentals.',

  location: 'Bengaluru, Karnataka, India',

  email: '',

  links: {
    linkedin: 'https://www.linkedin.com/in/chandrika-h-m-95b398336/',
    github: 'https://github.com/chandrikahm',
    leetcode: 'https://leetcode.com/u/Chandrikahm/',
  },

  resumePdf: '/assets/Chandrika_HM_Resume.pdf',

  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet:
      '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Chandrika H.M.',
  },

  interests: [
    'Embedded Systems',
    'AI & Generative AI',
    'IoT',
    'Software Development',
  ],
};

export const education = [
  {
    school: 'Sapthagiri College of Engineering',
    place: 'Bengaluru, Karnataka',
    degree: 'Bachelor of Engineering — Electrical and Electronics Engineering',
    period: '2023 – 2027',
    score: 'Currently in 7th semester',
  },
  {
    school: 'Vikasa Pre-University College',
    place: 'Karnataka',
    degree: 'PCMB — Karnataka Board',
    period: '2020 – 2022',
    score: '',
  },
  {
    school: 'BMN Public School',
    place: 'Bengaluru',
    degree: 'CBSE — PCMB',
    period: 'Up to 2020',
    score: '',
  },
];

export const experience = [
  {
    company: 'Academic & Project Experience',
    role: 'Engineering Student',
    place: 'Bengaluru, Karnataka',
    period: '2023 – Present',
    points: [
      'Built academic and mini-projects combining electrical engineering, embedded systems, IoT and software development.',
      'Worked with programming fundamentals, microcontrollers, sensors, circuit analysis and engineering tools.',
      'Preparing for software, embedded systems and core electrical engineering opportunities.',
    ],
  },
];

export type Metric =