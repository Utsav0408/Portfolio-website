import portfolio from '../assets/portfolio.png'
import pokemon from '../assets/pokemon.jpg'
import weather from '../assets/Weather.jpg'
import AI from '../assets/AI.jpg'
import UtsavRai from '../assets/UtsavRai.pdf'



export const site = {
  name: 'Utsav Rai',
  role: 'Full Stack Developer / Frontend Developer',
  headline:
    'I build production-ready interfaces and test-backed web experiences with React, Vue, TypeScript, and Node.js.',
  location: 'Gorakhpur, Uttar Pradesh, India',
  email: 'Utsav0408@gmail.com',
  resumeUrl: UtsavRai,
  shortIntro:
    'Full Stack Developer with hands-on experience shipping production features, building reusable UI systems, and automating end-to-end tests for enterprise delivery.',
}

export const navigation = [
  { label: 'About', href: 'about' },
  { label: 'Skills', href: 'skills' },
  { label: 'Projects', href: 'projects' },
  { label: 'Experience', href: 'experience' },
  { label: 'Contact', href: 'contact' },
]

export const socials = [
  {
    label: 'Email',
    href: 'mailto:Utsav0408@gmail.com',
    icon: 'mail',
  },
  {
    label: 'Resume',
    href: '/resume.pdf',
    icon: 'download',
  },
]

export const stats = [
  { label: 'Months in production delivery', value: '6' },
  { label: 'Resume projects showcased', value: '4' },
  { label: 'Automation stacks used', value: '3' },
  { label: 'B.Tech CGPA', value: '7.53' },
]

export const highlights = [
  'Built and maintained reusable UI components across React, Vue, and Node.js projects',
  'Designed automated end-to-end and regression test suites using Playwright, Selenium, and Pytest',
  'Worked on enterprise client features in the life sciences sector with cross-functional teams',
]

export const aboutTimeline = [
  {
    year: '2022 — 2026',
    title: 'B.Tech in Computer Science and Engineering',
    description:
      'Maulana Abul Kalam Azad University of Technology (formerly WBUT), West Bengal, India',
  },
  {
    year: '2025',
    title: 'Data Structures and Algorithms',
    description: 'Udemy certification completed between Jan 2025 and Mar 2025.',
  },
  {
    year: '2025',
    title: 'Machine Learning',
    description: 'Indian Institute of Internship certification completed between Jun 2025 and Jul 2025.',
  },
]

export const certifications = [
  'Data Structures and Algorithms | Udemy | Jan 2025 – Mar 2025',
  'Machine Learning | Indian Institute of Internship | Jun 2025 – Jul 2025',
]

export const extracurricular = [
  'Competitive badminton and cricket player at the college level',
  'Volunteered at college fest Magnus’23',
]

export const education = [
  {
    school: 'Maulana Abul Kalam Azad University of Technology',
    detail: 'B.Tech in Computer Science and Engineering | CGPA: 7.53 | 2022 – 2026',
  },
]

export const skills = [
  {
    category: 'Languages',
    items: [
      { name: 'JavaScript', level: 97 },
      { name: 'TypeScript', level: 92 },
      { name: 'Java', level: 84 },
      { name: 'Python', level: 88 },
      { name: 'C', level: 82 },
      { name: 'SQL', level: 86 },
    ],
  },
  {
    category: 'Frontend',
    items: [
      { name: 'React.js', level: 97 },
      { name: 'Vue.js', level: 91 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'HTML5', level: 98 },
      { name: 'CSS3', level: 96 },
      { name: 'Responsive Design', level: 96 },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', level: 90 },
      { name: 'REST API Integration', level: 93 },
      { name: 'Express', level: 86 },
      { name: 'Flask', level: 84 },
    ],
  },
  {
    category: 'Test Automation',
    items: [
      { name: 'Playwright', level: 96 },
      { name: 'Selenium', level: 92 },
      { name: 'Pytest', level: 90 },
      { name: 'Page Object Model', level: 88 },
      { name: 'CI-ready suites', level: 90 },
    ],
  },
  {
    category: 'Databases',
    items: [
      { name: 'SQL', level: 90 },
      { name: 'Data modeling', level: 82 },
      { name: 'Query optimization', level: 80 },
    ],
  },
  {
    category: 'Tools & Platforms',
    items: [
      { name: 'Git', level: 95 },
      { name: 'VS Code', level: 99 },
      { name: 'IntelliJ IDEA', level: 90 },
      { name: 'NetBeans', level: 84 },
      { name: 'Playwright', level: 96 },
      { name: 'Selenium', level: 92 },
    ],
  },
  {
    category: 'Core CS',
    items: [
      { name: 'Data Structures & Algorithms', level: 89 },
      { name: 'OOP', level: 92 },
      { name: 'DBMS', level: 88 },
      { name: 'Operating Systems', level: 84 },
    ],
  },
]

