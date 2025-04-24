interface HandProps {
    side: 'left' | 'right';
    palmLink: string;
    palmText: string;
  }
  
  const Hand = ({ side, palmLink, palmText }: HandProps) => {
    const isLeft = side === 'left';
    
    return (
      <div className={`Mano mano-${isLeft ? 'izquierda' : 'derecha'}`}>
        <div className="Palma">
          <a href={palmLink} target="_blank" rel="noreferrer">
            {palmText}
          </a>
        </div>
        <div className="dedos dedo1"></div>
        <div className="dedos dedo2"></div>
        <div className="dedos dedo3"></div>
        <div className="dedos dedo4"></div>
        <div 
          className="pulgar" 
          style={isLeft ? { left: '-20px', right: 'auto' } : {}}
        ></div>
      </div>
    );
  };
  
  export default Hand;