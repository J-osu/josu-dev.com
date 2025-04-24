import { useEffect, useState } from 'react';
import { Card, Row, Col, Spinner } from 'react-bootstrap';
import ProjectCard from '../components/Projectos/ProjectCard';
import { fetchProjects, Project } from '../api/projetcService';
import '../css/projetc.css';

const ProjectsPage = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await fetchProjects();
        setProjects(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  if (loading) return <Spinner animation="border" />;
  if (error) return <div>Error: {error}</div>;

  return (
    <Card className="p-4 project color-project">
      <h2 className="mb-4">Mis Proyectos</h2>
      <Row>
        {projects.map((project) => (
          <Col md={6} key={project.id} className="mb-4 card">
            <ProjectCard 
              id={project.id}
              title={project.title}
              description={project.detailedDescription}
              technologies={project.technologies}
              image={project.image}
            />
          </Col>
        ))}
      </Row>
    </Card>
  );
};

export default ProjectsPage;