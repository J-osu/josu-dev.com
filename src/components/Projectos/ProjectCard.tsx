import { Card, Button, Badge } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import iProject from '../../interface/iproject';
import { useState } from 'react';

const ProjectCard = ({
  id,
  title,
  description,
  technologies,
  image,
  githubLink
}: iProject) => {
  const navigate = useNavigate();
  const [isTouching, setIsTouching] = useState(false);

  // Función mejorada para navegación
  const handleNavigate = () => {
    if (!isTouching) { // Previene la navegación durante desplazamiento
      navigate(`/projects/${id}`);
    }
  };

  return (
    <Card className="h-100 shadow-sm">
      <Card.Img 
        variant="top" 
        src={image} 
        style={{ height: '180px', objectFit: 'cover' }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        
        <div className="mb-3">
          <strong>Tecnologías:</strong>
          <div className="mt-2 d-flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <Badge key={index} bg="primary" pill>
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div className="mt-auto d-flex gap-2">
          <Button 
            variant="primary" 
            onClick={handleNavigate}
            onTouchStart={() => setIsTouching(true)}
            onTouchEnd={() => {
              setIsTouching(false);
              handleNavigate();
            }}
            className="flex-grow-1 touch-optimized-btn"
          >
            Ver Detalles
          </Button>
          
          {githubLink && (
            <Button 
              href={githubLink} 
              target="_blank" 
              variant="outline-dark"
              className="flex-grow-1"
            >
              GitHub
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;