const PUBLIC_BASE = import.meta.env.BASE_URL;

export const RAGUL_IMAGE = `${PUBLIC_BASE}Ragul.jpg`;
export const RAGUL_LOGO = `${PUBLIC_BASE}Ragul.jpg`;
export const THREE_D_FACE_URL =
  'https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png';

export const NAV_LINKS = [
  { label: 'Home', section: 'hero' },
  { label: 'Info', section: 'about' },
  { label: 'Skills', section: 'skills' },
  { label: 'LeetCode', section: 'leetcode' },
  { label: 'Projects', section: 'projects' },
  { label: 'Contact', section: 'contact' },
] as const;

export const MARQUEE_GIFS = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
  'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
  'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
  'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
] as const;

export const HERO_TAGLINE =
  'Ragul - AI Engineer - Creative Technologist - Python Developer - Automation Builder - ';

export const ABOUT_TEXT =
  'A passionate AI developer building intelligent solutions that create real impact. Specializing in Python-based machine learning, backend systems, and automation, I turn complex data into meaningful results. Let us bring innovative ideas to life through smart engineering.';

export const SKILLS = [
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg',
    label: 'scikit-learn',
    percent: 80,
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg',
    label: 'MySQL',
    percent: 80,
  },
  {
    img: 'https://cdn3d.iconscout.com/3d/free/thumb/free-javascript-9294848-7577991.png',
    label: 'JavaScript',
    percent: 60,
  },
  {
    img: 'https://cdn3d.iconscout.com/3d/free/thumb/free-python-9294865-7578008.png?f=webp',
    label: 'Python',
    percent: 80,
  },
  {
    img: 'https://cdn-icons-png.flaticon.com/512/226/226777.png',
    label: 'Java',
    percent: 60,
  },
  {
    img: 'https://cdn-icons-png.flaticon.com/512/6132/6132221.png',
    label: 'C',
    percent: 60,
  },
] as const;

export const PROJECTS = [
  {
    num: '01',
    name: 'Dribble',
    category: 'UI Design / HTML',
    description: 'Web layout cloning practice focused on visual structure, spacing, and front-end fundamentals.',
    url: 'https://github.com/pradhivetommy-droid/Dribble',
    col1: [
      'https://images.unsplash.com/photo-1558655146-364adaf25e7d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=80',
    ],
    col2:
      'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1400&q=80',
  },
  {
    num: '02',
    name: 'Figma',
    category: 'UI/UX Mockup',
    description: 'A Figma-style app clone exploring interface systems, layouts, and product design patterns.',
    url: 'https://github.com/pradhivetommy-droid/Figma',
    col1: [
      'https://images.unsplash.com/photo-1602576666092-bf6447a729fc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1200&q=80',
    ],
    col2:
      'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=1400&q=80',
  },
  {
    num: '03',
    name: 'igallery',
    category: 'Python / Web',
    description: 'Image gallery application combining Python logic with a web-facing user experience.',
    url: 'https://github.com/pradhivetommy-droid/igallery',
    col1: [
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    ],
    col2:
      'https://images.unsplash.com/photo-1554080353-a576cf803bda?auto=format&fit=crop&w=1400&q=80',
  },
  {
    num: '04',
    name: 'restweb',
    category: 'HTML / Web Basics',
    description: 'A simple restaurant page built to practice page composition and basic web presentation.',
    url: 'https://github.com/pradhivetommy-droid/restweb',
    col1: [
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=1200&q=80',
    ],
    col2:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80',
  },
  {
    num: '05',
    name: 'MathServer',
    category: 'Python / Server Logic',
    description: 'Server-side computation experiments for clean math workflows and backend problem solving.',
    url: 'https://github.com/pradhivetommy-droid/MathServer',
    col1: [
      'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80',
    ],
    col2:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=80',
  },
  {
    num: '06',
    name: 'AI Resume Screener',
    category: 'Python / NLP / Streamlit',
    description:
      'An AI-powered web app that extracts PDF and DOCX resume content, compares it with a job description, and calculates a match score using NLP and cosine similarity.',
    url: 'https://github.com/ragul-1021/AI-Resume_Screener',
    col1: [
      'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
    ],
    col2:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80',
  },
] as const;

export const CONTACTS = [
  {
    label: 'Email',
    value: 'ragulpradhive10@gmail.com',
    url: 'mailto:ragulpradhive10@gmail.com?subject=Portfolio Inquiry',
  },
  {
    label: 'Phone',
    value: '+91 8489690048',
    url: 'https://api.whatsapp.com/send/?phone=918489690048&text=Hello%20Ragul,',
  },
] as const;

export const SOCIAL_LINKS = [
  {
    label: 'LinkedIn',
    value: '@ragul',
    url: 'https://www.linkedin.com/in/ragul-ar-a9a95b374/',
  },
  {
    label: 'Instagram',
    value: '@ragul',
    url: 'https://www.instagram.com/_.rxgul._10?igsh=MWc0bHZrYXh4MnIz&utm_source=qr',
  },
  {
    label: 'Github',
    value: '@ragul',
    url: 'https://github.com/pradhivetommy-droid',
  },
  {
    label: 'Twitter / X',
    value: '@ragul',
    url: 'https://x.com/ragul64301?s=11',
  },
] as const;
