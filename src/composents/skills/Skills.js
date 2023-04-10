import React from 'react'
import imgbootstrap from '../../ressources/images/boot.png'
import imgcss from '../../ressources/images/css.png'
import imghtml from '../../ressources/images/html.png'
import imgJS from '../../ressources/images/Js.png'
import imgphp from '../../ressources/images/php.png'
import imgreact from '../../ressources/images/react.png'
import imgsql from '../../ressources/images/sql.png'
import imgsass from "../../ressources/images/sass.png";

export default function Skills() {
    return (
        <div id='skills' className='skills_container'>
            <div className='skills_titre'>
                <h1>
                   <span className='text-gradient'> Compétences & Parcours !</span>
                </h1>
            </div>
            <div className='parcours_skills'>
            <div className='parcour_all'>
            <div className='card_parcour'>
                <h3>Formation OpenclassRoom</h3>
                <p>2021-2023</p>
                <p>Développeur Front End</p>
            </div>
            <div className='card_parcour'>
                <h3>Formation AFPA</h3>
                <p>2019-2020</p>
                <p>Développeur Web Et Web Mobile</p>
                <p>Diplôme Bac+2 acquis</p>
            </div>
            <div className='card_parcour'>
                <h3>Stage INSY2S</h3>
                <p>2020</p>
                <p>Stage développeur web junior afin de valider le diplôme</p>
            </div>
            <div className='card_parcour'>
                <h3>Formation MS Langage Et Développement</h3>
                <p>2019</p>
                <p>Formation découverte de 3mois sur le développement web</p>
            </div>
            </div>
            <div className='skills_all_skills'>
                <div className='front_skills'>
                    <h2 className='front_title'><span className='text-gradient'>Front-End</span></h2>
                    <div className='front_skills_img'>
                       
                        <div className="skills_logoblock">
                            <img alt='logo Bootstrap' src={imgbootstrap} className="skills_img"/>
                            <p>Bootstrap</p>
                        </div>
                        <div className="skills_logoblock">
                            <img alt='logo Css' src={imgcss} className="skills_img"/>
                            <p>CSS</p>
                        </div>
                        <div className="skills_logoblock">
                            <img alt='logo Html' src={imghtml} className="skills_img"/>
                            <p>HTML</p>
                        </div>
                        
                        
                        <div className="skills_logoblock">
                            <img alt='logo JavaScript' src={imgJS} className="skills_img"/>
                            <p>JavaScript</p>
                        </div>
                        <div className="skills_logoblock">
                            <img alt='logo React' src={imgreact} className="skills_img"/>
                            <p>React</p>
                        </div>
                        <div className="skills_logoblock">
                            <img alt='logo Sass' src={imgsass} className="skills_img"/>
                            <p>SASS</p>
                        </div>
                        
                    </div>
                </div>
                <div className='back_skills'>
                    <h2 className='back_title'><span className='text-gradient'>Back-End</span></h2>
                    <div className='back_skills_img'>
                        <div className="skills_logoblock ">
                            <img alt='logo PHP' src={imgphp} className="skills_img logo_large"/>
                            <p>PHP</p>
                        </div>
                        <div className="skills_logoblock ">
                            <img alt='logo Sql' src={imgsql} className="skills_img logo_large"/>
                            <p>SQL</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}
