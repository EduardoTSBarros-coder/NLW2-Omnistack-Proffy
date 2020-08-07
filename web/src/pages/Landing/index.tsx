import React, { useState, useEffect } from 'react';
import Logo from '../../assets/images/logo.svg';
import Landi from '../../assets/images/landing.svg';
import StudyIcon from '../../assets/images/icons/study.svg';
import ProfIcon from '../../assets/images/icons/give-classes.svg';
import PurpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import './style.css';
import { Link}  from 'react-router-dom'
import api from '../../services/api';


function Landing() {

    const [totalConnections, setTotalConnections] = useState(1);
    
    useEffect(() => {
       api.get('connections').then(response => {        
           const { total } = response.data;                
           setTotalConnections(total);      
        })
    
    }, []);

    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={Logo} alt="logo" />
                    <h2>Sua plataforma de estudos online</h2>
                </div>
                <img src={Landi} alt="landing" className="hero-image"/>
                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={StudyIcon} alt="Estudar" />
                        Estudar
                    </Link>
                    <Link to="/give-classes" className="give-classes">
                        <img src={ProfIcon} alt="Aula" />
                        Dar Aulas
                    </Link>
                </div>
              <span className="total-connections">
                  Total de  {totalConnections} conexoes ja realizadas <img src={PurpleHeartIcon} alt="coracao"/>
              </span>
            </div>
        </div>
    );

}




export default Landing;