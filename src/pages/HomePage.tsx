import Hand from '../components/Home/Manos/Hand';
import Face from '../components/Home/Cara/Face';
import '../css/home.css';

const HomePage = () => {
  return (
    <main>
      <section className="cara-con-manos home">
        <Hand 
          side="right" 
          palmLink="https://youtu.be/xvFZjo5PgG0?feature=shared" 
          palmText="Click aquí" 
        />
        
        <Face />
        
        <Hand 
          side="left" 
          palmLink="/proyectos" 
          palmText="Proyectos" 
        />
      </section>
    </main>
  );
};

export default HomePage;