export const projectFilters = ['All', 'AI App', 'Web App', 'Portfolio']

export const projects = [
  {
    slug: 'my-vie',
    title: 'Personalized Learning Assistant (MY VIE)',
    category: 'AI App',
    image: AI,
    summary:
      'An AI-powered learning assistant integrated with Gemini API for question answering, PDF context retrieval, and voice/text interactions.',
    description:
      'Built as a personalized tutor with a professional dark theme, this project combines LLM-driven assistance, uploaded document context, and polished conversational UI.',
    stack: ['Flask', 'Gemini API', 'JavaScript'],
    year: '2025',
    liveUrl: '#contact',
    repoUrl: '#contact',
    accent: 'from-fuchsia-500 via-cyan-400 to-blue-500',
    details: [
      'Question answering with contextual retrieval from PDFs',
      'Voice and text interaction in a dark premium interface',
      'Designed to feel like a polished tutoring assistant',
    ],
    frames: ['Chat interface', 'PDF context', 'Voice assistant'],
  },
  {
    slug: 'weather-forecast-app',
    title: 'Weather Forecast App',
    image: weather,
    category: 'Web App',
    summary:
      'A live weather dashboard with Chart.js visualizations, API response caching, and dynamic gradients based on conditions.',
    description:
      'The app focuses on real-time clarity and an engaging visual layer, making weather data easy to read while remaining responsive and lightweight.',
    stack: ['React.js', 'Chart.js', 'Open-Meteo API'],
    year: '2025',
    liveUrl: '#contact',
    repoUrl: '#contact',
    accent: 'from-emerald-400 via-sky-400 to-indigo-500',
    details: [
      'Live data visualization with contextual color treatment',
      'API caching for a smoother repeat usage flow',
      'Responsive layout tuned for quick weather scanning',
    ],
    frames: ['Forecast chart', 'City search', 'Condition gradient'],
  },
  {
    slug: 'pokedex-team-builder',
    title: 'Pokedex & Team Builder',
    image: pokemon,
    category: 'Web App',
    summary:
      'An interactive Pokédex with search, filtering, and a team-builder module consuming a public REST API.',
    description:
      'This project emphasizes discoverability and collection management, combining live API data with a clean UI for browsing and team composition.',
    stack: ['React.js', 'PokeAPI'],
    year: '2025',
    liveUrl: '#contact',
    repoUrl: '#contact',
    accent: 'from-violet-500 via-blue-500 to-cyan-400',
    details: [
      'Search and filter flows for fast browsing',
      'Team-builder module to curate a favorite lineup',
      'REST API integration with a polished product feel',
    ],
    frames: ['Pokédex list', 'Search', 'Team builder'],
  },
  {
    slug: 'portfolio-website',
    title: 'Portfolio Website',
    image: portfolio,
    category: 'Portfolio',
    summary:
      'A responsive personal portfolio built to showcase projects, skills, and achievements with a modern accessible UI.',
    description:
      'Originally built in HTML, CSS, and JavaScript, this project established the foundation for presenting work clearly across devices and screen sizes.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    year: '2024',
    liveUrl: '#contact',
    repoUrl: '#contact',
    accent: 'from-amber-400 via-rose-500 to-fuchsia-500',
    details: [
      'Responsive layout and accessible navigation',
      'Modern visual presentation for projects and skills',
      'A strong base for iterative portfolio upgrades',
    ],
    frames: ['Hero', 'Projects', 'Contact'],
  },
]

export const experience = [
  {
    period: 'Jan 2026 — Present',
    title: 'Frontend & Full Stack Development Intern',
    company: 'CBNITS India Private Limited',
    summary:
      'Developed and maintained responsive, production-ready UI features for an enterprise client engagement in the life sciences sector.',
    points: [
      'Built reusable UI components across React.js, Vue.js, and Node.js projects to improve consistency and reduce duplicate code',
      'Collaborated with cross-functional teams to translate requirements into shipped functionality',
      'Designed and executed automated end-to-end and regression test suites using Playwright, Selenium, and Pytest',
    ],
  },
]

export const commands = [
  { id: 'about', label: 'Jump to About', type: 'scroll', target: 'about' },
  { id: 'skills', label: 'Jump to Skills', type: 'scroll', target: 'skills' },
  { id: 'projects', label: 'Jump to Projects', type: 'scroll', target: 'projects' },
  { id: 'experience', label: 'Jump to Experience', type: 'scroll', target: 'experience' },
  { id: 'contact', label: 'Jump to Contact', type: 'scroll', target: 'contact' },
  { id: 'top', label: 'Back to top', type: 'scroll', target: 'home' },
  { id: 'theme', label: 'Toggle theme', type: 'theme' },
  { id: 'resume', label: 'Download resume', type: 'link', href: '/resume.pdf' },
]