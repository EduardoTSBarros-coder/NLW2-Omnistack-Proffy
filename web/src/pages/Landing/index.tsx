import React from 'react';
import Logo from '../../assets/images/logo.svg';
import Landing from '../../assets/images/landing.svg';
import StudyIcon from '../../assets/images/icons/study.svg';
import ProfIcon from '../../assets/images/icons/give-classes.svg';
import PurpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import './style.css';


function landing() {


    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={Logo} alt="logo" />
                    <h2>Sua plataforma de estudos online</h2>
                </div>
                <img src={Landing} alt="landing" className="hero-image"/>
                <div className="buttons-container">
                    <a href="/" className="study">
                        <img src={StudyIcon} alt="Estudar" />
                        Estudar
                    </a>
                    <a href="/" className="give-classes">
                        <img src={ProfIcon} alt="Aula" />
                        Dar Aulas
                    </a>
                </div>
              <span className="total-connections">
                  Total de  200 conexoes ja realizadas <img src={PurpleHeartIcon} alt="coracao"/>
              </span>
            </div>
        </div>
    );

}




export default landing;