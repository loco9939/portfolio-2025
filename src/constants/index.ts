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
];

export const SOCIAL_LINKS = {
    github: 'https://github.com/loco9939',
    linkedin: 'https://www.linkedin.com/in/yiju-kim-0462a831a/', // Placeholder based on user request, will need actual URL if available or keep placeholder
    email: 'mailto:hifiju5047@gmail.com', // Placeholder
    blog: 'https://wix9939.tistory.com/', // Placeholder
};

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
        overview: `
### Problem
Shift workers often struggle with complex scheduling requirements, leading to conflicts and inefficiency.

### Solution
Shift Scheduler automates this process, allowing users to define constraints and generate optimal schedules with a single click.

### Key Features
- **Automated Scheduling**: Uses an algorithm to respect all user-defined constraints.
- **User-Friendly Interface**: Drag-and-drop functionality for easy adjustments.
- **Mobile Responsive**: Accessible on all devices for on-the-go checks.
        `,
        techStack: [
            { name: 'Next.js', reason: 'For server-side rendering and improved SEO performance.' },
            { name: 'TypeScript', reason: 'To ensure type safety and reduce runtime errors.' },
            { name: 'Tailwind CSS', reason: 'For rapid UI development and consistent styling.' },
            { name: 'Vercel', reason: 'For seamless deployment and CI/CD integration.' },
        ],
        troubleshooting: [
            {
                problem: 'Complex state management for schedule constraints.',
                solution: 'Implemented a custom hook with useReducer to manage complex state transitions.',
                result: 'Improved code maintainability and reduced bugs related to state updates.',
            },
        ],
        gallery: [shiftSchedulerImg],
    },
    {
        id: 2,
        title: 'Dear Moment',
        description: 'A transparent platform that connects wedding snap clients and photographers.',
        tech: ['Next.js', 'Shadcn-ui', 'TypeScript', 'Tailwind CSS', 'Vercel'],
        github: 'https://github.com/loco9939/dear-moment-frontend',
        demo: 'https://dear-moment.kro.kr',
        image: dearMomentImg,
        overview: `
### Vision
To bring transparency and ease to the wedding photography market.

### Implementation
Built a marketplace where photographers can showcase their portfolios and clients can easily book sessions.
        `,
        techStack: [
            { name: 'Next.js', reason: 'Chosen for its robust routing and SSR capabilities.' },
            { name: 'Shadcn-ui', reason: 'To leverage accessible and customizable components.' },
            { name: 'TypeScript', reason: 'To ensure type safety and reduce runtime errors.' },
            { name: 'Tailwind CSS', reason: 'For rapid UI development and consistent styling.' },
            { name: 'Vercel', reason: 'For seamless deployment and CI/CD integration.' },
        ],
        troubleshooting: [
            {
                problem: 'Optimizing image loading for heavy portfolios.',
                solution: 'Used Next.js Image component and implemented lazy loading.',
                result: 'Reduced initial page load time by 40%.',
            },
        ],
        gallery: [dearMomentImg],
    },
    {
        id: 3,
        title: 'Brainrot Type Test',
        description: 'Personality type test based on the "Italian Brainlot AI meme',
        tech: ['Next.js', 'Shadcn-ui', 'TypeScript', 'Tailwind CSS', 'Netlify'],
        github: 'https://github.com/loco9939/brainrot-type',
        demo: 'https://brainrot-type-test.netlify.app/',
        image: brainrotImg,
        overview: `
### Concept
A fun, viral personality test leveraging popular internet memes.

### Tech
Built with speed and shareability in mind.
        `,
        techStack: [
            { name: 'Next.js', reason: 'Fast static site generation.' },
            { name: 'Shadcn-ui', reason: 'To leverage accessible and customizable components.' },
            { name: 'TypeScript', reason: 'To ensure type safety and reduce runtime errors.' },
            { name: 'Tailwind CSS', reason: 'For rapid UI development and consistent styling.' },
            { name: 'Netlify', reason: 'Easy deployment for static sites.' },
        ],
        troubleshooting: [
            {
                problem: 'Handling high traffic spikes from viral sharing.',
                solution: 'Cached static assets via CDN.',
                result: 'Zero downtime during traffic surges.',
            },
        ],
        gallery: [brainrotImg],
    },
    {
        id: 4,
        title: 'Tossfolio',
        description: 'A personal asset management site with a Toss-like feel',
        tech: ['React', 'Vite', 'Supabase', 'Zustand', 'Playwright', 'MSW', 'Styled-components'],
        github: 'https://github.com/loco9939/tossfolio',
        demo: 'https://tossfolio.vercel.app/landing',
        image: tossfolioImg,
        overview: `
### Goal
Recreate the smooth user experience of the Toss app on the web.

### Focus
Smooth animations and intuitive financial data visualization.
        `,
        techStack: [
            { name: 'React', reason: 'Component-based architecture.' },
            { name: 'Vite', reason: 'Fast build tool and dev server.' },
            { name: 'Supabase', reason: 'Quick backend setup with real-time capabilities.' },
            { name: 'Zustand', reason: 'Lightweight state management.' },
            { name: 'Playwright', reason: 'For reliable end-to-end testing.' },
            { name: 'MSW', reason: 'Mocking API requests for testing.' },
            { name: 'Styled-components', reason: 'Component-level styling with dynamic props.' },
        ],
        troubleshooting: [
            {
                problem: 'Complex animations causing jank.',
                solution: 'Optimized re-renders and used CSS transforms.',
                result: 'Achieved 60fps animations on most devices.',
            },
        ],
        gallery: [tossfolioImg],
    },
    {
        id: 5,
        title: 'Recycling Quiz',
        description: 'Recycling quiz app',
        tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
        github: 'https://github.com/loco9939/recycling-app',
        demo: 'https://recycling-app-eta.vercel.app/',
        image: recyclingImg,
        overview: `
### Educational Tool
A quiz app designed to educate users about proper recycling practices.
        `,
        techStack: [
            { name: 'Next.js', reason: 'SEO friendly for educational content.' },
            { name: 'TypeScript', reason: 'To ensure type safety and reduce runtime errors.' },
            { name: 'Tailwind CSS', reason: 'For rapid UI development and consistent styling.' },
            { name: 'Vercel', reason: 'For seamless deployment and CI/CD integration.' },
        ],
        troubleshooting: [],
        gallery: [recyclingImg],
    },
    {
        id: 6,
        title: 'Shifter',
        description: 'A shift management application by Flutter',
        tech: ['Flutter', 'Supabase'],
        github: 'https://github.com/loco9939/shifter',
        demo: 'https://play.google.com/store/apps/details?id=com.hifiju5047.shifter',
        image: shifterImg,
        overview: `
### Mobile First
A native mobile application for shift management.
        `,
        techStack: [
            { name: 'Flutter', reason: 'Cross-platform mobile development.' },
            { name: 'Supabase', reason: 'Backend as a Service.' },
        ],
        troubleshooting: [],
        gallery: [shifterImg],
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
