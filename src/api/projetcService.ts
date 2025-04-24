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

let cachedData: { projects: Project[] } | null = null;

const loadData = async (): Promise<{ projects: Project[] }> => {
  if (!cachedData) {
    const response = await fetch('/db.json');
    if (!response.ok) {
      throw new Error('Error al cargar los datos del proyecto');
    }
    cachedData = await response.json();
    
    // Verificación adicional de tipo
    if (!cachedData || !cachedData.projects) {
      throw new Error('Formato de datos inválido');
    }
  }
  
  // Aquí TypeScript sabe que cachedData no puede ser null
  return cachedData;
};

export const fetchProjects = async (): Promise<Project[]> => {
  const data = await loadData();
  return data.projects;
};

export const fetchProjectById = async (id: string): Promise<Project> => {
  const data = await loadData();
  const project = data.projects.find(p => p.id === id);
  if (!project) {
    throw new Error('Proyecto no encontrado');
  }
  return project;
};