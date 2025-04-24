import React from 'react';
import { BiCodeAlt, BiBracket, BiCog } from 'react-icons/bi';


const Timeline: React.FC = () => {
  return (
    <section className="timeline-vertical my-5">
      <h2 className="text-center mb-5 encab">Experiencia Laboral</h2>
      <div className="timeline">
        {/* Punto 1 */}
        <div className="timeline-item">
          <div className="timeline-icon">
            <BiCodeAlt className="icon" />
          </div>
          <div className="timeline-content">
            <h5>Desarrollador Frontend</h5>
            <p>2024 - 2025</p>
            <p>Estoy trabajando en la creación de interfaces de usuario modernas y responsivas utilizando HTML, CSS y JavaScript.</p>
          </div>
        </div>
        
        {/* Punto 2 */}
        <div className="timeline-item">
          <div className="timeline-icon">
            <BiBracket className="icon" />
          </div>
          <div className="timeline-content">
            <h5>Desarrollador de Páginas webs</h5>
            <p>2023 - 2023</p>
            <p>Participé en la creación de distintas páginas webs con wordpress elements.</p>
          </div>
        </div>
        
        {/* Punto 3 */}
        <div className="timeline-item">
          <div className="timeline-icon">
            <BiCog className="icon" />
          </div>
          <div className="timeline-content">
            <h5>Técnico en Sistemas Microinformáticos y Redes</h5>
            <p>2022 - 2023</p>
            <p>Enrutamiento de cables y configuración de redes</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;