export interface Project {
    id: string;
    title: string;
    shortDescription: string;
    detailedDescription: string;
    technologies: string[];
    image: string;
    githubLink?: string;
    features?: string[];
    challenges?: string;
  }