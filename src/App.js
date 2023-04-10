  import './App.css';
  import "./Responsive.css"
  import Contact from './composents/contact/Contact';
  import Navbar from './composents/navbar/Navbar';
  import Works from './composents/travaux/Works';
  import Presentation from './composents/presentation/Presentation';
  import Accueil from './composents/accueil/Accueil';
  import Skills from './composents/skills/Skills';

function App() {
  return (
    <div className='website'>
      <Accueil />
      <Presentation />
      <Skills />
      <Works />
      <Contact />
      <Navbar />
   <div className='mise_en_page'></div>
   </div>
  );
}

export default App;
