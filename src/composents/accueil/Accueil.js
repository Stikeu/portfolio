import React from 'react';
import CV from "../../ressources/images/CV_Nicolas_Sckittekatte.pdf"

export default function Accueil() {
  const handleRedirect = () => {
    window.location.href = 'https://github.com/Stikeu';
  };

  const handleDownload = () => {
    const url = CV;
    const link = document.createElement('a');
    link.href = url;
    link.download = 'CV_Nicolas_Sckittekatte.pdf'; // nom du fichier à télécharger
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  

  return (
    <div id='accueil' className='accueil_container'>
      <div className='accueil_style'>
        <div className='accueil_nomdescription'>
          <h1> <span className='text-gradient'>Nicolas Sckittekatte</span></h1>
          <p>Développeur web junior front-end en reconversion full stack</p>
        </div>
        <div className='accueil_link'>
          <button className='button_accueil' onClick={handleRedirect}>GitHub</button>
          <button className='button_accueil' onClick={handleDownload}>Télécharger CV</button>
        </div>
      </div>
    </div>
  );
}

