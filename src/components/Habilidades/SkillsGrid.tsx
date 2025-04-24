import React, { useEffect, useRef } from 'react';
import 'gridstack/dist/gridstack.min.css';
import { SkillItem } from './SkillItem';
import '../../css/grid.css'

interface SkillItem {
  id: string;
  name: string;
  level: number;
  icon?: string;
}

interface SkillsGridProps {
  skills: SkillItem[];
}

const SkillsGrid: React.FC<SkillsGridProps> = ({ skills }) => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('gridstack').then(({ GridStack }) => {
        if (gridRef.current) {
          const grid = GridStack.init({
            minRow: 1,
            float: true,
            cellHeight: '80px',
            margin: 8
          });

          skills.forEach((skill) => {
            const widget = document.createElement('div');
            widget.className = 'grid-stack-item';
            widget.setAttribute('gs-w', '4');
            widget.setAttribute('gs-h', '1');
            
            widget.innerHTML = `
              <div class="grid-stack-item-content skill-tile">
                <div class="skill-info">
                  <span class="skill-name">${skill.name}</span>
                  <span class="skill-percent">${skill.level}%</span>
                </div>
                <div class="skill-bar">
                  <div class="skill-progress" style="width: ${skill.level}%"></div>
                </div>
              </div>
            `;

            gridRef.current?.appendChild(widget);
            grid.addWidget(widget);
          });

          return () => grid.destroy();
        }
      });
    }
  }, [skills]);

  return <div ref={gridRef} className="grid-stack"></div>;
};

export default SkillsGrid;