import React, { useEffect, useRef } from 'react';
import 'gridstack/dist/gridstack.min.css';
import { BiWrench } from 'react-icons/bi';
import { 
  DiHtml5, DiCss3, DiJavascript, DiReact, DiNodejs, DiGit 
} from 'react-icons/di';
import { SiTypescript } from 'react-icons/si';

interface SkillItem {
  name: string;
  icon: React.ReactElement;
}

const hardSkills: SkillItem[] = [
  { name: 'HTML5', icon: <DiHtml5 size="2em" color="#E44D26" /> },
  { name: 'CSS3', icon: <DiCss3 size="2em" color="#264DE4" /> },
  { name: 'JavaScript', icon: <DiJavascript size="2em" color="#F7DF1E" /> },
  { name: 'TypeScript', icon: <SiTypescript size="2em" color="#3178C6" /> },
  { name: 'React', icon: <DiReact size="2em" color="#61DAFB" /> },
  { name: 'Node.js', icon: <DiNodejs size="2em" color="#68A063" /> },
  { name: 'Git', icon: <DiGit size="2em" color="#F05032" /> }
];

const HardSkillsGrid: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      Promise.all([
        import('gridstack'),
        import('react-dom/client')
      ]).then(([GridStack, ReactDOMClient]) => {
        if (gridRef.current) {
          const grid = GridStack.GridStack.init({
            minRow: 1,
            float: true,
            cellHeight: '100px',
            margin: 10
          });
          hardSkills.forEach((skill) => {
            const widget = document.createElement('div');
            widget.className = 'grid-stack-item';
            widget.setAttribute('gs-w', '2');
            widget.setAttribute('gs-h', '1');
            
            const contentDiv = document.createElement('div');
            contentDiv.className = 'grid-stack-item-content skill-tile';
            
            // Crear contenedor para el icono
            const iconContainer = document.createElement('div');
            iconContainer.className = 'skill-icon';
            
            // Crear root y renderizar el icono
            const root = ReactDOMClient.createRoot(iconContainer);
            root.render(skill.icon);
            
            // Crear elemento para el nombre
            const nameSpan = document.createElement('span');
            nameSpan.className = 'skill-name';
            nameSpan.textContent = skill.name;
            
            // Construir la estructura
            contentDiv.appendChild(iconContainer);
            contentDiv.appendChild(nameSpan);
            widget.appendChild(contentDiv);
            
            gridRef.current?.appendChild(widget);
            grid.addWidget(widget);
          });

          return () => grid.destroy();
        }
      });
    }
  }, []);

  return (
    <div className="hard-skills-grid">
      <h4 className="section-title mb-4">
        <BiWrench className="me-2" /> Hard Skills
      </h4>
      <div ref={gridRef} className="grid-stack"></div>
    </div>
  );
};

export default HardSkillsGrid;