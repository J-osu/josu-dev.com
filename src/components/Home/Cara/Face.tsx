import Eyes from './Eyes';

const Face = () => {
  return (
    <div className="cara">
      <Eyes />
      
      <div className="cv">
        <a 
          href="/pdf/Curriculum.pdf" 
          download="Mi-CV" 
          className="btn-14"
        >
          <span>CV</span>
        </a>
      </div>
      
      <div className="boca">
        <div className="nombre"><h1>Josu-dev</h1></div>
        <div className="description"><h4>Desarrollador web</h4></div>
      </div>
    </div>
  );
};

export default Face;