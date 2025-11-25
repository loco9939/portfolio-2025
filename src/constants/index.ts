import { FaReact, FaNodeJs, FaGitAlt, FaFigma, FaJira, FaSlack } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiJavascript, SiSupabase } from 'react-icons/si';

import shiftSchedulerImg from '../assets/shift-scheduler-img.png';
import dearMomentImg from '../assets/dear-moment-img.png';
import brainrotImg from '../assets/brainrot-img.png'
import recyclingImg from '../assets/recycling-img.png'
import tossfolioImg from '../assets/tossfolio-img.png'
import shifterImg from '../assets/shifter-img.png'

export const NAV_LINKS = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
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
        title: 'Shift Scheduler',
        description: 'The optimal scheduling solution for shift workers. Set complex work conditions and easily complete schedules with a single button.',
        tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
        github: 'https://github.com/loco9939/shift-scheduler',
        demo: 'https://shift-scheduler-one.vercel.app',
        image: shiftSchedulerImg,
    },
    {
        id: 2,
        title: 'Dear Moment',
        description: 'A transparent platform that connects wedding snap clients and photographers.',
        tech: ['Next.js', 'Shadcn-ui', 'TypeScript', 'Tailwind CSS', 'Vercel'],
        github: 'https://github.com/loco9939/dear-moment-frontend',
        demo: 'https://dear-moment.kro.kr',
        image: dearMomentImg,
    },
    {
        id: 3,
        title: 'Brainrot Type Test',
        description: 'Personality type test based on the "Italian Brainlot AI meme',
        tech: ['Next.js', 'Shadcn-ui', 'TypeScript', 'Tailwind CSS', 'Netlify'],
        github: 'https://github.com/loco9939/brainrot-type',
        demo: 'https://brainrot-type-test.netlify.app/',
        image: brainrotImg,
    },
    {
        id: 4,
        title: 'Tossfolio',
        description: 'A personal asset management site with a Toss-like feel',
        tech: ['React', 'Vite', 'Supabase', 'Zustand', 'Playwright', 'MSW', 'Styled-components'],
        github: 'https://github.com/loco9939/tossfolio',
        demo: 'https://tossfolio.vercel.app/landing',
        image: tossfolioImg,
    },
    {
        id: 5,
        title: 'Recycling Quiz',
        description: 'Recycling quiz app',
        tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
        github: 'https://github.com/loco9939/recycling-app',
        demo: 'https://recycling-app-eta.vercel.app/',
        image: recyclingImg,
    },
    {
        id: 6,
        title: 'Shifter',
        description: 'A shift management application by Flutter',
        tech: ['Flutter', 'Supabase'],
        github: 'https://github.com/loco9939/shifter',
        demo: 'https://play.google.com/store/apps/details?id=com.hifiju5047.shifter',
        image: shifterImg,
    },
];

export const EXPERIENCES = [
    {
        title: 'WATA AI Corp. - Frontend Developer',
        period: '2023.11 - Present',
        description: 'Building a digital twin logistics management platform. Development of logistics platform admin service',
    },
    {
        title: 'Quantus Corp. - Frontend Developer',
        period: '2023.03 - 2023.09',
        description: 'Quantitative investment and lecture platform development.',
    },
    {
        title: 'Zerobase Frontend School 1st',
        period: '2022.07 - 2022.12',
        description: 'Learn markup design with web standards and accessibility in mind.\nIn-depth study of JavaScript concepts and principles.\nExperience code reviews, pair programming, and various project-based collaborations.',
    },
    {
        title: 'Kangwon National University',
        period: '2014.03 - 2019.08 (Graduated)',
        description: 'Graduated from the Department of Regional Construction Engineering\nGPA 4.14/4.5, full scholarship, early graduation\nReceived the “Exemplary Award” from the President of Kangwon National University',
    },
];
