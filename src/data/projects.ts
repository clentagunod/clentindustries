interface ProjectBase {
  id: string;
  name: string;
  summary: string;
  stack: string[];
  status: 'released' | 'in-development';
}

export interface SoftwareProject extends ProjectBase {
  discipline: 'software';
  href?: string;
}

export interface WebProject extends ProjectBase {
  discipline: 'web';
  websiteUrl: string;
  currentPage: { title: string; url: string };
  snapshot: string;
}

export type Project = SoftwareProject | WebProject;

export const projects: readonly Project[] = [

  {
    id: 'auto-post-studio',
    discipline: 'software',
    name: 'AutoPost Studio',
    summary: 'Automation for posting academic information.',
    stack: ['Windows', 'Desktop'],
    status: 'released',
    href: '/downloads',
  },

  {
    id: 'edu-automata',
    discipline: 'software',
    name: 'Edu Automata',
    summary: 'Desktop automation for repetitive education tasks.',
    stack: ['Windows', 'Desktop'],
    status: 'released',
    href: '/downloads',
  },

  

  {
    id: 'edash-website',
    discipline: 'web',
    name: 'E-Dash',
    summary: 'A web application for managing academic information.',
    stack: ['React', 'CSS'],
    status: 'in-development',
    websiteUrl: 'https://www.edash.online',
    snapshot: '/assets/edash-snap.png',
    currentPage: {
      title: 'Homepage',
      url: 'https://www.edash.online',
      },
  },

    {
    id: 'teacher.aide-website',
    discipline: 'web',
    name: 'Teacher.aide',
    summary: 'A web application for teachers to manage their classes and students.',
    stack: ['React', 'CSS'],
    status: 'in-development',
    websiteUrl: 'https://teacheraide.vercel.app',
    snapshot: '/assets/teacheraide-snap.png',
    currentPage: {
      title: 'Homepage',
      url: 'https://teacheraide.vercel.app',
      },
  },
];
