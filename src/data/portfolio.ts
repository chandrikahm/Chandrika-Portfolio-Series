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

export type Metric = {
  value: string;
  label: string;
};

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  palette: {
    from: string;
    via: string;
    to: string;
    accent: string;
  };
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'iot-pool-safety',
    title: 'IoT-Based Swimming Pool Safety System',
    year: '2026',
    genre: 'IoT • Embedded Systems • Safety',
    logline:
      'A sensor-based safety system designed to detect a person at risk of sinking in a swimming pool and trigger an alert.',
    stack: ['IoT', 'Sensors', 'Microcontroller', 'Embedded C'],
    build: [
      'Designed an IoT-based safety concept for detecting a person at risk of sinking in a swimming pool.',
      'Integrated sensing, control and alert mechanisms to provide a practical safety response.',
      'Worked on hardware selection, wiring, testing and project documentation.',
    ],
    features: [
      'Sinking/person detection',
      'Sensor-based monitoring',
      'Alert mechanism',
      'Embedded control',
      'IoT safety application',
    ],
    metrics: [
      { value: 'IoT', label: 'Safety System' },
      { value: 'Embedded', label: 'Control' },
      { value: 'Real-time', label: 'Monitoring' },
    ],
    palette: {
      from: '#04121f',
      via: '#0f4c6e',
      to: '#05080d',
      accent: '#4cc9ff',
    },
    motif: 'shield',
  },

  {
    id: 'wireless-power',
    title: 'Wireless Power Transmission / EV Charging',
    year: '2025',
    genre: 'Power Electronics • Embedded • EEE',
    logline:
      'A prototype exploring wireless transfer of electrical energy using transmitter and receiver coils.',
    stack: ['2N2222', 'BD139', 'Copper Coil', 'Battery', 'LED'],
    build: [
      'Developed a prototype for wireless power transmission using coupled copper coils.',
      'Worked with transistor-based switching, resistors, batteries and a receiver circuit.',
      'Studied coil alignment, distance and circuit behaviour during testing.',
    ],
    features: [
      'Wireless energy transfer',
      'Transmitter and receiver coils',
      'Transistor switching',
      'Prototype testing',
      'EV charging concept',
    ],
    metrics: [
      { value: 'EEE', label: 'Core Concept' },
      { value: 'Prototype', label: 'Hardware Build' },
      { value: 'Wireless', label: 'Power Transfer' },
    ],
    palette: {
      from: '#1a0d02',
      via: '#8a4a07',
      to: '#0a0806',
      accent: '#ffb547',
    },
    motif: 'flow',
  },

  {
    id: 'smart-library',
    title: 'Smart Library',
    year: '2025',
    genre: 'Software • Java • Database',
    logline:
      'A library management application built with Java Spring Boot and MySQL.',
    stack: ['Java', 'Spring Boot', 'MySQL', 'IntelliJ IDEA'],
    build: [
      'Developed a Smart Library application using Java Spring Boot and MySQL.',
      'Implemented application logic and database connectivity for managing library information.',
      'Worked with object-oriented programming and backend development concepts.',
    ],
    features: [
      'Library management',
      'Spring Boot backend',
      'MySQL database',
      'Object-oriented design',
      'CRUD-based data handling',
    ],
    metrics: [
      { value: 'Java', label: 'Backend' },
      { value: 'Spring Boot', label: 'Framework' },
      { value: 'MySQL', label: 'Database' },
    ],
    palette: {
      from: '#120822',
      via: '#3d1a6e',
      to: '#07060c',
      accent: '#b98bff',
    },
    motif: 'tenants',
  },

  {
    id: 'smart-irrigation',
    title: 'Smart Irrigation System',
    year: '2025',
    genre: 'IoT • Automation • Embedded',
    logline:
      'An automated irrigation concept using sensing and control to manage watering based on field conditions.',
    stack: ['IoT', 'Sensors', 'Microcontroller', 'Embedded Systems'],
    build: [
      'Designed a smart irrigation concept using sensor-based monitoring and automated control.',
      'Focused on reducing unnecessary water usage by making irrigation responsive to soil conditions.',
      'Worked on the hardware logic and system-level flow of the prototype.',
    ],
    features: [
      'Soil-condition sensing',
      'Automatic irrigation',
      'IoT monitoring',
      'Water-saving approach',
    ],
    metrics: [
      { value: 'IoT', label: 'Automation' },
      { value: 'Sensor', label: 'Monitoring' },
      { value: 'Automatic', label: 'Control' },
    ],
    palette: {
      from: '#03150f',
      via: '#0d5a40',
      to: '#050a08',
      accent: '#46e3a8',
    },
    motif: 'flow',
  },

  {
    id: 'lm35-temperature',
    title: 'Temperature Sensing using LM35',
    year: '2024',
    genre: 'Sensors • Embedded Systems • EEE',
    logline:
      'A basic temperature-sensing project using the LM35 temperature sensor.',
    stack: ['LM35', 'Microcontroller', 'Sensors', 'Embedded Systems'],
    build: [
      'Built a temperature sensing setup using the LM35 sensor.',
      'Studied sensor interfacing and conversion of temperature information into a usable output.',
      'Tested the circuit and observed sensor response under changing temperature conditions.',
    ],
    features: [
      'LM35 sensor interfacing',
      'Temperature measurement',
      'Embedded sensing',
      'Circuit testing',
    ],
    metrics: [
      { value: 'LM35', label: 'Temperature Sensor' },
      { value: 'Sensor', label: 'Interfacing' },
    ],
    palette: {
      from: '#2a0610',
      via: '#7a0f24',
      to: '#0b0710',
      accent: '#ff3d5a',
    },
    motif: 'shield',
  },

  {
    id: 'spiral-turbine',
    title: 'Mini Spiral Turbine Power Generation',
    year: '2024',
    genre: 'Renewable Energy • EEE',
    logline:
      'A mini prototype exploring electrical power generation using a spiral turbine mechanism.',
    stack: ['Turbine', 'Generator', 'Mechanical Design', 'EEE'],
    build: [
      'Developed a mini spiral turbine concept for small-scale power generation.',
      'Studied the conversion of mechanical energy into electrical energy through a generator.',
      'Focused on prototype construction, testing and basic energy-conversion principles.',
    ],
    features: [
      'Spiral turbine',
      'Energy conversion',
      'Generator coupling',
      'Prototype testing',
    ],
    metrics: [
      { value: 'Renewable', label: 'Energy Concept' },
      { value: 'Prototype', label: 'Engineering Build' },
    ],
    palette: {
      from: '#04121f',
      via: '#0f4c6e',
      to: '#05080d',
      accent: '#4cc9ff',
    },
    motif: 'flow',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'engineering-foundation',
    title: 'EEE + Software',
    org: 'Career Direction',
    detail:
      'Building a profile that combines electrical engineering fundamentals with programming, software development, AI, embedded systems and IoT.',
    laurel: 'Hybrid Profile',
  },

  {
    id: 'problem-solving',
    title: 'Programming & Problem Solving',
    org: 'LeetCode',
    detail:
      'Practising programming and problem solving alongside engineering studies.',
    laurel: 'Continuous Practice',
    link: 'https://leetcode.com/u/Chandrikahm/',
  },
];

