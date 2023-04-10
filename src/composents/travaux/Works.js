import React, {useState} from 'react';
import Projet1 from '../../ressources/images/projet/Projet1.png'
import Projet2 from '../../ressources/images/projet/Projet2.png'
import Projet3 from '../../ressources/images/projet/Projet3.png'
import Projet4 from '../../ressources/images/projet/Projet4.png'

const workItems = [
    {
        id: 1,
        title: 'Projet 1',
        description: 'Premier Projet réaliser pendant ma formation OpenClassRoom',
        descriptionPopUp: 'Projet comprenant du HTML, CSS ainsi que une librairie font awesome, le tout 100' +
                '% responsive',
        image: Projet1,
        lien: "https://github.com/Stikeu/P2_Sckittekatte_code"

    }, {
        id: 2,
        title: 'Projet 2',
        description: 'Second Projet réaliser pendant ma formation OpenClassRoom',
        descriptionPopUp: 'Projet comprenant du HTML, CSS, Sass ainsi que une librairie font awesome, le to' +
                'ut 100% responsive',
        image: Projet2,
        lien: "https://github.com/Stikeu/NicolasSckittekatte_3_01032022"
    }, {
        id: 3,
        title: 'Projet 3',
        description: 'Troisième Projet réaliser pendant ma formation OpenClassRoom',
        descriptionPopUp: 'Projet comprenant du HTML, CSS ainsi que du JS le tout 100% responsive',
        image: Projet3,
        lien: "https://github.com/Stikeu/GameOn-website-FR"
    }, {
        id: 4,
        title: 'Projet 4',
        description: 'Quatrième Projet réaliser pendant ma formation OpenClassRoom',
        descriptionPopUp: 'Projet comprenant du HTML, CSS ainsi que du JS le tout 100% responsive, accessib' +
                'le à tous (aria-label,tab-index,etc...) et un linter du nom de EsLint',
        image: Projet4,
        lien: "https://github.com/Stikeu/Front-End-Fisheye"
    }, {
        id: 5,
        title: 'Projet 3',
        description: 'Description du projet 3',
        // image: imgphp,
    }
];

export default function Work() {
    const [activePopup,
        setActivePopup] = useState(null);

    const handleCardClick = (id) => {
        const index = workItems.findIndex(item => item.id === id);
        setActivePopup(index);
        document.body.style.overflow = 'hidden';
    }
    const handleRedirectGit = () => {
        window.open(workItems[activePopup].lien, '_blank');
    };

    const handlePopupClose = () => {
        setActivePopup(null);
        document.body.style.overflow = 'auto';
    }

    return (
        <div id="work" className="work_container">
            <h1>
                <span className='text-gradient'>Mes Projets</span>
            </h1>
            <div className='work_container'>
                {workItems.map((item) => (
                    <div className="card" key={item.id} onClick={() => handleCardClick(item.id)}>
                        <img className='card_image' src={item.image} alt={item.title}/>
                        <div className="card_content">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
                {activePopup !== null && (
                    <div className="popup_container">
                        <div className="popup_content">
                            <img
                                src={workItems[activePopup].image}
                                className='img_popup'
                                alt={workItems[activePopup].title}/>
                            <h3>{workItems[activePopup].title}</h3>
                            <p>{workItems[activePopup].description}</p>
                            <p>{workItems[activePopup].descriptionPopUp}</p>
                            <div className='group_button_popup'>
                                <button className='button_popup' onClick={handleRedirectGit}>Lien vers le git</button>
                                <button className='button_popup' onClick={handlePopupClose}>Fermer</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
