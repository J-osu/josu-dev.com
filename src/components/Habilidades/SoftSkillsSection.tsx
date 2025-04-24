import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import { BiUser } from 'react-icons/bi';

const SoftSkillsSection: React.FC = () => {
  const softSkills = [
    { name: 'Trabajo en equipo', level: 95 },
    { name: 'Comunicación', level: 85 },
    { name: 'Resolución de problemas', level: 90 },
    { name: 'Adaptabilidad', level: 80 },
    { name: 'Gestión del tiempo', level: 75 }
  ];

  return (
    <div className="soft-skills-section">
      <h4 className="section-title mb-4">
        <BiUser className="me-2" /> Soft Skills
      </h4>
      {softSkills.map((skill, index) => (
        <div key={`soft-${index}`} className="mb-3">
          <div className="d-flex justify-content-between">
            <span>{skill.name}</span>
            <span>{skill.level}%</span>
          </div>
          <ProgressBar 
            now={skill.level} 
            className="skill-progress-bar"
          />
        </div>
      ))}
    </div>
  );
};

export default SoftSkillsSection;