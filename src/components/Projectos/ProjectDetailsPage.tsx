import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Card, Container, Spinner, Alert } from 'react-bootstrap';
import { fetchProjectById, Project } from '../../api/projetcService';

const ProjectDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isTouching, setIsTouching] = useState(false);

  useEffect(() => {
    const loadProject = async () => {
      try {
        if (!id) throw new Error('ID no proporcionado');
        const data = await fetchProjectById(id);
        setProject(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
        navigate('/projects', { replace: true });
      } finally {
        setLoading(false);
      }
    };

    loadProject();
  }, [id, navigate]);

  // Función mejorada para navegación en móviles
  const handleNavigation = (path: string) => {
    if (!isTouching) {
      navigate(path);
    }
  };

  if (loading) return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
      <Spinner animation="border" variant="primary" />
    </Container>
  );

  if (error) return (
    <Container className="py-4">
      <Alert variant="danger" className="text-center">
        {error}
      </Alert>
    </Container>
  );

  if (!project) return (
    <Container className="py-4">
      <Alert variant="warning" className="text-center">
        Proyecto no encontrado
      </Alert>
    </Container>
  );

  return (
    <Container className="py-4">      
      <Card className="shadow-sm">
        <Card.Img 
          variant="top" 
          src={project.image} 
          style={{ maxHeight: '50vh', objectFit: 'cover' }}
        />
        <Card.Body>
          <Card.Title className="h3">{project.title}</Card.Title>
          <Card.Text className="lead">{project.detailedDescription}</Card.Text>
          
          {project.features && (
            <div className="mb-4">
              <h5 className="h5">Características principales:</h5>
              <ul className="list-unstyled">
                {project.features.map((feature, index) => (
                  <li key={index} className="py-1">
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mb-4">
            <h5 className="h5">Tecnologías utilizadas:</h5>
            <div className="d-flex flex-wrap gap-2 py-2">
              {project.technologies.map((tech, index) => (
                <span key={index} className="badge bg-primary py-2 px-3">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {project.challenges && (
            <div className="mb-4">
              <h5 className="h5">Desafíos:</h5>
              <p className="text-muted">{project.challenges}</p>
            </div>
          )}

          <div className="d-flex gap-2 flex-wrap">
            {project.githubLink && (
              <Button 
                href={project.githubLink} 
                target="_blank" 
                variant="outline-dark"
                className="mb-4 touch-optimized-btn"
                onTouchStart={() => setIsTouching(true)}
                onTouchEnd={() => setIsTouching(false)}
              >
                <i className="bi bi-github me-2"></i> Ver código
              </Button>
            )}
            <Button 
              onClick={() => handleNavigation('/projects')}
              onTouchStart={() => setIsTouching(true)}
              onTouchEnd={() => {
              setIsTouching(false);
              handleNavigation('/projects');
              }}
              variant="outline-primary" 
              className="mb-4 touch-optimized-btn"
            >
              ← Volver a proyectos
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ProjectDetailsPage;