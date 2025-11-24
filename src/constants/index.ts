import { FaReact, FaNodeJs, FaGitAlt, FaFigma, FaJira, FaSlack } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiJavascript, SiSupabase } from 'react-icons/si';

export const NAV_LINKS = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
];

export const HERO_WORDS = ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'];

export const SKILLS = {
    Frontend: [
        { name: 'React', icon: FaReact, color: '#61DAFB' },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
        { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
        { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    ],
    Backend: [
        { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
        { name: 'Supabase', icon: SiSupabase, color: '#3f9933ff' },
    ],
    Tools: [
        { name: 'Git', icon: FaGitAlt, color: '#F05032' },
        { name: 'Figma', icon: FaFigma, color: '#f21ef2ff' },
        { name: 'Jira', icon: FaJira, color: '#1e8ff2ff' },
        { name: 'Slack', icon: FaSlack, color: '#481ef2ff' },
    ],
};

export const PROJECTS = [
    {
        id: 1,
        title: 'Project Alpha',
        description: 'A comprehensive dashboard for data visualization using React and D3.js. Features real-time data updates and customizable widgets.',
        tech: ['React', 'D3.js', 'Firebase', 'Tailwind'],
        github: '#',
        demo: '#',
        image: null,
    },
    {
        id: 2,
        title: 'E-commerce Platform',
        description: 'Full-stack e-commerce solution with cart functionality, payment processing, and user authentication.',
        tech: ['Next.js', 'Stripe', 'Supabase', 'TypeScript'],
        github: '#',
        demo: '#',
        image: null,
    },
    {
        id: 3,
        title: 'Task Management App',
        description: 'Collaborative task manager with drag-and-drop interface, team workspaces, and real-time notifications.',
        tech: ['React', 'Redux', 'Node.js', 'Socket.io'],
        github: '#',
        demo: '#',
        image: null,
    },
    {
        id: 4,
        title: 'Portfolio Website',
        description: 'Modern developer portfolio built with React, Vite, and Framer Motion. Features a dark theme and smooth animations.',
        tech: ['React', 'Vite', 'Framer Motion', 'Tailwind'],
        github: '#',
        demo: '#',
        image: null,
    },
    {
        id: 5,
        title: 'Weather Dashboard',
        description: 'Weather application providing detailed forecasts, historical data, and interactive maps using OpenWeatherMap API.',
        tech: ['Vue.js', 'Chart.js', 'Leaflet', 'Sass'],
        github: '#',
        demo: '#',
        image: null,
    },
    {
        id: 6,
        title: 'Chat Application',
        description: 'Real-time chat application with private messaging, group channels, and file sharing capabilities.',
        tech: ['React', 'Firebase', 'Material UI'],
        github: '#',
        demo: '#',
        image: null,
    },
];
