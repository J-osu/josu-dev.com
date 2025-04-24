import { useEffect } from 'react';

interface EyesProps {
  className?: string;
}

const Eyes = ({ className = '' }: EyesProps) => {
  useEffect(() => {
    const pupils = document.querySelectorAll('.pupila');
    
    const updateEyePosition = (clientX: number, clientY: number) => {
      pupils.forEach((pupil) => {
        const eye = pupil.parentElement;
        if (eye) {
          const eyeRect = eye.getBoundingClientRect();
          const eyeCenterX = eyeRect.left + eyeRect.width / 2;
          const eyeCenterY = eyeRect.top + eyeRect.height / 2;
          
          // Calcular ángulo
          const rad = Math.atan2(clientX - eyeCenterX, clientY - eyeCenterY);
          const rot = rad * (180 / Math.PI) * -1 + 180;
          
          // Calcular posición dentro del ojo (limitando para que la pupila no salga)
          const deltaX = clientX - eyeCenterX;
          const deltaY = clientY - eyeCenterY;
          const distance = Math.min(
            Math.sqrt(deltaX * deltaX + deltaY * deltaY), 
            eyeRect.width / 4
          );
          
          const angle = Math.atan2(deltaY, deltaX);
          const newX = Math.cos(angle) * distance;
          const newY = Math.sin(angle) * distance;
          
          // Aplicar transformaciones
          (pupil as HTMLElement).style.transform = `
            translate(calc(-50% + ${newX}px), calc(-50% + ${newY}px))
            rotate(${rot}deg)
          `;
        }
      });
    };

    // Handlers
    const handleMouseMove = (e: MouseEvent) => updateEyePosition(e.clientX, e.clientY);
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        updateEyePosition(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    // Event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('touchmove', handleTouchMove, { passive: true });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <div className={`ojos ${className}`}>
      <div className="ojo1">
        <div className="pupila"></div>
      </div>
      <div className="ojo2">
        <div className="pupila"></div>
      </div>
    </div>
  );
};

export default Eyes;