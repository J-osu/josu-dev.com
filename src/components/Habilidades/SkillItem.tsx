import React from 'react';

interface SkillItemProps {
  name: string;
  level: number;
  icon?: React.ReactNode;
}

export const SkillItem: React.FC<SkillItemProps> = ({ name, level, icon }) => {
  return (
    <div className="skill-item">
      {icon && <span className="skill-icon">{icon}</span>}
      <h3>{name}</h3>
      <div className="skill-level" style={{ width: `${level}%` }}></div>
    </div>
  );
};