export type Certification = {
  issuer: string;
  name: string;
  link: string;
};

export const certifications: Certification[] = [];

export type Skill = {
  name: string;
  mono: string;
  note?: string;
};

export type SkillCategory = {
  id: string;
  title: string;
  subtitle: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: 'programming',
    title: 'Programming',
    subtitle: 'Programming fundamentals & problem solving',
    skills: [
      { name: 'C', mono: 'C', note: 'Core' },
      { name: 'C++', mono: 'C+' },
      { name: 'Python', mono: 'Py' },
      { name: 'Java', mono: 'Jv' },
      { name: 'C#', mono: 'C#' },
    ],
  },

  {
    id: 'embedded',
    title: 'Embedded Systems',
    subtitle: 'Hardware, controllers & interfacing',
    skills: [
      { name: 'Embedded Systems', mono: 'Es' },
      { name: 'Microcontrollers', mono: 'Mc' },
      { name: 'IoT', mono: 'Io' },
      { name: 'Sensors', mono: 'Sn' },
    ],
  },

  {
    id: 'eee',
    title: 'EEE Core',
    subtitle: 'Electrical & electronics fundamentals',
    skills: [
      { name: 'Digital Electronics', mono: 'De' },
      { name: 'Circuit Analysis', mono: 'Ca' },
      { name: 'Power Electronics', mono: 'Pe' },
      { name: 'Signals & Systems', mono: 'Ss' },
      { name: 'Electrical Machines', mono: 'Em' },
      { name: 'Transformers', mono: 'Tr' },
    ],
  },

  {
    id: 'software',
    title: 'Software Development',
    subtitle: 'Building applications & solutions',
    skills: [
      { name: 'Programming Basics', mono: 'Pb' },
      { name: 'OOP Concepts', mono: 'Oo' },
      { name: 'Problem Solving', mono: 'Ps' },
      { name: 'Git / GitHub', mono: 'Gt' },
      { name: 'VS Code', mono: 'Vs' },
    ],
  },

  {
    id: 'tools',
    title: 'Tools',
    subtitle: 'Engineering & development tools',
    skills: [
      { name: 'MATLAB', mono: 'Mt' },
      { name: 'Simulink', mono: 'Si' },
      { name: 'VS Code', mono: 'Vs' },
      { name: 'GitHub', mono: 'Gh' },
    ],
  },

  {
    id: 'ai',
    title: 'AI & Emerging Tech',
    subtitle: 'Building toward modern technology roles',
    skills: [
      { name: 'AI', mono: 'Ai' },
      { name: 'Generative AI', mono: 'Gi' },
      { name: 'IoT', mono: 'Io' },
      { name: 'Embedded Systems', mono: 'Es' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  C: ['Programming practice', 'Embedded systems projects'],
  Python: ['Programming practice', 'AI & Generative AI focus'],
  Java: ['Smart Library'],
  'C++': ['Programming fundamentals'],
  'C#': ['Programming fundamentals'],
  'Embedded Systems': [
    'IoT Safety System',
    'LM35 Temperature Sensing',
    'Wireless Power Transmission',
  ],
  Microcontrollers: ['IoT projects', 'Sensor interfacing'],
  IoT: ['Swimming Pool Safety System', 'Smart Irrigation'],
  Sensors: ['LM35 Temperature Sensing', 'IoT projects'],
  'Digital Electronics': ['EEE core preparation', 'Embedded systems'],
  'Circuit Analysis': ['Wireless Power Transmission', 'EEE fundamentals'],
  'Power Electronics': ['Wireless Power Transmission'],
  'Signals & Systems': ['EEE core preparation'],
  'Electrical Machines': ['EEE core preparation'],
  Transformers: ['EEE core preparation'],
  'Problem Solving': ['Programming practice', 'LeetCode'],
  'Git / GitHub': ['Portfolio development'],
  MATLAB: ['Engineering coursework'],
  Simulink: ['Engineering coursework'],
  'Generative AI': ['Current technology focus'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: {
    from: string;
    via: string;
    to: string;
    accent: string;
  };
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson = {
  from: '#24060b',
  via: '#6e0d1d',
  to: '#09070a',
  accent: '#ff3d5a',
};

const amber = {
  from: '#1c1003',
  via: '#6b3c06',
  to: '#0a0806',
  accent: '#ffb547',
};

const ocean = {
  from: '#04121f',
  via: '#0f4c6e',
  to: '#05080d',
  accent: '#4cc9ff',
};

const violet = {
  from: '#120822',
  via: '#3d1a6e',
  to: '#07060c',
  accent: '#b98bff',
};

const jade = {
  from: '#03150f',
  via: '#0d5a40',
  to: '#050a08',
  accent: '#46e3a8',
};

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Beginning',
    period: 'School Years',
    synopsis:
      'The academic foundation that led toward engineering and technology.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Foundation',
        description:
          'Built a foundation in mathematics, physics, chemistry and computer fundamentals before entering engineering.',
        tags: ['PCMB', 'CBSE', 'Karnataka Board'],
        runtime: 'School & PUC',
        palette: amber,
      },
    ],
  },

  {
    number: 2,
    title: 'Enter: EEE',
    period: '2023 – Present',
    synopsis:
      'Bachelor of Engineering in Electrical and Electronics Engineering at Sapthagiri College of Engineering.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Engineer',
        description:
          'Pursuing B.E. in Electrical and Electronics Engineering, currently in the 7th semester.',
        tags: ['B.E.', 'EEE', '2023 – 2027'],
        runtime: '2023 – Present',
        palette: violet,
      },

      {
        code: 'S02 E02',
        title: 'The Core',
        description:
          'Building fundamentals in voltage, current, resistance, AC/DC circuits, transformers, machines, power electronics and digital electronics.',
        tags: ['EEE', 'Circuits', 'Machines', 'Power'],
        runtime: 'Engineering studies',
        palette: crimson,
      },

      {
        code: 'S02 E03',
        title: 'The Builder',
        description:
          'Applying engineering concepts through embedded systems, IoT, sensors and hardware prototypes.',
        tags: ['Embedded', 'IoT', 'Sensors'],
        runtime: 'Projects',
        palette: jade,
      },
    ],
  },

  {
    number: 3,
    title: 'Learning to Code',
    period: '2024 – Present',
    synopsis:
      'Developing programming skills alongside the engineering degree.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Programmer',
        description:
          'Learning and practising C, C++, Python, Java and C# fundamentals.',
        tags: ['C', 'C++', 'Python', 'Java', 'C#'],
        runtime: 'Ongoing',
        palette: ocean,
      },

      {
        code: 'S03 E02',
        title: 'The Problem Solver',
        description:
          'Practising programming questions, logical thinking, data structures and interview-oriented problem solving.',
        tags: ['DSA', 'Problem Solving', 'LeetCode'],
        runtime: 'Ongoing',
        palette: violet,
      },

      {
        code: 'S03 E03',
        title: 'The Software Builder',
        description:
          'Exploring software development, GitHub, AI and Generative AI while building practical projects.',
        tags: ['Software', 'AI', 'GenAI'],
        runtime: 'Ongoing',
        palette: jade,
      },
    ],
  },

  {
    number: 4,
    title: 'Building Real Projects',
    period: '2024 – 2026',
    synopsis:
      'Turning engineering concepts into practical hardware, IoT and software projects.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The Hardware Builder',
        description:
          'Wireless Power Transmission, LM35 Temperature Sensing and Mini Spiral Turbine Power Generation.',
        tags: ['EEE', 'Power', 'Sensors'],
        runtime: 'Academic projects',
        palette: amber,
      },

      {
        code: 'S04 E02',
        title: 'The IoT Builder',
        description:
          'Smart Irrigation and an IoT-based Swimming Pool Safety System focused on automation and real-world safety.',
        tags: ['IoT', 'Automation', 'Safety'],
        runtime: 'Academic projects',
        palette: crimson,
      },

      {
        code: 'S04 E03',
        title: 'The Software Builder',
        description:
          'Smart Library — a Java Spring Boot and MySQL application combining programming, backend logic and database concepts.',
        tags: ['Java', 'Spring Boot', 'MySQL'],
        runtime: 'Academic project',
        palette: ocean,
      },
    ],
  },

  {
    number: 5,
    title: "What's Next",
    period: 'Now streaming',
    synopsis:
      'Preparing for a strong start to a professional career across software, embedded and core engineering roles.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Next Chapter',
        description:
          'Strengthening programming, interview preparation, embedded systems, AI and core EEE knowledge while building a professional portfolio.',
        tags: ['Software', 'Embedded', 'AI', 'EEE'],
        runtime: 'In progress',
        palette: violet,
      },
    ],
  },
];

export type TopPick = {
  label: string;
  title: string;
  detail: string;
  palette: {
    from: string;
    via: string;
    to: string;
    accent: string;
  };
};

export const topPicks: TopPick[] = [
  {
    label: 'Core identity',
    title: 'Electrical & Electronics Engineering',
    detail: 'B.E. • Sapthagiri College of Engineering',
    palette: violet,
  },

  {
    label: 'Software focus',
    title: 'Programming',
    detail: 'C • C++ • Python • Java • C#',
    palette: ocean,
  },

  {
    label: 'Embedded focus',
    title: 'Embedded Systems',
    detail: 'Microcontrollers • Sensors • IoT',
    palette: jade,
  },

  {
    label: 'AI focus',
    title: 'AI & Generative AI',
    detail: 'Building toward modern software roles',
    palette: crimson,
  },

  {
    label: 'Project',
    title: 'IoT Pool Safety',
    detail: 'Real-world safety application',
    palette: crimson,
  },

  {
    label: 'Project',
    title: 'Wireless Power',
    detail: 'Power transmission & EV charging concept',
    palette: amber,
  },

  {
    label: 'Project',
    title: 'Smart Library',
    detail: 'Java • Spring Boot • MySQL',
    pa