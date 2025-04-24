import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Timeline from '../components/Habilidades/Timeline';
import HardSkillsGrid from '../components/Habilidades/HardSkillsGrid';
import SoftSkillsSection from '../components/Habilidades/SoftSkillsSection';
import SkillsStection from '../components/Habilidades/SkillsSection';
import '../css/skills.css';
import '../css/skillspage.css';

const SkillsPage: React.FC = () => {
  return (
    <Container className="my-5 skills-container">
      <Timeline />
      <SkillsStection />

      <Row>
        <Col md={6} className="mb-4">
          <Card className="h-100">
            <Card.Body>
              <HardSkillsGrid />
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-4">
          <Card className="h-100">
            <Card.Body>
              <SoftSkillsSection />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SkillsPage;